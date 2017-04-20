var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));
var content = fs.readFileSync('../db/user.json');
var obj = JSON.parse(content);
var flag=1;

console.log('Content-type: text/html; charset=utf-8\n');

if(flag==1){
  flag=0;
  for(i=0;i<4;i++){
    if(param.email==obj[i].email&&param.password==obj[i].password){
      console.log('<h1>Hello ' + obj[i].name + '~</h1>');
      flag=1;
     }
  }
}
if(flag==0){
  console.log('<h1>'+param.email+' Not Found </h1>');
}

