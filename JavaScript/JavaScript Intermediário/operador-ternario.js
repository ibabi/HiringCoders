let isValid = true;

// sem operador ternario
function verify(isValid) {
  if (isValid) return true;
  else return false;
}

console.log(verify(isValid));

// com operador ternario
const result = isValid ? true : false;

console.log(result);