const generatedPassword = document.getElementById("generated-password");
const copyButton = document.getElementById("copy-button");

const characterLength = document.getElementById("character-length");
const characterLengthValue = document.getElementById("character-length-value");

const includeUppercase = document.getElementById("include-uppercase");
const includeLowercase = document.getElementById("include-lowercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

const strength = document.getElementById("strength");
const strengthBar1 = document.getElementById("strength-bar-1");
const strengthBar2 = document.getElementById("strength-bar-2");
const strengthBar3 = document.getElementById("strength-bar-3");
const strengthBar4 = document.getElementById("strength-bar-4");

const generateButton = document.getElementById("generate-button");

const generatePassword = () => {
  let password = "";

  if (
    !includeLowercase.checked &&
    !includeUppercase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    alert("Please select at least one option!");
    password = "/('-_-)/";
    return password;
  }

  let characterCount = 0;
  let upperCount = 0;
  let lowerCount = 0;
  let numberCount = 0;
  let symbolCount = 0;

  while (characterCount < characterLength.value) {
    if (includeUppercase.checked && !upperCount) {
      password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      characterCount++;
      upperCount++;
    }
    if (includeLowercase.checked && !lowerCount) {
      password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      characterCount++;
      lowerCount++;
    }
    if (includeNumbers.checked && !numberCount) {
      password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      characterCount++;
      numberCount++;
    }
    if (includeSymbols.checked && !symbolCount) {
      password += String.fromCharCode(Math.floor(Math.random() * 15) + 33);
      characterCount++;
      symbolCount++;
    }

    switch (Math.floor(Math.random() * 4)) {
      case 0:
        if (includeUppercase.checked) {
          password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          characterCount++;
          upperCount++;
          break;
        }
      case 1:
        if (includeLowercase.checked) {
          password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          characterCount++;
          lowerCount++;
          break;
        }
      case 2:
        if (includeNumbers.checked) {
          password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
          characterCount++;
          numberCount++;
          break;
        }
      case 3:
        if (includeSymbols.checked) {
          password += String.fromCharCode(Math.floor(Math.random() * 15) + 33);
          characterCount++;
          symbolCount++;
          break;
        }
    }
  }

  password = [...password].sort(() => Math.random() - 0.5).join("");

  return password;
};

const checkStrength = () => {
  const checks =
    includeUppercase.checked +
    includeLowercase.checked +
    includeNumbers.checked +
    includeSymbols.checked;

  let strengthValue = "";

  if (checks * 4 + parseInt(characterLength.value) > 24) {
    strengthValue = "STRONG";
  } else if (checks * 4 + parseInt(characterLength.value) > 20) {
    strengthValue = "MEDIUM";
  } else if (checks * 4 + parseInt(characterLength.value) > 16) {
    strengthValue = "WEAK";
  } else {
    strengthValue = "TOO WEAK!";
  }

  strength.textContent = strengthValue;

  if (strengthValue === "TOO WEAK!") {
    strengthBar1.style.backgroundColor = "#F64A4A";
    strengthBar1.style.borderWidth = "0px";
    strengthBar2.style.backgroundColor = "transparent";
    strengthBar2.style.borderWidth = "2px";
    strengthBar3.style.backgroundColor = "transparent";
    strengthBar3.style.borderWidth = "2px";
    strengthBar4.style.backgroundColor = "transparent";
    strengthBar4.style.borderWidth = "2px";
  } else if (strengthValue === "WEAK") {
    strengthBar1.style.backgroundColor = "#FB7C58";
    strengthBar1.style.borderWidth = "0px";
    strengthBar2.style.backgroundColor = "#FB7C58";
    strengthBar2.style.borderWidth = "0px";
    strengthBar3.style.backgroundColor = "transparent";
    strengthBar3.style.borderWidth = "2px";
    strengthBar4.style.backgroundColor = "transparent";
    strengthBar4.style.borderWidth = "2px";
  } else if (strengthValue === "MEDIUM") {
    strengthBar1.style.backgroundColor = "#F8CD65";
    strengthBar1.style.borderWidth = "0px";
    strengthBar2.style.backgroundColor = "#F8CD65";
    strengthBar2.style.borderWidth = "0px";
    strengthBar3.style.backgroundColor = "#F8CD65";
    strengthBar3.style.borderWidth = "0px";
    strengthBar4.style.backgroundColor = "transparent";
    strengthBar4.style.borderWidth = "2px";
  } else if (strengthValue === "STRONG") {
    strengthBar1.style.backgroundColor = "#A4FFAF";
    strengthBar1.style.borderWidth = "0px";
    strengthBar2.style.backgroundColor = "#A4FFAF";
    strengthBar2.style.borderWidth = "0px";
    strengthBar3.style.backgroundColor = "#A4FFAF";
    strengthBar3.style.borderWidth = "0px";
    strengthBar4.style.backgroundColor = "#A4FFAF";
    strengthBar4.style.borderWidth = "0px";
  }
};

const handlePasswordGeneration = () => {
  const password = generatePassword();
  generatedPassword.value = password;
  checkStrength();
};

const changeLength = (event) => {
  characterLengthValue.textContent = event.target.value;
};

const copyPassword = () => {
  navigator.clipboard.writeText(generatedPassword.value);
};

copyButton.addEventListener("click", copyPassword);
generateButton.addEventListener("click", handlePasswordGeneration);
characterLength.addEventListener("change", changeLength);
