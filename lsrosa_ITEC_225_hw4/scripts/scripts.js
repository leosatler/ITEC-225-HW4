

    function enc(){
    let myString   = document.getElementById("input").value;
    let myPassword = "myPassword";
    let aesenc = CryptoJS.AES.encrypt(myString, myPassword);
    let sha1enc = CryptoJS.SHA1(myString, myPassword);
    let shar224enc = CryptoJS.SHA224(myString, myPassword);
    let shar256enc = CryptoJS.SHA256(myString, myPassword);
    document.getElementById("AES").value = aesenc;
    document.getElementById("SHA1").value = sha1enc;
    document.getElementById("SHA224").value = shar224enc;
    document.getElementById("SHA256").value = shar256enc;
}



  function b2d(){
    let input = document.getElementById("input").value;
    let dec = +0;
    let b = +1;
    for (let i=0;i<input.length;i++){
        let current = +(input[input.length - i -1]);
        if(current ===1){
            dec += b;
        }
        b *=2;
    }

    document.getElementById("ans1").value= dec;
  }

  function d2b(){
      let input   = parseInt(document.getElementById("input").value);
      let ans = "";
      while(input>0){
          ans+= input%2;
          input = Math.floor(input/2);
      }
      return ans;
      

  }

  function flip(){
      let input   = d2b();
      let newString = "";
      for(let i=input.length -1;i>=0;i--){
          newString += input[i];
      }
      document.getElementById("ans1").value= newString;
  }

