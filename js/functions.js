function getString(string, length) {
  if(string.length <= length) {
    return true;
  }
  return false;
}

getString('проверяемая строка', 20);

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/\s+/g, '');
  const reversedText = cleanText.split('').reverse().join('');
  return cleanText === reversedText;
}

isPalindrome('Лёша на полке клопа нашёл ');



привет!
