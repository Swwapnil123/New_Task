  
  let code =[400001,400002,400004,400005]
  let check = document.querySelector("#check");
  check.addEventListener("click",pincode);

  function pincode(){
      let msg = document.querySelector("#msg");
      let codevalue = document.querySelector("#code").value;
      let value = Number(codevalue);
      // console.log(value);


      if(code.includes(value)){
          document.getElementById('msg').innerHTML = '<h1>Congrats! we serve in your area!</h1>';
          msg.style.color="green";
          
      }
      else{
          document.getElementById('msg').innerHTML = '<h1>Oops! We donot serve your zipcode yet!Please Contact us to serve in your area</h1>';
          document.getElementById('btn').innerHTML = 'TRY AGAIN';
          btn.style.color="white";
          btn.style.backgroundColor="red";
      }

  }
