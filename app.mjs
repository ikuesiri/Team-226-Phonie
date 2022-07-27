function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  //   console.log('make magic in here!');

  //   const header = document.querySelector('h2');
  //   if (header) {
  //     header.textContent = 'make some magic here!!';
  //   }
  // };

  let name1 = document.querySelector("#name");
  let phoneNumber = document.querySelector("#phone-number");
  let result = document.querySelector("#display-msg");
  let search = document.querySelector("#search");
  let deleteNumber = document.querySelector("#delete-num")

  //Using regular expression to set-up the validation of a phone Number.
  //Coditions to determine a valid Number are
  //070xxxxxxxx
  //080xxxxxxxx
  //081xxxxxxxx e.tc

  // let regex = /^[+]?[\d]{1,3}[-]?[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}$/;
  let regex = /^[\d]{4}[0-9]{7}$/;

  // function to validate a phone number using an event listener
  search.addEventListener("click", () => {


    if (phoneNumber.value == "") {
      result.innerText = "Please Enter Your Phone Number...";
      // console.log("Please Enter a Phone Number");
    } else if ((!name1.value == false) && (phoneNumber.value.match(regex))) {
      verifyNetworkProvider(phoneNumber);
      // validNumba(phoneNumber);
      // result.innerHTML =`<h3>
      // Congrats ${userName}, Your Verification is successful!
      // </h3>
      // `;
    } else {
      result.innerHTML = `<h3>
        🚫Invalid Details! <br> Please Enter Your Name & A valid Phone Number.
        </h3>`;
    }


  });


  // Function to assign the Appropriate Network Provider for the Inputed Function 


  function verifyNetworkProvider(phoneNumber) {
    let userName = [];
    userName.push(name1.value);

    if (phoneNumber.value.includes("0803") || phoneNumber.value.includes("0806") || phoneNumber.value.includes("0703") || phoneNumber.value.includes("0706") || phoneNumber.value.includes("0810") || phoneNumber.value.includes("0813") || phoneNumber.value.includes("0814") || phoneNumber.value.includes("0816") || phoneNumber.value.includes("0903") || phoneNumber.value.includes("0906") || phoneNumber.value.includes("0913")) {
      return result.innerHTML = `
        <span> Search Successful! </span>
        <br>
        <h3>
            Hello ${userName}, Your Network Provider is  <br> 
            <img src="images/mtn-logo.png" alt="">
        </h3>` ;

    } else if (phoneNumber.value.includes("0805") || phoneNumber.value.includes("0807") || phoneNumber.value.includes("0811") || phoneNumber.value.includes("0705") || phoneNumber.value.includes("0815") || phoneNumber.value.includes("0905")) {

      return result.innerHTML = `
        <span> Search Successful! </span>
        <br>
        <h3>
            Hello ${userName}, Your Network Provider is
            <br>
            <img src="images/glo-logo.jpg" alt="">

        </h3>`;
    } else if (phoneNumber.value.includes("0802") || phoneNumber.value.includes("0808") || phoneNumber.value.includes("0812") || phoneNumber.value.includes("0701") || phoneNumber.value.includes("0708") || phoneNumber.value.includes("0902") || phoneNumber.value.includes("0907") || phoneNumber.value.includes("0901")) {

      return result.innerHTML = `
        <span> Search Successful! </span>
        <h3>
            Hello ${userName}, Your Network Provider is <br>
            <img src="images/airtel-logo.png" alt="">

        </h3>`;
    } else if (phoneNumber.value.includes("0809") || phoneNumber.value.includes("0817") || phoneNumber.value.includes("0818") || phoneNumber.value.includes("0908") || phoneNumber.value.includes("0909")) {

      return result.innerHTML = `
        <span> Search  Successful! </span>
        <br>
        <h3>
            Hello ${userName}, Your Network Provider is <br> 
            <img src="images/9mobile-logo.png" alt="">

        </h3>`;
    } else {
      return result.innerText = "📵⚠ Error! Cannot Verify this Phone Number.";

    }
  }



  //This Button clears the all fields, and previously displayed result

  deleteNumber.addEventListener('click', function() {
    // let userName = [];
    // userName.push(name1.value);
    name1.value = "";
    phoneNumber.value = "";
    result.innerHTML = "";

  })
}



// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //