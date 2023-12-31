import {
  admArray,
  primArray,
  kalinArray,
  vyborArr,
  vasArray,
  kirovArray,
  kolpArray,
  krasnogvArray,
  krasnoselArray,
  kronstArray,
  kurortArray,
  moskArray,
  nevskArray,
  centrArray,
  frunzeArray,
  petrArray,
  petrodvorcArray,
  pushkinArray,
  murArray,
  vselArray,
  lomArray,
  gatchArray,
  tosnArray,
} from "./help.js";

const btn = document.querySelector("button");

const startLong = 59.55321;
const endLong = 60.113213;
const startLat = 30.192131;
const endLat = 30.593123;

const reverseArr = (array) => {
  const arrReverse = [];
  array.forEach((item) => {
    item.reverse();
    arrReverse.push(item);
  });
  return arrReverse;
};

const polygoons = [];

var data = {
  type: "FeatureCollection",
  features: [],
};

let points = [];
let hintContent;
let flag = false;

function createCoordinates() {
  const coor = [];
  function getRandomNumber(min, max) {
    let res = Math.random() * (max - min) + min;
    const fixedNum = res.toFixed(4);
    coor.push(Number(fixedNum));
  }
  getRandomNumber(startLong, endLong);
  getRandomNumber(startLat, endLat);

  let obj = {
    id: "id2",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: coor,
    },
    properties: {
      weight: 30,
    },
  };

  data.features.push(obj);
}

