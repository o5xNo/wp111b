function truthTable(a)
{
    var x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    x.length=a;

    for(var i=0;i<Math.pow(2,a);i++)
    {
        for(var j=a;j>0;j--)
        {
            if(x[j]===2)
            {
                x[j]=0;
                x[j-1]++;
            }
        }
            console.log(x);

        x[a-1]++;

    }
}

truthTable(4);