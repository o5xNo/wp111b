function vdot(a,b)
{
    var x=0;

    for(var i=0;i<a.length;i++)
    {
        x=a[i]*b[i]+x;
    }
    return x;
}

var a=[3,6],b=[8,7];
console.log(vadd(a,b));