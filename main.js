let countryField = document.getElementById('countryCode');
(async function getCountry(){
  let html=''
  const data = await fetch('./db.json').then(res=>res.json())
  console.log('data',data);
  data.forEach(element => {
     html+= `<option>+${element.code} ${element.country}</option>`;
  });
  countryField.innerHTML= html
})()

countryField.addEventListener('change',()=>{
  console.log('change',countryField );
  let code = countryField.value.split(" ")[0]
  console.log('code',code);
  // countryField.innerText = code
})

