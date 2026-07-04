const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    code.value = code.value.replace(/[^0-9]/g, "").slice(0, 1);

    if (code.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        code.value = "";
      }
    }
  });

});