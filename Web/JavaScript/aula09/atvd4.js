let n1 = 0, n2 = 1, contador = 0;
while (contador < 10) {
  console.log(n1);
  let proximo = n1 + n2;
  n1 = n2;
  n2 = proximo;
  contador++;
}