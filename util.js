import { renderShowHeatMapSum } from "./heatmap-sum.js";
import { renderShowHeatMap} from "./heatmap.js";
import { renderShowDeliveryMap} from "./delivery-map.js"


function changeCart() {
    const selectMap = document.querySelector('.select-map');
    selectMap.addEventListener('change', () => {
        if(selectMap.value == 'Сравнение адресов') {
            renderShowDeliveryMap();
            console.log('Сравнение адресов')
            document.querySelector('.heatmap').classList.add('hide');
            document.querySelector('.address-map').classList.remove('hide');
        } else if(selectMap.value == 'Тепловая карта по суммам') {
            console.log('Тепловая карта по суммам');
            renderShowHeatMapSum();
            document.querySelector('.heatmap').classList.add('hide');
            document.querySelector('.address-map').classList.add('hide');
            console.log(document.querySelector('.address-map'))
            document.querySelector('.heatmap-sum').classList.remove('hide');
        }  else if(selectMap.value == 'Тепловая карта') {
            console.log('Тепловая карта');
            renderShowHeatMap();
            document.querySelector('.heatmap').classList.remove('hide');
            document.querySelector('.address-map').classList.add('hide');
            console.log(document.querySelector('.address-map'))
            document.querySelector('.heatmap-sum').classList.add('hide');
        }
    })
}

export {changeCart};
