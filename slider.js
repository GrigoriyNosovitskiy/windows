document.addEventListener("DOMContentLoaded", () => {
  const sliders = [];
  sliders.push(document.getElementsByClassName("middle-img-box")[0]);
  sliders.push(document.getElementsByClassName("second-page")[0]);
  sliders.push(document.getElementsByClassName("thirdpage")[0]);
  sliders.push(document.getElementsByClassName("last-page")[0]);

  const loader = document.getElementsByClassName("loading-bar")[0],
    currentValue = document.getElementById("currentValue");

  let currentPage = 1;

  const resultObj = {
    place: 1,
    glassType: 1,
    otliv: false,
    otkos: false,
    podokonik: false,
    setka: false,
    count: 1,
  };

  changePage(1);

  document
    .getElementById("footer-btn-first")
    .addEventListener("click", function () {
      changePage(currentPage - 1);
    });

  document
    .getElementById("footer-btn-yellow")
    .addEventListener("click", function () {
      changePage(currentPage + 1);
    });

  document.getElementsByName("place").forEach((el) => {
    el.addEventListener("change", (el) => {
      resultObj.place = el.target.value;
    });
  });

  document.getElementsByName("glass").forEach((el) => {
    el.addEventListener("change", (el) => {
      resultObj.glassType = el.target.value;
    });
  });

  document.getElementById("otliv").addEventListener("change", (el) => {
    resultObj.otliv = Sel.target.checked;
  });

  document.getElementById("otkos").addEventListener("change", (el) => {
    resultObj.otkos = el.target.checked;
  });

  document.getElementById("podokonik").addEventListener("change", (el) => {
    resultObj.podokonik = el.target.checked;
  });

  document.getElementById("setka").addEventListener("change", (el) => {
    resultObj.setka = el.target.checked;
  });

  document.getElementById("myRange").addEventListener("change", (el) => {
    resultObj.count = el.target.value;
    currentValue.innerText = el.target.value;
  });

  function changePage(pageNum) {
    if (pageNum >= 5) pageNum = 4;
    if (pageNum <= 0) pageNum = 1;
    currentPage = pageNum;
    sliders.forEach((el) => {
      el.style.display = "none";
    });
    sliders[pageNum - 1].style.display = "block";

    switch (pageNum) {
      case 1:
        loader.style.width = "30px";
        break;
      case 2:
        loader.style.width = "50px";
      case 3:
        loader.style.width = "80px";
        break;
      case 4:
        loader.style.width = "100px";
      default:
        break;
    }
    console.log(resultObj);
  }
});
