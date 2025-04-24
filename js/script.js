const handlesubmit = (event){
  event.preventdefault();

fetch('https://api.sheetmonkey.io/form/cvTKDiSpCZjSHS7hmsp2x9' , {

  method: 'post',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
  },
  body: JSON.stringify({name: 'marcos' , email: 'marcos@gmail.com'})

});
}







document.querySelector('form').addEventListener('submit, handlesubmit');
  