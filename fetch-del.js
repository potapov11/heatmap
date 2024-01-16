var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://bitrix.severnaya.ru/rest/1/<token>/severnaya.deal.get.maps/?dateStart=<dateStart>&dateEnd=<dateEnd>", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    