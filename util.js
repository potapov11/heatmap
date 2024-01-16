// import { renderShowDeliveryMap } from "./delivery-map.js";


function changeCart() {
    const selectMap = document.querySelector('.select-map');
    selectMap.addEventListener('change', () => {
        if(selectMap.value == 'Сравнение адресов') {
            document.querySelector('.heatmap').classList.add('hide');
            document.querySelector('.address-map').classList.remove('hide');
            // setInterval(renderShowDeliveryMap, 60 * 60 * 1000);
        } else {
            document.querySelector('.heatmap').classList.remove('hide');
            document.querySelector('.address-map').classList.add('hide');
        }
    })
}

export {changeCart};
