import { admArray, primArray, kalinArray, vyborArr, vasArray, kirovArray, kolpArray } from "./help.js";

const startLong = 59.55321;
const endLong = 60.113213;
const startLat = 30.192131;
const endLat = 30.593123;

const reverseArr = (array) => {
	const arrReverse = [];
	array.forEach(item => {
		// console.log(item)
		item.reverse();
		// console.log(item);
		arrReverse.push(item);
	})
	return arrReverse;
}


const polygoons =[]

var data = {
	type: 'FeatureCollection',
	features: [],
};

let points = []
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
		id: 'id2',
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: coor,
		},
		properties: {
			weight: 30,
		},
	};

	data.features.push(obj);

	console.log(data);
}

ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [59.9386, 30.3141],
		zoom: 10,
		controls: [],
	});

	//Полигоны/////////////////////////////
	var myPolygonKalinin = new ymaps.Polygon([
		reverseArr(kalinArray)
	], {
		//Свойства
		hintContent: "Калининский район"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
	});


	var myPolygonAdm = new ymaps.Polygon([
		// Координаты вершин внешней границы многоугольника.
		reverseArr(admArray)
	], {
		//Свойства
		hintContent: "Калининский район"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
	});

	var myPolygonVyborg = new ymaps.Polygon([
		reverseArr(vyborArr),
	], {
		//Свойства
		hintContent: "Выборгский р-он"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
		strokeStyle: 'shortdash'
	});

	var myPolygonVasilevskiy = new ymaps.Polygon([
		reverseArr(vasArray ),
	], {
		//Свойства
		hintContent: "Василеостровский р-он"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
		strokeStyle: 'shortdash'
	});

	var myPolygonMurino = new ymaps.Polygon([[
		// Координаты вершин внешней границы многоугольника.
		[60.07976,30.42217],
		[60.06862,30.45650],
		[60.06940,30.46062],
		[60.05937,30.46783],
		[60.05465,30.46200],
		[60.04925,30.45959],
		[60.05174,30.48466],
		[60.05988,30.49547],
		[60.05851,30.50079],
		[60.03189,30.50036],
		[60.03450,30.49762],
		[60.03356,30.46354],
		[60.04008,30.44277],
		[60.04094,30.43728],
		[60.04608,30.41548],
	]], {
		//Свойства
		hintContent: "Мурино"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
		strokeStyle: 'shortdash'
	});

	var myPolygonPrimor = new ymaps.Polygon(
		[reverseArr(primArray)]
		, {
		//Свойства
		hintContent: "Приморский р-он"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
	});

	var myPolygonKirov = new ymaps.Polygon(
		[reverseArr(kirovArray)]
		, {
		//Свойства
		hintContent: "Кировский р-он"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
	});

	var myPolygonKolpino = new ymaps.Polygon(
		[reverseArr(kolpArray)]
		, {
		//Свойства
		hintContent: "Колпинский р-он"
	}, {
		// Опции.
		// Цвет заливки (красный)
		fillColor: '#FF0000',
		// Цвет границ (синий)
		strokeColor: '#0000FF',
		// Прозрачность (полупрозрачная заливка)
		opacity: 0.4,
		// Ширина линии
		strokeWidth: 2,
		// Стиль линии
	});
	///////////////////////////////
	polygoons.push(myPolygonKalinin, myPolygonPrimor, myPolygonVyborg, myPolygonMurino, myPolygonKolpino, myPolygonKirov, myPolygonVasilevskiy);
	console.log(polygoons)

	polygoons.forEach(polygon => { 
		polygon.events.add('click', event => { 
			points = [] 
			console.log('polygon clicked'); 
			flag = true
			console.log(polygon) 
			console.log(flag) 
			hintContent = ''; 
			hintContent = polygon.properties.get('hintContent'); 
			data.features.forEach(feature => { 
			  if (feature.geometry.type === 'Point') { 
				const point = feature.geometry.coordinates; 
				if (polygon.geometry.contains(point)) { 
				  points.push(point) 
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
	console.log(map)
	console.log(map.geoObjects)
	/////////////////////////////

	ymaps.modules.require(['Heatmap'], function (Heatmap) {
		// Расскоментировать для отрисовки меток тепловой карты
		for (let i = 0; i < 400; i++) {
			createCoordinates();
			// console.log(data);
		}

		var heatmap = new Heatmap(data);
		heatmap.options.set('gradient', {
			0.1: '#F5DEB3',
			1: '#BF0702',
		});
		console.log(data);
		heatmap.options.set('opacity', 1);
		heatmap.options.set({
			radius: 20,
		});
		heatmap.options.set({
			weight: 100,
		});
		
		heatmap.setMap(map);
		map.geoObjects.add(heatmap);
		// map.geoObjects.add(myPolygon);
		// console.log(myPolygon.geometry.getCoordinates());
	});

	document.addEventListener('click', event => {
		if(flag == true) {
			console.log(flag)
			const modal = document.querySelectorAll('.modal');
			console.dir(event)
			console.log(event.target)
			if(event.target.nodeName == 'SPAN') {
				console.log('span')
				modal.forEach(modal => {
					modal.remove();
				})
			}
			else {			
				if(modal.length > 0) {
					modal.forEach(modalItem => {
						modalItem.remove()
					})
				}
				const element = document.createElement('div');
				element.classList.add('modal');
		
				element.style.position = 'absolute';
				element.style.top = `${event.clientY}px`;
				element.style.left = `${event.clientX}px`;
				element.textContent = points.length;
				element.classList.add('animate-height');
			  
				document.body.appendChild(element);
				console.log(element)
				
				setTimeout(() => {
					element.innerHTML = `
					<div class="modal-inner">
					<p>Количество доставок в ${hintContent} <br><span class='amount-delivery'>${points.length}</span></p>
					<span class='close-span'>X</span>
					</div>`
					element.classList.add('open');
				  }, 10);
			}
		}
		flag = false;
	  });
});


