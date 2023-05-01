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
  init() {
    splideConfig();
    justValidateConfig();
    this.sectionParceiro();
  },
};

paginaApp.init();
