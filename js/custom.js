var questionnaire = [
	{
		"id": "Q1",
		"question": "1. Millaiseksi arvioitte elämänlaatunne?",
		"domain": "5",
		"domainString": "dd",
		"recode": "false"
	},
	{
		"id": "Q2",
		"question": "2. Kuinka tyytyväinen olette terveyteenne?",
		"domain": "5",
		"domainString": "dd",
		"recode": "false"
	},
	{
		"id": "Q3",
		"question": "3. Missä määrin fyysinen kipu estää teitä tekemästä päivittäisen elämänne kannalta tarpeellisia asioita?",
		"domain": "1",
		"domainString": "physical",
		"recode": "true"
	},
	{
		"id": "Q4",
		"question": "5. Kuinka paljon nautitte elämästänne?",
		"domain": "1",
		"domainString": "physical",
		"recode": "true"
	},
	{
		"id": "Q5",
		"question": "Life is ok",
		"domain": "2",
		"domainString": "psychological",
		"recode": "false"
	},
	{
		"id": "Q6",
		"question": "6. Missä määrin tunnette, että elämänne on merkityksellistä?",
		"domain": "2",
		"domainString": "psychological",
		"recode": "false"
	},
	{
		"id": "Q7",
		"question": "7. Kuinka hyvin pystytte keskittymään asioihin?",
		"domain": "2",
		"domainString": "psychological",
		"recode": "false"
	},
	{
		"id": "Q8",
		"question": "8. Kuinka turvalliseksi tunnette olonne päivittäisessä elämässänne?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q9",
		"question": "9. Kuinka terveellisenä pidätte fyysistä ympäristöänne?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q10",
		"question": "10. Onko teillä riittävästi tarmoa arkipäivän elämäänne varten?",
		"domain": "1",
		"domainString": "physical",
		"recode": "false"
	},
	{
		"id": "Q11",
		"question": "11. Oletteko tyytyväinen ulkomuotoonne?",
		"domain": "2",
		"domainString": "psychological",
		"recode": "false"
	},
	{
		"id": "Q12",
		"question": "12. Onko teillä tarpeeksi rahaa tarpeisiinne nähden?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q13",
		"question": "13. Saatteko riittävästi tietoa jokapäiväisen elämänne kannalta tärkeistä asioista?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q14",
		"question": "14. Missä määrin teillä on mahdollisuuksia vapaa-ajan toimintaan?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q15",
		"question": "15. Millainen on liikuntakykynne?",
		"domain": "1",
		"domainString": "physical",
		"recode": "false"
	},
	{
		"id": "Q16",
		"question": "16. Kuinka tyytyväinen olette unenne laatuun?",
		"domain": "1",
		"domainString": "physical",
		"recode": "false"
	},
	{
		"id": "Q17",
		"question": "17. Kuinka tyytyväinen olette kykyynne selviytyä päivittäisistä toimista?",
		"domain": "1",
		"domainString": "physical",
		"recode": "false"
	},
	{
		"id": "Q18",
		"question": "18. Kuinka tyytyväinen olette työkykyynne?",
		"domain": "1",
		"domainString": "physical",
		"recode": "false"
	},
	{
		"id": "Q19",
		"question": "19. Kuinka tyytyväinen olette itseenne?",
		"domain": "2",
		"domainString": "psychological",
		"recode": "false"
	},
	{
		"id": "Q20",
		"question": "20. Kuinka tyytyväinen olette ihmissuhteisiinne?",
		"domain": "3",
		"domainString": "social",
		"recode": "false"
	},
	{
		"id": "Q21",
		"question": "21. Kuinka tyytyväinen olette sukupuolielämäänne?",
		"domain": "3",
		"domainString": "social",
		"recode": "false"
	},
	{
		"id": "Q22",
		"question": "22. Kuinka tyytyväinen olette ystäviltänne saamaanne tukeen?",
		"domain": "3",
		"domainString": "social",
		"recode": "false"
	},
	{
		"id": "Q23",
		"question": "23. Kuinka tyytyväinen olette asuialueenne olosuhteisiin?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q24",
		"question": "24. Kuinka tyytyväinen olette mahdollisuuksiinne saada terveyspalveluja?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q25",
		"question": "25. Kuinka tyytyväinen olette mahdollisuuksiinne käyttää julkisia ja/tai muita liikennevälineitä?",
		"domain": "4",
		"domainString": "environment",
		"recode": "false"
	},
	{
		"id": "Q26",
		"question": "26. Kuinka usein teillä on ollut sellaisia kielteisiä tuntemuksia kuten alakuloisuus, epätoivo, ahdistus tai masennus?",
		"domain": "2",
		"domainString": "psychological",
		"recode": "true"
	},




]

