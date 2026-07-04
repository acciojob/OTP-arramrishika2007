const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", () => {
    code.value = code.value.slice(0, 1);

    if (code.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      code.value = "";

      if (index > 0) {
        codes[index - 1].value = "";
        codes[index - 1].focus();
      }

      e.preventDefault();
    }
  });

});