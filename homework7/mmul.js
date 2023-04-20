class Matrix {
    constructor(a) {
        this.a = a 
        var x=[[],[]]

    }

    add(b) {

        for(var i=0;i<b.length;i++)
        {
            for(var j=0;j<b[0].length;j++)
            {
                x=this.a[i][j]+b[i][j];
            }
        }
        console.log(x);
    }

    mul(b) {
        for(var i=0;i<b.length;i++)
        {
            for(var j=0;j<a[0].length;j++)
            {
                var c=0;
                for(var t=0;t<b[0].length;t++)
                {
                    c=a[i][t]*b[t][j]+c;
                }
                x[i][j]=c;
            }
        }
        console.log(x);
    }
}

var a=[[1,4],[2,3]],b=[[3,1],[5,2]];
