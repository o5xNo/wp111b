function vadd(a,b)
{
    var x=[];

    for(var i=0;i<a.lenght;i++)
    {
        x[i]=a[i]+b[i];
    }
    return x;
}

console.log(vadd([3,6],[8,7]))