// import dataCoords from './data-bitrix.js';

const deliveryGetUrl = 'https://shop-lk.severnaya.ru/rest/site/api/system/analitics/maps.php?dateStart=01.01.2024&dateEnd=04.01.2024&token=jhsjdfgby7324hbjsdfhyg3478hd6t3';

// console.log(dataCoords, '...data');

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function renderShowDeliveryMap() {
    const deliveryMap = document.getElementById('map-delivery');
    console.log(deliveryMap);

    fetch(deliveryGetUrl, requestOptions)
    // .then(response => response.text())
    .then(response => response.json())
    .then(result => {
        console.log(result)
        
        const resultFetchArray = result.result.list;
        console.log(resultFetchArray);
        
        ymaps.ready(function () {
            var map = new ymaps.Map(deliveryMap, {
                center: [59.9386, 30.3141],
                zoom: 10,
                controls: ['zoomControl'],
                minZoom: 9,
                maxZoom: 12
            });

            resultFetchArray.forEach(item => {
                // const coords = item.coords.split(',');
                const placemark = new ymaps.Placemark(item.coords, {
                    hintContent: item.name,
                    balloonContent: item.address
                });
                map.geoObjects.add(placemark);
            });
        })
    })
    .catch(error => console.log('error', error));    

}

export {renderShowDeliveryMap, deliveryGetUrl};
