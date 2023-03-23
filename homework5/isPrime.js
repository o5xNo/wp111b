function isPrime(a)
{
    if (a<=1)
    {
      return false;
    }
    for (let i=2;i<a;i++)
    {
      if (a%i===0)
      {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(1));
  console.log(isPrime(2));
  console.log(isPrime(3));
  console.log(isPrime(200));
  console.log(isPrime(977));