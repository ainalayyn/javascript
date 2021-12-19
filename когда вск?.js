var even = 0;
var odd = 0;
console.log("Введите число")
var user_num = prompt("Укажите число")

while(user_num > 0) {
    if(user_num%2==0)
    even+=1;
    else
    odd+=1
    user_num=Math.floor(user.num/10)
}
console.log("Четных:"+even)
console/log("Нечетных:"+odd)