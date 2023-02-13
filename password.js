<!DOCTYPE hmtl>
<html>
<head>
  <title>Password</title>
  <style>
    body {
      background-color: lightblue;
      padding: 30px;
    }
  </style>
  <script>
    function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == "Bino") {
      return true;
    }
    alert("Wrong bitch. Try Again!");
    return false;
  }
</script>
</head>
<body>
    <p style="font-size: 30pt;"> TESTING THE PASSWORD</p>
    <p>Enter the password to view .</p>
    <p>Password:<input id="passwordBox" type="password/></p>
    <a href="monkdiamonddiscovery.html" onclick="return"
    CheckPassword();">
    click here to submit a pasword and view website
    </a>
</body>
</html>
