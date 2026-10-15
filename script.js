const indicador = document.querySelector(".indicador")

indicador.addEventListener("click", () => {
    if (indicador.textContent === '☾') {
        indicador.textContent = '☀︎';
    } else {
        indicador.textContent = '☾';
    }
    document.documentElement.classList.toggle('light-theme');
})