import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podCastName?: string
): Promise<PodcastModel[]> => {
  const data = fs.readFileSync(pathData, "utf-8"); //ler um arquivo
  let jsonFile = JSON.parse(data);

  if (podCastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podCastName
    );
  }

  return jsonFile;
};

// vai fornecer os dados
//stringify => converter para texto
// parse => ler o texto e converter para json
