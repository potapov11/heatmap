const startLong = 59.55321;
const endLong = 60.113213;
const startLat = 30.192131;
const endLat = 30.593123;
const data = [];
// const data = [];

function createCoordinates() {
	const coor = [];
	function getRandomNumber(min, max) {
		let res = Math.random() * (max - min) + min;
		const fixedNum = res.toFixed(4);
		coor.push(Number(fixedNum));
	}
	getRandomNumber(startLong, endLong);
	getRandomNumber(startLat, endLat);
	data.push(coor);
}

// for (let i = 0; i < 10; i++) {
// 	createCoordinates();
// 	console.log(data);
// }

ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [59.9386, 30.3141],
		zoom: 10,
		controls: [],
	});

	ymaps.modules.require(['Heatmap'], function (Heatmap) {
		for (let i = 0; i < 500; i++) {
			createCoordinates();
			console.log(data);
		}

		heatmap = new Heatmap(data);
		heatmap.setMap(map);
		map.geoObjects.add(heatmap);
	});
});
