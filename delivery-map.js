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

      let numArray = resultFetchArray[0].coords.map(item=> Number(item));
        numArray.forEach(item => {
            console.log(typeof(item));
            console.log(item);
        })

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

        console.log(map, ".../del-map");

        resultFetchArray.forEach((item) => {
          // Создаем макет содержимого метки
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

          ///////////////////////////////////////////////////////
          map.geoObjects.add(placemark);
          

        });

        console.group()
        console.log(resultFetchArray[0], 'resultArrray0');  
        console.log(resultFetchArray[0].coords);
        console.log(resultFetchArray[0].address);
        console.groupEnd();

        //////////////////////////////////////////////////
            
            // vm.selectedAddress = firstGeoObject.getAddressLine();
        });
        //////////////////////////////////////////////////

        // ymaps.geocode(numArray).then((res) => {
        //     console.log(res);
        //     const firstGeoObject = res.geoObjects.get(0);
        //     console.log(firstGeoObject)
        //     console.log(firstGeoObject.getAddressLine())
        //     let yaAddress = firstGeoObject.getAddressLine();
        //     let yaAddressya = firstGeoObject.getAddress();
        //     console.log(yaAddressya, 'jlkhjiuoiuoiuio')

        //     if(yaAddress.includes('улица')) {
        //         console.log('Содержит')
        //         yaAddress =  yaAddress.replace('улица', 'ул');
        //         console.log(yaAddress);
        //     }
        //     console.log(typeof(resultFetchArray[0].coords), 'typeof');
        // })

        console.log(numArray)

        // let address = null;
        // let resultObj = {
        //     city: '',
        //     area: '',
        //     secondArea: '',
        //     street: '',
        //     house: '',
        //     block: ''
        // };
        // let result = [];

        ymaps.geocode(numArray, {kind: 'house'}).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
        
            console.log(firstGeoObject, 'firstgeoobject');
        
            // const resultObj = {};

            let address = null;
            let resultObj = {
                city: '',
                area: '',
                secondArea: '',
                street: '',
                house: '',
                block: ''
            };
            let result = [];
        
            console.log(resultObj, '...................')
            console.log(address, 'адрес');

        
            // /** nice format of returned address */
            if (firstGeoObject) {
                resultObj.city = firstGeoObject.getLocalities().length > 0 ? firstGeoObject.getLocalities()[0] : '';
                resultObj.area = firstGeoObject.getAdministrativeAreas().length > 0 ? firstGeoObject.getAdministrativeAreas()[0] : '';
                resultObj.secondArea = firstGeoObject.getAdministrativeAreas().length > 1 ? firstGeoObject.getAdministrativeAreas()[1] : '';
                resultObj.street = firstGeoObject.getThoroughfare() ? firstGeoObject.getThoroughfare() : '';
                resultObj.house = firstGeoObject.getPremiseNumber() ? firstGeoObject.getPremiseNumber() : '';
                console.log(resultObj.house, 'houseeeeeeeeeeeeeeeeeee');
                // resultObj.coords = coords;
                resultObj.block = '';
        
                // if (resultObj.house == true) {
                console.log('houseeeeeeeeeeeeeeeeeee')
                console.log(result);
                result = [resultObj.area, resultObj.city, resultObj.street, resultObj.house, resultObj.block]; // [area, secondArea, city, street, house]
                result = [...new Set(result.filter(Boolean))];

                console.log(result, address);
      
                  // self.mapElement.dispatchEvent(
                  //     new CustomEvent('address-selected-checkout', {
                  //         detail: {result, resultObj, zoneName,},
                  //     })
                  // );
      
                address = result.join(', ');

                console.log(address, 'адрес');

                console.log(resultObj, 'res------obj');

              // }
      
                  console.log(resultObj, ';;;;;;;;;;;;;;;;;;;;;;;');
            }
            console.log('Yandex geocode try');
        
            /** or just uncomment next line */
        });


        

        

        
      })
    .catch((error) => console.log("error", error));
}

export { renderShowDeliveryMap, deliveryGetUrl };


// ymaps.geocode(numArray, {kind: 'house'}).then(function (res) {
//     var firstGeoObject = res.geoObjects.get(0);

//     console.log(firstGeoObject, 'firstgeoobject');

//     // const resultObj = {};

//     // console.log(resultObj, '...................')

//     // /** nice format of returned address */
//     // if (firstGeoObject) {
//     //     resultObj.city = firstGeoObject.getLocalities().length > 0 ? firstGeoObject.getLocalities()[0] : '';
//     //     resultObj.area = firstGeoObject.getAdministrativeAreas().length > 0 ? firstGeoObject.getAdministrativeAreas()[0] : '';
//     //     resultObj.secondArea = firstGeoObject.getAdministrativeAreas().length > 1 ? firstGeoObject.getAdministrativeAreas()[1] : '';
//     //     resultObj.street = firstGeoObject.getThoroughfare() ? firstGeoObject.getThoroughfare() : '';
//     //     resultObj.house = firstGeoObject.getPremiseNumber() ? firstGeoObject.getPremiseNumber() : '';
//     //     resultObj.coords = coords;
//     //     resultObj.block = '';

//     //     if (resultObj.house) {
//     //         result = [resultObj.area, resultObj.city, resultObj.street, resultObj.house, resultObj.block]; // [area, secondArea, city, street, house]
//     //         result = [...new Set(result.filter(Boolean))];

//     //         // self.mapElement.dispatchEvent(
//     //         //     new CustomEvent('address-selected-checkout', {
//     //         //         detail: {result, resultObj, zoneName,},
//     //         //     })
//     //         // );

//     //         address = result.join(', ');
//     //     }

//     //     console.log(resultObj, ';;;;;;;;;;;;;;;;;;;;;;;');
//     // }
//     console.log('Yandex geocode try');

//     /** or just uncomment next line */
// });
