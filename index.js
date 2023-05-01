import { splideConfig } from "./splideConfig.js";
import { justValidateConfig } from "./justValidateConfig.js";

const paginaApp = {
  sectionParceiro() {
    const parceiroContainer = document.querySelector("#parceiros");

    if (window.innerWidth > 1550) {
      parceiroContainer.classList.add("container");
      parceiroContainer.classList.remove("container-fluid");
    } else {
      parceiroContainer.classList.remove("container");
      parceiroContainer.classList.add("container-fluid");
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1550) {
        parceiroContainer.classList.add("container");
        parceiroContainer.classList.remove("container-fluid");
      } else {
        parceiroContainer.classList.remove("container");
        parceiroContainer.classList.add("container-fluid");
      }
    });
  },
  formSubmit(form) {
    const enviarEmail = (data) => {
      fetch("https://formsubmit.co/ajax/jhuliangamer@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            // operação concluída com sucesso
            console.log("Operação concluída com sucesso!");
          } else {
            // operação falhou
            console.log("Operação falhou!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    form.addEventListener("submit", () => {
      const nome = form.querySelector("#input-nome").value;
      const email = form.querySelector("#input-email").value;
      const mensagem = form.querySelector("#input-mensagem").value;

      const data = {
        name: nome,
        email: email,
        message: mensagem,
      };
      console.log(data);

      enviarEmail(data);
    });
  },
  init() {
    splideConfig();
    justValidateConfig();
    this.sectionParceiro();

    // this.formSubmit(document.querySelector("#form-email"));
  },
};

paginaApp.init();
