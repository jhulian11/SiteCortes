export const justValidateConfig = function () {
  const validator = new JustValidate("#form-email", {
    errorLabelStyle: {
      color: "red",
    },
  });
  validator
    .addField("#input-nome", [
      {
        rule: "required",
        errorMessage: "Informe seu nome completo",
      },
      {
        rule: "maxLength",
        value: 100,
      },
    ])
    .addField("#input-email", [
      {
        rule: "required",
        errorMessage: "Informe seu E-mail",
      },
      {
        rule: "email",
        errorMessage: "E-mail inválido!",
      },
    ])
    .addField("#input-mensagem", [
      {
        rule: "required",
        errorMessage: "Informe sua Mensagem",
      },
      {
        rule: "maxLength",
        value: 1000,
      },
    
    ]);
};
