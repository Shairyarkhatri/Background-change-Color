
const bgchange = (id) => {
    const color = getComputedStyle(document.getElementById(id)).backgroundColor;
    document.body.style.backgroundColor = color;
  }

