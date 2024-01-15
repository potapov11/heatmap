// import dataCoords from './data-bitrix.js';

const deliveryGetUrl =
  "https://shop-lk.severnaya.ru/rest/site/api/system/analitics/maps.php?dateStart=01.01.2024&dateEnd=04.01.2024&token=jhsjdfgby7324hbjsdfhyg3478hd6t3";

// console.log(dataCoords, '...data');

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function renderShowDeliveryMap() {
  const deliveryMap = document.getElementById("map-delivery");

  console.log(deliveryMap);

  fetch(deliveryGetUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      const resultFetchArray = result.result.list;
      console.log(resultFetchArray);
      console.log(resultFetchArray.length, "...length");

      ymaps.ready(function () {
        var map = new ymaps.Map(
          deliveryMap,
          {
            center: [59.9386, 30.3141],
            zoom: 10,
            controls: ["zoomControl"],
          },
          {
            minZoom: 8,
            maxZoom: 15,
          }
        );

        resultFetchArray.forEach((item) => {
          //Числовой массив координат
          const integerCoordsArray = item.coords.map((item) => Number(item));

          ymaps.geocode(integerCoordsArray).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);

            console.log(firstGeoObject, "firstgeoobject");

            // const resultObj = {};

            let address = null;
            let resultObj = {
              city: "",
              area: "",
              secondArea: "",
              street: "",
              house: "",
              block: "",
            };
            let result = [];

            // /** nice format of returned address */
            if (firstGeoObject) {
              resultObj.city =
                firstGeoObject.getLocalities().length > 0
                  ? firstGeoObject.getLocalities()[0]
                  : "";
              resultObj.area =
                firstGeoObject.getAdministrativeAreas().length > 0
                  ? firstGeoObject.getAdministrativeAreas()[0]
                  : "";
              resultObj.secondArea =
                firstGeoObject.getAdministrativeAreas().length > 1
                  ? firstGeoObject.getAdministrativeAreas()[1]
                  : "";
              resultObj.street = firstGeoObject.getThoroughfare()
                ? firstGeoObject.getThoroughfare()
                : "";
              resultObj.house = firstGeoObject.getPremiseNumber()
                ? firstGeoObject.getPremiseNumber()
                : "";
              // resultObj.coords = coords;
              resultObj.block = "";

              if (resultObj.house) {
                result = [
                  resultObj.area,
                  resultObj.city,
                  resultObj.street,
                  resultObj.house,
                  resultObj.block,
                ];
                result = [...new Set(result.filter(Boolean))];
                address = result.join(", ");

                console.log(address, "адрес");
              }
            }
            console.log("Yandex geocode try");

            /** or just uncomment next line */
          });
          const placemark = new ymaps.Placemark(
            item.coords,
            {
              hintContent: item.name,
              balloonContent: item.address,
            },
            {
              iconColor: "#BF0702",
            }
          );
          map.geoObjects.add(placemark);
        });
      });
    })
    .catch((error) => console.log("error", error));
}

export { renderShowDeliveryMap, deliveryGetUrl };
