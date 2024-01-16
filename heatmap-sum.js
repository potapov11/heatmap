const heatmapSum = document.querySelector('#heatmap-sum');
const deliveryGetUrl =
  "https://shop-lk.severnaya.ru/rest/site/api/system/analitics/maps.php?dateStart=01.01.2024&dateEnd=04.01.2024&token=jhsjdfgby7324hbjsdfhyg3478hd6t3";

function renderShowHeatMapSum() {
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

      var data = {
        type: "FeatureCollection",
        features: [],
      };
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
            weight: item.summ > 10000 ? 550 : (item.summ > 3000 ? 150 : (item.summ > 1000 ? 100 : 10)),
          },
        };
        // console.log(obj);
        data.features.push(obj);
      });

      // console.log(btn);

      ymaps.ready(function () {
        var map = new ymaps.Map(
          heatmapSum,
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
        ymaps.modules.require(["Heatmap"], function (Heatmap) {
          // console.log(data, "...heatmap-data");
          var heatmap = new Heatmap(data);
          heatmap.options.set("gradient", {
            0.1: "#bf0702",
            0.5: "orange",
            1: "red",
          }
          ,{
            radius: 13,
          });

          // heatmap.options.set({
          //   weight: 300,
          // });

          heatmap.setMap(map);
          map.geoObjects.add(heatmap);
        });
      });
    });
}

export { renderShowHeatMapSum };
