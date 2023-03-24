function madd(a,b)
{
    var x=[[],[]];

    for(var i=0;i<a.length;i++)
    {
        for(var j=0;j<a[0].length;j++)
        {
            x[i][j]=a[i][j]+b[i][j];
        }
    }
    return x;
}

var a=[[1,4],[2,3]],b=[[3,1],[5,2]];
console.log(madd(a,b));