ymaps.ready(function () {
  var map = new ymaps.Map(
    "map",
    {
      center: [59.9386, 30.3141],
      // controls: [],
      zoom: 10,
      controls: ["zoomControl"],
    },
    {
      minZoom: 9,
      maxZoom: 12,
    }
  );

  //Полигоны/////////////////////////////
  var myPolygonKalinin = new ymaps.Polygon(
    [reverseArr(kalinArray)],
    {
      //Свойства
      hintContent: "Калининский район",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonGatch = new ymaps.Polygon(
    [reverseArr(gatchArray)],
    {
      //Свойства
      hintContent: "Гатчинский район",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonkronst = new ymaps.Polygon(
    [reverseArr(kronstArray)],
    {
      //Свойства
      hintContent: "Кронштадский район",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonVsel = new ymaps.Polygon(
    [reverseArr(vselArray)],
    {
      //Свойства
      hintContent: "Всеволожский район",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonLom = new ymaps.Polygon(
    [reverseArr(lomArray)],
    {
      //Свойства
      hintContent: "Ломоносовский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonPushkin = new ymaps.Polygon(
    [reverseArr(pushkinArray)],
    {
      //Свойства
      hintContent: "Пушкинский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonPetr = new ymaps.Polygon(
    [reverseArr(petrArray)],
    {
      //Свойства
      hintContent: "Петроградский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonCentr = new ymaps.Polygon(
    [reverseArr(centrArray)],
    {
      //Свойства
      hintContent: "Центральный район",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonNevskiy = new ymaps.Polygon(
    [reverseArr(nevskArray)],
    {
      //Свойства
      hintContent: "Невский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonTosno = new ymaps.Polygon(
    [reverseArr(tosnArray)],
    {
      //Свойства
      hintContent: "Тосненский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonkrasnog = new ymaps.Polygon(
    [reverseArr(krasnogvArray)],
    {
      //Свойства
      hintContent: "Красногвардейский район",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonAdm = new ymaps.Polygon(
    [
      // Координаты вершин внешней границы многоугольника.
      reverseArr(admArray),
    ],
    {
      //Свойства
      hintContent: "Адмиралтейский район",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonVyborg = new ymaps.Polygon(
    [reverseArr(vyborArr)],
    {
      //Свойства
      hintContent: "Выборгский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
      strokeStyle: "shortdash",
    }
  );

  var myPolygonMosk = new ymaps.Polygon(
    [reverseArr(moskArray)],
    {
      //Свойства
      hintContent: "Московский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
      strokeStyle: "shortdash",
    }
  );

  var myPolygonPetrodvorc = new ymaps.Polygon(
    [reverseArr(petrodvorcArray)],
    {
      //Свойства
      hintContent: "Петродворцовый р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
      strokeStyle: "shortdash",
    }
  );

  var myPolygonVasilevskiy = new ymaps.Polygon(
    [reverseArr(vasArray)],
    {
      //Свойства
      hintContent: "Василеостровский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
      strokeStyle: "shortdash",
    }
  );

  var myPolygonMurino = new ymaps.Polygon(
    [
      reverseArr(murArray),
      // Координаты вершин внешней границы многоугольника.
    ],
    {
      //Свойства
      hintContent: "Мурино",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
      strokeStyle: "shortdash",
    }
  );

  var myPolygonPrimor = new ymaps.Polygon(
    [reverseArr(primArray)],
    {
      //Свойства
      hintContent: "Приморский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonKurort = new ymaps.Polygon(
    [reverseArr(kurortArray)],
    {
      //Свойства
      hintContent: "Курортный р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonKirov = new ymaps.Polygon(
    [reverseArr(kirovArray)],
    {
      //Свойства
      hintContent: "Кировский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonKolpino = new ymaps.Polygon(
    [reverseArr(kolpArray)],
    {
      //Свойства
      hintContent: "Колпинский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonKrasnosel = new ymaps.Polygon(
    [reverseArr(krasnoselArray)],
    {
      //Свойства
      hintContent: "Красносельский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );

  var myPolygonFrunze = new ymaps.Polygon(
    [reverseArr(frunzeArray)],
    {
      //Свойства
      hintContent: "Фрунзенский р-он",
    },
    {
      // Опции.
      // Цвет заливки (красный)
      fillColor: "#FF0000",
      // Цвет границ (синий)
      strokeColor: "#0000FF",
      // Прозрачность (полупрозрачная заливка)
      opacity: 0.2,
      // Ширина линии
      strokeWidth: 4,
      // Стиль линии
    }
  );
  ///////////////////////////////
  polygoons.push(
    myPolygonKalinin,
    myPolygonPrimor,
    myPolygonVyborg,
    myPolygonMurino,
    myPolygonKolpino,
    myPolygonKirov,
    myPolygonVasilevskiy,
    myPolygonkrasnog,
    myPolygonKrasnosel,
    myPolygonkronst,
    myPolygonKurort,
    myPolygonMosk,
    myPolygonNevskiy,
    myPolygonCentr,
    myPolygonFrunze,
    myPolygonPetr,
    myPolygonPetrodvorc,
    myPolygonPushkin,
    myPolygonVsel,
    myPolygonLom,
    myPolygonGatch,
    myPolygonTosno
  );

  polygoons.forEach((polygon) => {
    polygon.events.add("click", (event) => {
      points = [];
      flag = true;
      hintContent = "";
      hintContent = polygon.properties.get("hintContent");
      data.features.forEach((feature) => {
        if (feature.geometry.type === "Point") {
          const point = feature.geometry.coordinates;
          if (polygon.geometry.contains(point)) {
            points.push(point);
          }
        }
      });
    });
  });

  map.geoObjects.add(myPolygonVyborg);
  map.geoObjects.add(myPolygonMurino);
  map.geoObjects.add(myPolygonKalinin);
  map.geoObjects.add(myPolygonPrimor);
  map.geoObjects.add(myPolygonAdm);
  map.geoObjects.add(myPolygonVasilevskiy);
  map.geoObjects.add(myPolygonKirov);
  map.geoObjects.add(myPolygonKolpino);
  map.geoObjects.add(myPolygonkrasnog);
  map.geoObjects.add(myPolygonKrasnosel);
  map.geoObjects.add(myPolygonkronst);
  map.geoObjects.add(myPolygonKurort);
  map.geoObjects.add(myPolygonMosk);
  map.geoObjects.add(myPolygonNevskiy);
  map.geoObjects.add(myPolygonMosk);
  map.geoObjects.add(myPolygonCentr);
  map.geoObjects.add(myPolygonFrunze);
  map.geoObjects.add(myPolygonPetr);
  map.geoObjects.add(myPolygonPetrodvorc);
  map.geoObjects.add(myPolygonPushkin);
  map.geoObjects.add(myPolygonVsel);
  map.geoObjects.add(myPolygonLom);
  map.geoObjects.add(myPolygonGatch);
  map.geoObjects.add(myPolygonTosno);
  /////////////////////////////

  ymaps.modules.require(["Heatmap"], function (Heatmap) {
    // Расскоментировать для отрисовки меток тепловой карты
    for (let i = 0; i < 200; i++) {
      createCoordinates();
    }

    var heatmap = new Heatmap(data);

    btn.addEventListener("click", (e) => {
      if (e.target.textContent == "скрыть тепловую карту") {
        heatmap.options.set("opacity", 0);
        e.target.textContent = "отобразить тепловую карту";
      } else {
        heatmap.options.set("opacity", 0.8);
        e.target.textContent = "скрыть тепловую карту";
      }
    });

    // var MyIconLayout = ymaps.templateLayoutFactory.createClass(
    // 	'<div style="background-image: url(img/face.png); background-size: cover; width: 30px; height: 30px;"></div>'
    //   );

    // Задаем макет иконки метки
    //   heatmap.options.set('iconLayout', MyIconLayout);

    heatmap.options.set("gradient", {
      0.1: "#bf0702",
      0.5: "orange",
      1: "red",
    });
    heatmap.options.set("opacity", 0.8);
    heatmap.options.set({
      radius: 15,
    });
    heatmap.options.set({
      weight: 500,
    });

    heatmap.setMap(map);
    map.geoObjects.add(heatmap);
  });

  // })
  document.addEventListener("click", (event) => {
    if (flag == true) {
      const modal = document.querySelectorAll(".modal");
      console.dir(event);
      if (event.target.nodeName == "SPAN") {
        // modal.forEach(modal => {
        // 	modal.remove();
        // })
      } else {
        if (modal.length > 0) {
          modal.forEach((modalItem) => {
            modalItem.remove();
          });
        }
        const element = document.createElement("div");
        element.classList.add("modal");

        element.style.position = "absolute";
        element.style.top = `${event.clientY}px`;
        element.style.left = `${event.clientX}px`;

        element.textContent = points.length;
        element.classList.add("animate-height");

        document.body.appendChild(element);

        setTimeout(() => {
          element.innerHTML = `
					<div class="modal-inner">
					<p>Количество доставок в ${hintContent} <br><span class='amount-delivery'>${points.length}</span></p>
					<span class='close-span'>X</span>
					</div>`;
          element.classList.add("open");

          const spans = document.querySelectorAll(".close-span");
          spans.forEach((spanItem, i) => {
            spanItem.addEventListener("click", () => {
              // modal.forEach(modal => {
              const modal = document.querySelectorAll(".modal");
              modal[0].remove();
              // })
            });
          });
        }, 10);
      }
    }
    flag = false;
  });
});
