import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3776AB",
  SCSS: "#CC6699",
  Tailwind: "#06B6D4",
};

const levelMap: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

export async function GET() {
  const username = "Himanshu4234";
  const token = process.env.GITHUB_TOKEN || process.env.GH_PAT;

  try {
    // If a GitHub Personal Access Token is provided, fetch via GraphQL (includes private repo commits)
    if (token) {
      const graphqlQuery = {
        query: `
          query($username: String!) {
            user(login: $username) {
              name
              bio
              avatarUrl
              followers {
                totalCount
              }
              following {
                totalCount
              }
              repositories(first: 100, ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
                totalCount
                nodes {
                  name
                  languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                }
              }
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                      contributionLevel
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username },
      };

      const gqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "Himanshu-Portfolio-App",
        },
        body: JSON.stringify(graphqlQuery),
        next: { revalidate: 3600 },
      });

      if (gqlRes.ok) {
        const gqlData = await gqlRes.json();
        const user = gqlData?.data?.user;

        if (user) {
          const calendar = user.contributionsCollection?.contributionCalendar;
          const contributions: ContributionDay[] = [];

          calendar?.weeks?.forEach((w: any) => {
            w.contributionDays?.forEach((d: any) => {
              contributions.push({
                date: d.date,
                count: d.contributionCount,
                level: levelMap[d.contributionLevel] ?? (d.contributionCount > 0 ? 2 : 0),
              });
            });
          });

          // Calculate language percentages from repo byte sizes
          const langSizeMap: Record<string, { size: number; color: string }> = {};
          let totalBytes = 0;

          user.repositories?.nodes?.forEach((repo: any) => {
            repo.languages?.edges?.forEach((edge: any) => {
              const langName = edge.node.name;
              const size = edge.size;
              totalBytes += size;
              if (!langSizeMap[langName]) {
                langSizeMap[langName] = { size: 0, color: edge.node.color || LANGUAGE_COLORS[langName] || "#818cf8" };
              }
              langSizeMap[langName].size += size;
            });
          });

          const languages: LanguageStat[] = Object.entries(langSizeMap)
            .map(([name, val]) => ({
              name,
              percentage: totalBytes > 0 ? Math.round((val.size / totalBytes) * 100) : 0,
              color: val.color,
            }))
            .filter((l) => l.percentage > 0)
            .sort((a, b) => b.percentage - a.percentage);

          return NextResponse.json({
            success: true,
            source: "authenticated-graphql",
            user: {
              username,
              name: user.name || "Himanshu Singh Chauhan",
              bio: user.bio || "Senior Frontend Engineer & React Specialist",
              avatarUrl: user.avatarUrl || "/images/himanshu.jpeg",
              publicRepos: user.repositories?.totalCount || 10,
              followers: user.followers?.totalCount || 2,
              following: user.following?.totalCount || 0,
              profileUrl: `https://github.com/${username}`,
            },
            stats: {
              totalContributions: calendar?.totalContributions || 249,
              publicRepos: user.repositories?.totalCount || 10,
              streakDays: 34,
            },
            languages: languages.length > 0 ? languages : [
              { name: "JavaScript", percentage: 45, color: "#F7DF1E" },
              { name: "TypeScript", percentage: 35, color: "#3178C6" },
              { name: "Tailwind CSS", percentage: 15, color: "#06B6D4" },
              { name: "HTML", percentage: 5, color: "#E34F26" },
            ],
            contributions,
            updatedAt: new Date().toISOString(),
          });
        }
      }
    }

    // Fallback to Public GitHub REST API & Public Contribution Scraper
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "Himanshu-Portfolio-App",
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });

    let userData: any = null;
    if (userRes.ok) {
      userData = await userRes.json();
    }

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          "User-Agent": "Himanshu-Portfolio-App",
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    let languageCounts: Record<string, number> = {
      JavaScript: 43,
      TypeScript: 29,
      Tailwind: 14,
      HTML: 14,
    };

    let totalRepos = userData?.public_repos || 10;

    if (reposRes.ok) {
      const repos = await reposRes.json();
      if (Array.isArray(repos) && repos.length > 0) {
        totalRepos = repos.length;
        const langMap: Record<string, number> = {};
        let totalLangs = 0;

        repos.forEach((repo: any) => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            totalLangs += 1;
          }
        });

        if (totalLangs > 0) {
          languageCounts = {};
          Object.entries(langMap).forEach(([lang, count]) => {
            languageCounts[lang] = Math.round((count / totalLangs) * 100);
          });
        }
      }
    }

    let contributions: ContributionDay[] = [];
    let totalContributions = 249;

    try {
      const contribRes = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        {
          headers: { "User-Agent": "Himanshu-Portfolio-App" },
          next: { revalidate: 3600 },
        }
      );

      if (contribRes.ok) {
        const contribData = await contribRes.json();
        if (contribData?.contributions && Array.isArray(contribData.contributions)) {
          contributions = contribData.contributions;
          totalContributions = contribData.total?.lastYear || contribData.total?.[new Date().getFullYear()] || totalContributions;
        }
      }
    } catch (err) {
      // Ignore contribution API error
    }

    const languages: LanguageStat[] = Object.entries(languageCounts)
      .map(([name, percentage]) => ({
        name,
        percentage,
        color: LANGUAGE_COLORS[name] || "#818cf8",
      }))
      .sort((a, b) => b.percentage - a.percentage);

    return NextResponse.json({
      success: true,
      source: "public-rest",
      user: {
        username: userData?.login || username,
        name: userData?.name || "Himanshu Singh Chauhan",
        bio: userData?.bio || "Senior Frontend Engineer & React Specialist",
        avatarUrl: userData?.avatar_url || "/images/himanshu.jpeg",
        publicRepos: totalRepos,
        followers: userData?.followers || 2,
        following: userData?.following || 0,
        profileUrl: userData?.html_url || `https://github.com/${username}`,
        createdAt: userData?.created_at,
      },
      stats: {
        totalContributions: totalContributions > 0 ? totalContributions : 249,
        publicRepos: totalRepos,
        streakDays: 34,
      },
      languages,
      contributions,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch GitHub statistics",
        user: {
          username,
          name: "Himanshu Singh Chauhan",
          bio: "Senior Frontend Engineer & React Specialist",
          avatarUrl: "/images/himanshu.jpeg",
          publicRepos: 10,
          followers: 2,
          profileUrl: `https://github.com/${username}`,
        },
        stats: {
          totalContributions: 249,
          publicRepos: 10,
          streakDays: 34,
        },
        languages: [
          { name: "JavaScript", percentage: 43, color: "#F7DF1E" },
          { name: "TypeScript", percentage: 29, color: "#3178C6" },
          { name: "Tailwind CSS", percentage: 14, color: "#06B6D4" },
          { name: "HTML", percentage: 14, color: "#E34F26" },
        ],
        contributions: [],
      },
      { status: 200 }
    );
  }
}
