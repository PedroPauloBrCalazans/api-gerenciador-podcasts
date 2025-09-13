import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podCastName: string) => {
  const data = await repositoryPodcast(podCastName);

  return data;
};
