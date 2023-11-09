const API_TOKEN = import.meta.env.API_TOKEN;

const get = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${API_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.json();
};

export const apiClient = {
  get,
};
