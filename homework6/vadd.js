function vadd(a,b)
{
    var x=[];

    for(var i=0;i<a.length;i++)
    {
        x[i]=a[i]+b[i];
    }
    return x;
}

var a=[3,6],b=[8,7];
console.log(vadd(a,b));