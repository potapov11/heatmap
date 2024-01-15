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

const deliveryGetUrl =
  "https://shop-lk.severnaya.ru/rest/site/api/system/analitics/maps.php?dateStart=01.01.2024&dateEnd=04.01.2024&token=jhsjdfgby7324hbjsdfhyg3478hd6t3";

function renderShowHeatMap() {
  const btn = document.querySelector("button");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(deliveryGetUrl, requestOptions)
    // .then(response => response.text())
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);

      const resultFetchArray = result.result.list;
      // console.log(resultFetchArray);

      const polygoons = [];

      var data = {
        type: "FeatureCollection",
        features: [],
      };

      let points = [];
      let hintContent;
      let flag = false;

      resultFetchArray.forEach((item) => {
        // const coor = [item.coords];

        let obj = {
          id: "id2",
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: item.coords,
          },
          properties: {
            weight: 30,
          },
        };
        // console.log(obj);
        data.features.push(obj);
      });

      const reverseArr = (array) => {
        const arrReverse = [];
        array.forEach((item) => {
          // console.log(item)
          item.reverse();
          // console.log(item);
          arrReverse.push(item);
        });
        return arrReverse;
      };

      // console.log(btn);

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
            minZoom: 8,
            maxZoom: 13,
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

        // btn.addEventListener('click', () => {
        // 	console.log('button');
        // 	heatmap.options.set('opacity', 0);
        // })
        // console.log(btn);

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

        // console.log(frunzeArray)
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
        // console.log(polygoons);

        polygoons.forEach((polygon) => {
          polygon.events.add("click", (event) => {
            points = [];
            console.log("polygon clicked");
            flag = true;
            // console.log(polygon);
            // console.log(flag);
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
        // console.log(map);
        // console.log(map.geoObjects);
        /////////////////////////////

        ymaps.modules.require(["Heatmap"], function (Heatmap) {
          // console.log(data, "...heatmap-data");
          var heatmap = new Heatmap(data);

          // console.log(btn);
          btn.addEventListener("click", (e) => {
            if (e.target.textContent == "скрыть тепловую карту") {
              // console.log(e);
              // console.log("button");
              heatmap.options.set("opacity", 0);
              e.target.textContent = "отобразить тепловую карту";
            } else {
              heatmap.options.set("opacity", 0.8);
              e.target.textContent = "скрыть тепловую карту";
            }
          });

          heatmap.options.set("gradient", {
            0.1: "#bf0702",
            0.5: "orange",
            1: "red",
          });
          // console.log(data);
          heatmap.options.set("opacity", 0.8);
          heatmap.options.set({
            radius: 25,
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
            // console.log(flag);
            const modal = document.querySelectorAll(".modal");
            // console.dir(event);
            // console.log(event.target);
            if (event.target.nodeName == "SPAN") {
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
              // console.log(element);

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
                    // console.log(i);
                    // modal.forEach(modal => {
                    const modal = document.querySelectorAll(".modal");

                    // console.log(modal);
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
    });
}

export { renderShowHeatMap };
