function madd(a,b)
{
    var x=[[],[]];
    

    for(var i=0;i<a.length;i++)
    {
        for(var j=0;j<b[0].length;j++)
        {
            var c=0;
            for(var t=0;t<a[0].length;t++)
            {
                c=a[i][t]*b[t][j]+c;
            }
            x[i][j]=c;
        }
    }
    return x;
}

var a=[[1,4],[2,3]],b=[[3,1],[5,2]];
console.log(madd(a,b));