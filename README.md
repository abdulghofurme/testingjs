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

Alih-alih menjadikan _testing code_ dan _code_ kita satu file,
kita bisa memisahkan keduanya agar lebih rapi dan mudah untuk di-_maintain_.
Selanjutnya kita refactor kode kita yang berulang, seperti pengecekan actual dengan expected result kita.


Sejauh ini, kita berhasil melakukan test.
Tapi ada hal yang terlewat, yaitu code kita mengalami kesalahan di masing-masing fungsi,
namun hanya menunjukkan pesan error untuk 1 fungsi.

```js
const sum = (a, b) => a - b;
const subtract = (a, b) => a + b;
```

Hal ini dikarenakan saat kita menemukan error pada pengecekan pertama, kode langsung dihentikan oleh throw.
Karenanya kita akan meng-_isolasi testing code_ kita dengan `testing-framework.js`.

Meski demikian, sekarang kita masih punya kendala untuk menguji kode kita yang bersifat _asyncronous_.
Karenanya kita dapat membuat testing function kita _asyncronous_ seperti pada `async-await.js`.