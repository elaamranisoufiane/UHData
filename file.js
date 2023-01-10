for (let i = 0; i < document.querySelectorAll('div .hit').length; i++) {
	 

        let request = new XMLHttpRequest();
	request.open('GET', 'https://raw.githubusercontent.com/elaamranisoufiane/UHData/main/data.json');
	request.responseType = 'json';
	request.send();

request.onload = function() {
  let data = request.response;
  //console.log(data.data.url);

	let paraElements = document.getElementsByClassName('media-url');
	let paraText = paraElements[i].innerText;
//alert(data.data.judge == 2);
	if(paraText == data.data.url){
		const div = document.querySelectorAll('div .hit')[i];

		if(data.data.judge == 1){
    		divElement = document.querySelector('.murl .judgment span #relevant_'+i).click();
		 }else if(data.data.judge == 2){
    		divElement = document.querySelector('.murl .judgment span #relevant-but-imperfect_'+i).click();
		 }else if(data.data.judge == 3){
    		divElement = document.querySelector('.murl .judgment span #related_'+i).click();
		 }else if(data.data.judge == 4){
    		divElement = document.querySelector('.murl .judgment span #not-relevant_'+i).click();
		 }else if(data.data.judge == 5){
    		divElement = document.querySelector('.murl .judgment span #cannotjudge_'+i).click();
		 }else if(data.data.judge == 6){
    		divElement = document.querySelector('.murl .judgment span #broken_'+i).click();
		 }else if(data.data.judge == 0){
    		divElement = document.querySelector('.murl span #detrimental_'+i).click();
		 }
    }
}
    		await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)));

	
}


submit();

document.getElementById("messageBoxOK").click();
