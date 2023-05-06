// Defina sua chave de API do YouTube Data
const API_KEY = "sua_chave_de_api_aqui";

// Defina o ID do canal do YouTube
const CHANNEL_ID = "id_do_canal_aqui";

// Defina o número máximo de resultados que você deseja receber
const MAX_RESULTS = 10;

// Faça a solicitação para a API do YouTube Data
axios
  .get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&key=${API_KEY}`
  )
  .then((response) => {
    // Processar os resultados
    const videos = response.data.items;
    videos.forEach((video) => {
      const title = video.snippet.title;
      const videoId = video.id.videoId;
      console.log(`Título: ${title}, ID do vídeo: ${videoId}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
