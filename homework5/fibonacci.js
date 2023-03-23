function fibonacci(a)
{
    if (a==0)return 0;
    else if(a==1)return 1;
    else return fibonacci(a-1)+fibonacci(a-2);
}
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(35));