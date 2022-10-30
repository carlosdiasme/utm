
function createUtm() {

let urlPage = document.querySelector('#url-utm').value
let utmSource = document.querySelector('#source-utm').value
let utmMedium = document.querySelector('#medium-utm').value
let utmCampaign = document.querySelector('#campaign-utm').value
let utmTerm = document.querySelector('#term-utm').value
let utmContent = document.querySelector('#content-utm').value

if (document.querySelector('#url-utm').value !== ""){
    const utmCreated = `${urlPage}?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}`
    document.querySelector('#result-utm').innerText = utmCreated
}else{
    alert("É preciso informar uma URL válida!") 
}




}


function clearFields() {
document.querySelector('#url-utm').value = "";
document.querySelector('#source-utm').value = "";
document.querySelector('#medium-utm').value = "";
document.querySelector('#campaign-utm').value = "";
document.querySelector('#term-utm').value = "";
document.querySelector('#content-utm').value = "";
document.querySelector('#result-utm').value = "";

}


function copyUtm() {
const resultUtm = document.querySelector('#result-utm')
resultUtm.select();
document.execCommand('copy')
}
