let arNovel = [];

class MiClase {
  constructor(nombre, visitas, img, generos, resumen, url, visitasSemana) {
    this.nombre = nombre;
    this.visitas = visitas;
    this.img = img;
    this.generos = generos;
    this.resumen = resumen;
    this.url = url;
    this.visitasSemana = visitasSemana;
  }
}

const novela1 = new MiClase(
  "Warlok In The Magus World",
  999999,
  "./asset/img/wool.jpeg",
  ["acción", "aventura", "fantasía", "artes marciales"],
  "#",
  3
);
arNovel.push(novela1);

const novela2 = new MiClase(
  "Warlok In The Magus World",
  999000,
  "./asset/img/harrypother.jpeg",
  ["acción", "fantasía", "artes marciales"],
  "#",
  2
);
arNovel.push(novela2);
const novela3 = new MiClase(
  "Warlok In The Magus World",
  990000,
  "./asset/img/reinosolvidados.jpeg",
  ["acción", "aventura", "artes marciales"],
  "#",
  3
);
arNovel.push(novela3);
const novela4 = new MiClase(
  "Warlok In The Magus World",
  900000,
  "./asset/img/warlockofthemagusworld.jpeg",
  ["acción", "aventura", "fantasía"],
  "#",
  4
);
arNovel.push(novela4);
const novela5 = new MiClase(
  "Warlok In The Magus World",
  800000,
  "./asset/img/OIP.jpeg",
  ["aventura", "fantasía", "artes marciales"],
  "#",
  5
);
arNovel.push(novela5);
const novela6 = new MiClase(
  "Warlok In The Magus World",
  700000,
  "./asset/img/silmarillion.jpeg",
  ["acción", "artes marciales"],
  "#",
  6
);
arNovel.push(novela6);
const novela7 = new MiClase(
  "Warlok In The Magus World",
  600000,
  "./asset/img/StarOdyssey.JPEG",
  ["fantasía", "artes marciales"],
  "#",
  7
);
arNovel.push(novela7);
const novela8 = new MiClase(
  "Warlok In The Magus World",
  500000,
  "./asset/img/OIP.jpeg",
  ["artes marciales"],
  "#",
  8
);
arNovel.push(novela8);
const novela9 = new MiClase(
  "Warlok In The Magus World",
  400000,
  "./asset/img/OIP.jpeg",
  ["acción", "aventura", "fantasía", "artes marciales"],
  "#",
  9
);
arNovel.push(novela9);
const novela10 = new MiClase(
  "Warlok In The Magus World",
  300000,
  "./asset/img/OIP.jpeg",
  ["acción"],
  "#",
  10
);
arNovel.push(novela10);

// Ordenar las novelas en función de las visitas
const novelasOrdenadas = arNovel.sort(
  (novelaA, novelaB) => novelaB.visitas - novelaA.visitas
);
const novelasSemana = arNovel.sort(
  (novelaA, novelaB) => novelaB.visitasSemana - novelaA.visitasSemana
);

const topsectionUno = document.querySelector("#topsectionUno");
const topsectionDos = document.querySelector("#topsectionDos");

function ordenVisitas() {
  let contUnoHTML = "";
  let contDosHTML = "";

  for (let i = 0; i < 4; i++) {
    const enlaceUnoHTML = `
      <a href="${novelasOrdenadas[i].url}" class="carusel">
        <img src="${novelasOrdenadas[i].img
      }" class="img_blockCont" alt="algo" id="imgtop${i + 5}">
      </a>`;

    const enlaceDosHTML = `
      <a href="${novelasOrdenadas[i + 3].url}" class="carusel">
        <img src="${novelasOrdenadas[i + 3].img
      }" class="img_blockCont" alt="algo" id="imgtop${i + 5}">
      </a>`;

    contUnoHTML += enlaceUnoHTML;
    contDosHTML += enlaceDosHTML;
  }

  topsectionUno.innerHTML = contUnoHTML;
  topsectionDos.innerHTML = contDosHTML;

  const topLinks = topsectionUno.querySelectorAll("a.carusel");
  topLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const libro = event.target.getAttribute("id");
      agregarLectura(libro);
    });
  });
}

ordenVisitas();

const blockTopSemana = document.querySelector("#blockTopSemana");

function ordenSemana() {
  const contSemana = document.createElement("div");
  contSemana.classList.add("blockSemana");
  contSemana.innerHTML = `
    <a href="${novelasSemana[0].url}" class="semanatop">
      <img src="${novelasSemana[0].img}" class="img_blocksemana" alt="algo">
    </a>
    <a href="${novelasSemana[1].url}" class="semanatop">
      <img src="${novelasSemana[1].img}" class="img_blocksemana" alt="algo">
    </a>
    <a href="${novelasSemana[2].url}" class="semanatop">
      <img src="${novelasSemana[2].img}" class="img_blocksemana" alt="algo">
    </a>
    <a href="${novelasSemana[3].url}" class="semanatop">
      <img src="${novelasSemana[3].img}" class="img_blocksemana" alt="algo">
    </a>
    <a href="${novelasSemana[4].url}" class="semanatop">
      <img src="${novelasSemana[4].img}" class="img_blocksemana" alt="algo">
    </a>
    <a href="${novelasSemana[5].url}" class="semanatop">
      <img src="${novelasSemana[5].img}" class="img_blocksemana" alt="algo">
    </a>`;

  blockTopSemana.appendChild(contSemana);
}

ordenSemana();

//function one(){
//  alert(novela2.img +" " +novela2.nombre);
//}
//one();
//
//
//
//function alertar() {
//  alert("todoOk");
//  for (var i = 0; i < arNovel.length; i++) {
//    alert(arNovel[i].img + " " + arNovel[i].visitas+ " " + arNovel[i].url);
//  }
//}
//alertar(); // Muestra el mensaje "todoOk"
