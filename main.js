ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [59.9386, 30.3141],
		zoom: 10,
		controls: [],
	});

	ymaps.modules.require(['Heatmap'], function (Heatmap) {
		var data = [
				[59.9357, 30.3138],
				[59.9347, 30.3146],
				[59.9357, 30.3138],
				[59.9347, 30.3146],
				[59.9357, 30.3138],
				[59.9347, 30.3146],
			],
			heatmap = new Heatmap(data);
		heatmap.setMap(map);
		map.geoObjects.add(heatmap);
	});
});
