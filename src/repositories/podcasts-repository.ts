import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
  const data = fs.readFileSync(pathData, "utf-8"); //ler um arquivo
  const jsonFile = JSON.parse(data);

  return jsonFile;
};

// vai fornecer os dados
//stringify => converter para texto
// parse => ler o texto e converter para json
