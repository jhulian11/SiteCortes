//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=date&q=[YOUR_QUERY]&type=video&key=[YOUR_API_KEY]

let id;
const arrayYoutube = [];
console.log("array 1:", arrayYoutube);

const response = async () => {
  for (var i = 0; i < 3; i++) {
    if (i == 0) {
      id = "xhU_sp-aDMI";
      const url = "https://www.youtube.com/watch?v=" + id;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube.push(responseJson);
    }
    if (i == 1) {
      id = "CSav6UTUTwE";
      const url = "https://www.youtube.com/watch?v=" + id;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube.push(responseJson);
    }
    if (i == 2) {
      id = "C-sLJLuBlfM";
      const url = "https://www.youtube.com/watch?v=" + id;

      const responseData = await fetch(
        `https://noembed.com/embed?url=${url}&format=json`
      );
      const responseJson = await responseData.json();
      arrayYoutube.push(responseJson);
    }
  }
  for (let i = 0; i < 3; i++) {
    const arrayOne = arrayYoutube[i];
    console.log(arrayOne);
    const imgArrayOne = document.getElementById(`add-img-${i + 1}`);
    imgArrayOne.innerHTML = `

    <div
      class="card shadow-sm rounded-5 card-fundo-amarelo-claro py-2 mb-3"
    >
      <div class="row g-0">
        <div
          class="col-5 d-flex justify-content-center align-items-center"
        >
          <div>
          <img
          src="${arrayOne.thumbnail_url}"
          class="img-fluid rounded-start"
          alt="tumb1"
          width="100px"
        />
          </div>
        </div>
        <div class="col-7 ps-0">
          <div class="card-body">
            <h5 class="card-title">${arrayOne.title}</h5>
      
            <a
              href="${arrayOne.url}"
              class="btn btn-secondary btn-sm font-inter w-75 rounded-5"
              >Escute agora</a
            >
          </div>
        </div>
      </div>
    </div>
 
    
  
    `;
  }
};
response();
