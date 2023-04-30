const splideConfig = function () {
  const splideEquipeOptions = {
    start: 1,
    perPage: 1,
    focus: "center",
    trimSpace: false,
    arrows: false,
    pagination: false,
    autoWidth: true,
    gap: "3rem",
    breakpoints: {
      mediaQuery: "min",
      1050: {
        type: "loop",
        perPage: 1,
        arrows: true,
        destroy: false,
      },
      4000: {
        destroy: true,
      },
    },
  };
  const splideParceirosOptions = {
    start: 0,
    perPage: 1,
    focus: "start",
    trimSpace: false,
    arrows: false,
    pagination: false,
    autoWidth: true,
    gap: "3rem",
  
  };

  const splideEquipe = new Splide(`#splide-equipe`, splideEquipeOptions);
  const splideParceiros = new Splide(`#splide-parceiros`, splideParceirosOptions);
  splideEquipe.mount();
  splideParceiros.mount();
};

splideConfig();
