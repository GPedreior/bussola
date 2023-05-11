export class Matemagica {
  somar(a, b) {
    if (typeof (a === String) || typeof (b === String)) {
      return "Não é possivel somar string com número";
    }
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }
}
