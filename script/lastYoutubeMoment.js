//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=date&q=[YOUR_QUERY]&type=video&key=[YOUR_API_KEY]

let idDois;
const arrayYoutube2 = [];
console.log("array 1:", arrayYoutube2);

const responseDois = async () => {
  for (var i = 0; i < 4; i++) {
    if (i == 0) {
      idDois = "_ptEa2GKoqg";
      const url = "https://www.youtube.com/watch?v=" + idDois;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube2.push(responseJson);
    }
    if (i == 1) {
      idDois = "PHqgVuuBN2A";
      const url = "https://www.youtube.com/watch?v=" + idDois;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube2.push(responseJson);
    }
    if (i == 2) {
      idDois = "_5aEUer0qKc";
      const url = "https://www.youtube.com/watch?v=" + idDois;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube2.push(responseJson);
    }

    if (i == 3) {
      idDois = "65ROf_n7Opw";
      const url = "https://www.youtube.com/watch?v=" + idDois;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube2.push(responseJson);
    }
  }
  for (let i = 0; i < 4; i++) {
    const arrayDois = arrayYoutube2[i];
    console.log(arrayDois);
    const imgarrayDois = document.getElementById(
      `ultimos-youtube-eps-${i + 1}`
    );

    function limitarCaracteres(texto, limite) {
      if (texto.length > limite) {
        texto = texto.substring(0, limite);
      }
      return texto;
    }
    //coloquei por enquanto, mas depois tem que alterar o bootstrap
    let testeLol = limitarCaracteres(arrayDois.title, 35);
    imgarrayDois.innerHTML = `

   
    <div class="position-relative">
      <img
        src="${arrayDois.thumbnail_url}"
        class="img-fluid rounded-5"
        width="250px"
        alt=""
      />
      <a href="${arrayDois.url}" class="icon-play stretched-link">
        <i
          class="bi bi-play-circle-fill fs-3 position-absolute top-50 start-50 translate-middle"
        ></i
      ></a>
    </div>
    <small class="mt-2 ms-3 d-block text-white fs-7"
      >${arrayDois.title}</small
    >

    
  
    `;
  }
};
responseDois();
