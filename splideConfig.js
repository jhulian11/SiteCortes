const splideConfig = function () {
  const splideOptions = {
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
        destroy:false
      },
      4000: {
        destroy: true,
      },
    },
  };

  const splide = new Splide(`.splide`, splideOptions);
  splide.mount();
};

splideConfig();
