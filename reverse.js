var input = process.argv.slice(2);
function reverse(original) {
  return original.join('').split('').reverse().join('');
}
  console.log(reverse(input));