addEventListener("DOMContentLoaded", (ev) => {
  let leng = document.getElementById("length");
  let generateB = document.getElementById("generate");
  let result = document.getElementById("result");
  let baseAPI = 'https://api.api-ninjas.com/v1/passwordgenerator?length=';
  let exNumbers = document.getElementById("exNumbers");
  let exSpecChar = document.getElementById("exSpecChar");
  let APIKey = '0V/ya0dhXxJlLJy23y/7Xw==uEW4gWq8sJScTQSu';
  
    generateB.addEventListener('click', async () => {
      if(leng.value){
        let param = "&" + "exclude_numbers=" + exNumbers.checked + "&" + "exclude_special_chars=" + exSpecChar.checked;
        let url = baseAPI + leng.value + param;
        await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': APIKey},
          contentType: 'application/json'
        }).then(async response => {
          if(response.ok){
            let resp = await response.json();
            result.innerHTML = resp.random_password;
          } else {
            result.innerHTML = "An Error Occured, Please Try Again";
          }
        }).catch(error => {
          console.log(error);
        })
      } else {
        let param = "&" + "exclude_numbers=" + exNumbers.checked + "&" + "exclude_special_chars=" + exSpecChar.checked;
        let url = baseAPI + "16" + param;
        await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': APIKey},
          contentType: 'application/json'
        }).then(async response => {
          if(response.ok){
            let resp = await response.json();
            result.innerHTML = resp.random_password;
          } else {
            result.innerHTML = "An Error Occured, Please Try Again";
          }
        }).catch(error => {
          console.log(error);
        })
      }
    }) 
})