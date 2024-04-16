// code for convert binary to text

const binaryDigit = '01110100 01100101 01111000 01110100 00100000 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100000 01101110 01100001 01100001 01101101 00100000 01101011 01100001 00100000 01100010 01100010 01101000 01101001 00100000 01101011 01101111 01101001 00100000 01100011 01101000 01100101 01100101 01101010 00100000 01101000 01101111 01110100 01100001 00100000 01101000 01100001 01101001';

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

const str = 'humne toh js ';
const binaryStr = stringToBinary(str);

console.log(binaryStr);
