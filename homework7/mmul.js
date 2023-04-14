class Matrix {
    constructor(m) {
        m = [[],[]]
        this.m = m 

    }

    add(a,b) {

        for(var i=0;i<a.length;i++)
        {
            for(var j=0;j<a[0].length;j++)
            {
                this.m=a[i][j]+b[i][j];
            }
        }
        return this.m;
    }

    mul(a,b) {
        for(var i=0;i<a.length;i++)
        {
            for(var j=0;j<b[0].length;j++)
            {
                var c=0;
                for(var t=0;t<a[0].length;t++)
                {
                    c=a[i][t]*b[t][j]+c;
                }
                this.m=c;
            }
        }
        return this.m;
    }
}

var a=[[1,4],[2,3]],b=[[3,1],[5,2]];
console.log( mul(a,b));