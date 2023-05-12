//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=date&q=[YOUR_QUERY]&type=video&key=[YOUR_API_KEY]

let id;
const arrayYoutube = [];
console.log("array 1:", arrayYoutube);

const response = async () => {
  for (var i = 0; i < 4; i++) {
    if (i == 0) {
      id = "_ptEa2GKoqg";
      const url = "https://www.youtube.com/watch?v=" + id;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube.push(responseJson);
    }
    if (i == 1) {
      id = "PHqgVuuBN2A";
      const url = "https://www.youtube.com/watch?v=" + id;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube.push(responseJson);
    }
    if (i == 2) {
      id = "_5aEUer0qKc";
      const url = "https://www.youtube.com/watch?v=" + id;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube.push(responseJson);
    }

    if (i == 3) {
      id = "65ROf_n7Opw";
      const url = "https://www.youtube.com/watch?v=" + id;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube.push(responseJson);
    }
  }
  for (let i = 0; i < 4; i++) {
    const arrayOne = arrayYoutube[i];
    console.log(arrayOne);
    const imgArrayOne = document.getElementById(`ultimos-youtube-eps-${i + 1}`);

    function limitarCaracteres(texto, limite) {
      if (texto.length > limite) {
        texto = texto.substring(0, limite);
      }
      return texto;
    }
    //coloquei por enquanto, mas depois tem que alterar o bootstrap
    let testeLol = limitarCaracteres(arrayOne.title, 35);
    imgArrayOne.innerHTML = `

   
    <div class="position-relative">
      <img
        src="${arrayOne.thumbnail_url}"
        class="img-fluid rounded-5"
        width="250px"
        alt=""
      />
      <a href="${arrayOne.url}" class="icon-play stretched-link">
        <i
          class="bi bi-play-circle-fill fs-3 position-absolute top-50 start-50 translate-middle"
        ></i
      ></a>
    </div>
    <small class="mt-2 ms-3 d-block text-white fs-7"
      >${arrayOne.title}</small
    >

    
  
    `;
  }
};
response();
