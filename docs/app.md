# Podcast menager

### Descrição

Aplicação feito em Node com Typescript sem nenhum framework.

Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts
separados por categorias.

### Domínio

Podcasts feitos em vídeo.

### Features

- Listar os episódios podcasts em sessões de categorias
  - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcasts

## Como

#### Feature:

Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

vou retornar em uma api rest (json) o nome podcast, nome do episódio, imagem de capa, link e categorias

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - FLOW 319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "bodybuilder"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - FLOW 339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
  },
];
```
