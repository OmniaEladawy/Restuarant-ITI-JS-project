var nav = document.getElementById("nav");
      var btn = document.getElementById("topBtn");
      window.onscroll = function () {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          nav.style.position = "fixed";
          nav.style.backgroundColor = "#aa5e31";
          nav.style.zIndex = "99";
          btn.style.display = "block";
        } else {
          nav.style.backgroundColor = "#00000059";
          nav.style.position = "absolute";
          btn.style.display = "none";
        }
      };

      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      
      var nameInp = document.getElementById("name");
      var textSpan = document.getElementById("textSpan");
      var emailInp = document.getElementById("email");
      var emailSpan = document.getElementById("emailSpan");
      var passInp = document.getElementById("password");
      var passSpan = document.getElementById("passSpan");
      var countryInp = document.getElementById("country");
      var countrySpan = document.getElementById("countrySpan");
      var myForm = document.getElementById("myForm");

      function nameValidate() {
        if (nameInp.value === "") {
          nameInp.style.border = "3px solid red";
          textSpan.style.display = "inline-block";
          textSpan.style.color = "red";
        } else {
          nameInp.style.border = "3px solid green";
          textSpan.style.display = "none";
        }
      }

      function emailValidate() {
        if (emailInp.value !== "") {
          if (
            emailInp.value.indexOf("@") > 1 &&
            emailInp.value.indexOf(".", emailInp.value.indexOf("@")) >=
              emailInp.value.indexOf("@") + 1
          ) {
            emailInp.style.border = "3px solid green";
            emailSpan.style.display = "none";
          } else {
            emailInp.style.border = "3px solid red";
            emailSpan.style.display = "inline-block";
            emailSpan.style.color = "red";
          }
        } else {
          emailInp.style.border = "3px solid red";
          emailSpan.style.display = "inline-block";
          emailSpan.style.color = "red";
        }
      }

      function passwordValidate() {
        if (passInp.value === "" || passInp.value.length < 8) {
          passInp.style.border = "3px solid red";
          passSpan.style.display = "inline-block";
          passSpan.style.color = "red";
        } else {
          passInp.style.border = "3px solid green";
          passSpan.style.display = "none";
        }
      }

      function countryValidate() {
        if (countryInp.value === "") {
          countryInp.style.border = "3px solid red";
          countrySpan.style.display = "inline-block";
          countrySpan.style.color = "red";
        } else {
          countryInp.style.border = "3px solid green";
          countrySpan.style.display = "none";
        }
      }

      function validation(e) {
        e.preventDefault();
      }
      function submitForm() {
        nameValidate();
        passwordValidate();
        emailValidate();
        countryValidate();
        if(nameInp.value !== '' && (emailInp.value !== '' && emailInp.value.indexOf("@") > 1 && emailInp.value.indexOf(".", emailInp.value.indexOf("@")) >= emailInp.value.indexOf("@")+1) && (passInp.value !== '' || passInp.value.length > 8) && countryInp.value !== ''){
          document.getElementsByName("theForm")[0].submit();
        }
      }