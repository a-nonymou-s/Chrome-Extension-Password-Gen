addEventListener("DOMContentLoaded", (ev) => {
  let leng = document.getElementById("length");
  let generateB = document.getElementById("generate");
  let result = document.getElementById("result");
  let baseAPI = 'https://api.api-ninjas.com/v1/passwordgenerator?length=';
  let APIKey = '';
  
    generateB.addEventListener('click', async () => {
      if(leng.value){
        let url = baseAPI + leng.value;
        await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': APIKey},
          contentType: 'application/json'
        }).then(async response => {
          if(response.ok){
            let resp = await response.json();
            console.log(resp);
            result.innerHTML = resp.random_password;
          } else {
            result.innerHTML = "An Error Occured, Please Try Again";
          }
        }).catch(error => {
          console.log(error);
        })
      } else {
        let url = baseAPI + "16";
        await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': APIKey},
          contentType: 'application/json'
        }).then(async response => {
          if(response.ok){
            let resp = await response.json();
            console.log(resp);
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