var DOM1 = ["3", "4", "10", "15", "16", "17", "18"];
var DOM2 = ["5", "6", "7", "11", "19", "26"];
var DOM3 = ["20", "21", "22"];
var DOM4 = ["8", "9", "12", "13", "14", "23", "24", "25"];

// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})


var D1 = {values: [], mean: "", domainString: "physical"}
var D2 = {values: [], mean: "", domainString: "psychological"}
var D3 = {values: [], mean: "", domainString: "social"}
var D4 = {values: [], mean: "", domainString: "environment"}



//var questionnaireElement = document.getElementById('questionnaire')

var questionnaireField = document.createElement("div");
questionnaireField.className="questionnaire-field";

for(var i = 0; i < questionnaire.length; i++){
	var question = document.createElement("div");
	question.className="question"+ " " + questionnaire[i].domainString;

	var questionText = document.createElement("div");
	questionText.className="question-text";
	questionText.innerHTML=questionnaire[i].question

	var radioButtons = questionRadioButtons(5, questionnaire[i].id, questionnaire[i].domain)
	question.appendChild(questionText)
	question.appendChild(radioButtons)

	questionnaireField.appendChild(question)

}

$('#questionnaire').append(questionnaireField)

var results = document.createElement("div");
var domains = ["physical", "psychological", "social", "environment"]

for(var i = 0; i < 4; i++){
	switch(i){
		case 0:
			var domainResult = document.createElement("div")
			domainResult.className="domain-result"+ " " + D1.domainString
			domainResult.innerHTML = "" //domains[i] //+ " " + D1.mean.toString()
			results.appendChild(domainResult);
			break;
		case 1:
			var domainResult = document.createElement("div")
			domainResult.className="domain-result"+ " " + D2.domainString
			domainResult.innerHTML = "" // domains[i] + " " + D2.mean.toString()
			results.appendChild(domainResult);
			break;
		case 2:
			var domainResult = document.createElement("div")
			domainResult.className="domain-result"+ " " + D3.domainString
			domainResult.innerHTML = "" // domains[i] + " " + D3.mean.toString()
			results.appendChild(domainResult);
			break;
		case 3:
			var domainResult = document.createElement("div")
			domainResult.className="domain-result"+ " " + D4.domainString
			domainResult.innerHTML = "" //domains[i] + " " + D4.mean.toString()
			results.appendChild(domainResult);
			break;
	}
}

$('#results-area').append(results)



function questionRadioButtons(nr, name, domain){
	var radioButtonField=document.createElement("div")
	radioButtonField.setAttribute("class", "radio-buttons")

	for(var i = 0; i < nr; i++){
		var radioButton = document.createElement("input");
		radioButton.setAttribute("type", "radio")
		radioButton.setAttribute("name", name)
		radioButton.setAttribute("data-id", name)
		radioButton.setAttribute("data-domain", domain)
		radioButton.setAttribute("value", (i+1).toString())
		radioButton.className="radio-button";
		radioButtonField.appendChild(radioButton)
	}
	return radioButtonField;
}


