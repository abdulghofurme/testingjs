## Fundamentals

Sesuai namanya testing hanya memiliki 1 tujuan,
__memastikan kode yang kita tulis sesuai dengan tujuan awal__.

Karenanya kita hanya perlu membandingkan hasil nyata-nya dengan hasil yang kita harapkan. 
Bila tidak sama, hanya perlu mengeluarkan pesan _error_.

Sebagai contoh:
```js
throw new Error(`${result} is not equal to ${expected}`);
  ^

Error: -4 is not equal to 10
```
