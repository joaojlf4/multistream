export default (string) => {
  const stringArray = string.split('');

  if(stringArray[stringArray.length - 1] === '/') {
    stringArray.pop();
    return stringArray.join('');
  }else {
    return stringArray.join('');
  }
}