const startLong = 59.55321;
const endLong = 60.113213;
const startLat = 30.192131;
const endLat = 30.593123;

// const data = [];

var data = {
	type: 'FeatureCollection',
	features: [],
};

// var data = {
// 	type: 'FeatureCollection',
// 	features: [
// 		{
// 			id: 'id1',
// 			type: 'Feature',
// 			geometry: {
// 				type: 'Point',
// 				coordinates: [59.55321, 30.192131],
// 			},
// 			properties: {
// 				weight: 1,
// 			},
// 		},
// 		{
// 			id: 'id2',
// 			type: 'Feature',
// 			geometry: {
// 				type: 'Point',
// 				coordinates: [60.113213, 30.192155],
// 			},
// 			properties: {
// 				weight: 10,
// 			},
// 		},
// 	],
// };

function createCoordinates() {
	const coor = [];
	// const data = [];
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
}

ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [59.9386, 30.3141],
		zoom: 10,
		controls: [],
	});

	ymaps.modules.require(['Heatmap'], function (Heatmap) {
		for (let i = 0; i < 400; i++) {
			createCoordinates();
			console.log(data);
		}

		heatmap = new Heatmap(data);
		heatmap.options.set('gradient', {
			0.1: '#F5DEB3',
			1: '#BF0702',
		});
		console.log(data);
		heatmap.options.set('opacity', 0.9);
		heatmap.options.set({
			radius: 20,
		});
		// heatmap.options.set({
		// 	weight: 100,
		// });
		console.log(heatmap);
		heatmap.setMap(map);
		map.geoObjects.add(heatmap);
	});
});
