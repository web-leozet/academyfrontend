//написать функцию которая принемает вот такую ​​строку
// «Быстрая коричневая лиса прыгает через ленивую собаку».
// а вот такую возвращать ​​'ehT kciuq nworb xof spmuj revo eht yzal .god')

function rev (p) {
  return p.split(' ')
  .map(function (x) {
        return x.split('').reverse().join('');
  }).join(' ');
 }

 console.log(rev("The quick brown fox jumps over the lazy dog."));