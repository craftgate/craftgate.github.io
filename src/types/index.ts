export type GithubRepo = {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
};

export type GithubUser = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
};
