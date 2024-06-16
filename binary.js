// code for convert binary to text

const binaryDigit = '01000101 01110010 01110010 01101111 01110010';

function binary(input) {
  return input.split(' ').reduce((str, binary) => {
    return str += String.fromCharCode(parseInt(binary, 2));
  }, '');
}

const result = binary(binaryDigit);
console.log(result);


// code for convert text to binary

function stringToBinary(input) {
  return input.split('').map(function (char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}

const str = 'Error';
const binaryStr = stringToBinary(str);

console.log(binaryStr);
