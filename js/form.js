function BC(form) {
  var name2 = form.value;
  if ( isNaN(name2/2) ) roman_to_arabic(name2);
  else arabic_to_roman(name2);
}
function roman_to_arabic(num) {
  var numerals = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
  var n = 0;
  var arr = [];
  var last_value = 0;
  num = reverseString(num);
  for (val in num){
    arr[arr.length] = numerals[num[val].toUpperCase()];
  }
  for (value in arr) {
    if (arr[value] < last_value) n+= -arr[value];
    else n+= arr[value];
    last_value = arr[value];
  }
  isNaN(n) ? document.getElementById('output').innerHTML = 'Input correct num' : document.getElementById('output').innerHTML = n;
  return n;
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function arabic_to_roman(num) {
  var result = '';
  var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  for (num2 in roman){
    result += roman[num2].repeat( Math.floor( num / arabic[num2])) ;
    num %= arabic[num2];
  }
  document.getElementById('output').innerHTML = result;
  return result;
}