function calculateResults(){
/*
	var res = {
		D1: {
			values: [],
			mean: ""
		},
		D2: {
			values: [],
			mean: ""
		},
		D3: {
			values: [],
			mean: ""
		},
		D4: {
			values: [],
			mean: ""
		}
	}
	*/



	var radios = document.getElementsByTagName('input')
	for(i = 0; i < radios.length; i++){
		if(radios[i].type == 'radio' && radios[i].checked){
			if((radios[i].dataset.id === "Q3" ) || (radios[i].dataset.id === "Q4" ) || (radios[i].dataset.id ===  "Q26")){
				switch (radios[i].value) {
					case "1":
					  radios[i].value = "5"
						break;
					case "2":
					  radios[i].value = "4"
						break;
					case "3":
					  radios[i].value = "3"
						break;
					case "4":
					  radios[i].value = "2"
					  break;
					case "5":
						radios[i].value = "1"
						break;
				}
			}
			console.log(radios[i].dataset.id + " " + radios[i].dataset.domain + " " + radios[i].value)
			switch(radios[i].name){
				case "Q1": D1.values.push(radios[i].value); break;
				case "Q2": D1.values.push(radios[i].value); break;
				case "Q3": D1.values.push(radios[i].value); break;
				case "Q4": D1.values.push(radios[i].value); break;
				case "Q5": D2.values.push(radios[i].value); break;
				case "Q6": D2.values.push(radios[i].value); break;
				case "Q7": D2.values.push(radios[i].value); break;
				case "Q8": D4.values.push(radios[i].value); break;
				case "Q9": D4.values.push(radios[i].value); break;
				case "Q10": D1.values.push(radios[i].value); break;
				case "Q11": D2.values.push(radios[i].value); break;
				case "Q12": D4.values.push(radios[i].value); break;
				case "Q13": D4.values.push(radios[i].value); break;
				case "Q14": D4.values.push(radios[i].value); break;
				case "Q15": D1.values.push(radios[i].value); break;
				case "Q16": D1.values.push(radios[i].value); break;
				case "Q17": D1.values.push(radios[i].value); break;
				case "Q18": D1.values.push(radios[i].value); break;
				case "Q19": D2.values.push(radios[i].value); break;
				case "Q20": D3.values.push(radios[i].value); break;
				case "Q21": D3.values.push(radios[i].value); break;
				case "Q22": D3.values.push(radios[i].value); break;
				case "Q23": D4.values.push(radios[i].value); break;
				case "Q24": D4.values.push(radios[i].value); break;
				case "Q25": D4.values.push(radios[i].value); break;
				case "Q26": D2.values.push(radios[i].value); break;

			}
		}


/*
			if(DOM1.indexOf(radios[i].dataset.domain.toString()) > -1){
//			if(DOM1.indexOf(parseInt(radios[i].dataset.domain, 10)) > -1){
				console.log("dom" + radios[i].dataset.domain.toString())
//				res["D1"].values.push(radios[i].value)
D1.values.push(radios[i].value);
			}
			*/

	}

	D1.mean = Math.round( ((D1.values.reduce(add, 0) * 4 ) / D1.values.length) * 100) / 100;
	D2.mean = Math.round( ((D2.values.reduce(add, 0) * 4 ) / D2.values.length) * 100) / 100;
	D3.mean = Math.round( ((D3.values.reduce(add, 0) * 4 ) / D3.values.length) * 100) / 100;
	D4.mean = Math.round( ((D4.values.reduce(add, 0) * 4 ) / D4.values.length) * 100) / 100;

	$(".domain-result.physical").empty().append(domains[0] + " " + D1.mean.toString())
	$(".domain-result.psychological").html(domains[1] + " " + D2.mean.toString())
	$(".domain-result.social").html(domains[2] + " " + D3.mean.toString())
	$(".domain-result.environment").html(domains[3] + " " + D4.mean.toString())




}





	console.log(D1)
///	console.log(res.D1)


function add(a, b){
	return parseInt(a) + parseInt(b);
}
