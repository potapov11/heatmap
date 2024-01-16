// import dataCoords from './data-bitrix.js';

const deliveryGetUrl =
  "https://shop-lk.severnaya.ru/rest/site/api/system/analitics/maps.php?dateStart=01.01.2024&dateEnd=02.01.2024&token=jhsjdfgby7324hbjsdfhyg3478hd6t3";

const dadataKey = "a8672c8309f15fbc796c9b47d8407bf7266a9d2c";

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

      let resultFetchArray = result.result.list;

      ymaps.ready(function () {
        var map = new ymaps.Map(
          deliveryMap,
          {
            center: [59.9386, 30.3141],
            zoom: 10,
            controls: ["zoomControl"],
          },
          {
            minZoom: 6,
            maxZoom: 15,
          }
        );    

        resultFetchArray.forEach(item => {
          const placemark = new ymaps.Placemark(
            item.coords,
            {
              hintContent: item.name,
              balloonContent: item.address,
            },
            {
              iconColor: item.is_valid ? '#34c924' : '#BF0702',
              // iconColor: "#BF0702",
            }
          );
          map.geoObjects.add(placemark);
        })

      });
      });
    // .catch((error) => console.log("error", error))
}

export { renderShowDeliveryMap, deliveryGetUrl };
