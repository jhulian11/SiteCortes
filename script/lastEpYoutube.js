// Defina sua chave de API do YouTube Data
const API_KEY = "AIzaSyCG7UpB-X572v7hdJA9azg-YIww-jbLOrY";

// Defina o ID do canal do YouTube
const CHANNEL_ID = "UCNQA4SlePqFE5rJLLxFVblA";

// Defina o número máximo de resultados que você deseja receber
const MAX_RESULTS = 4;

// Faça a solicitação para a API do YouTube Data
const responseLastVideo = async () => {
  const arrayYoutubeLast = [];

  const responseData = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&key=${API_KEY}`
  );
  const responseJson = await responseData.json();
  arrayYoutubeLast.push(responseJson);
};
responseLastVideo();
