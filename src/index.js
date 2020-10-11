module.exports = function check(str, bracketsConfig) {
    let l = 0;
  while(str.length != l) {
    l = str.length;
  for(let i = 0; i < bracketsConfig.length; i++) {
    let a = bracketsConfig[i][0] + bracketsConfig[i][1];
    str = str.replace(a,"");
  }
}

return str.length == 0;  
}
