const MAX_PROPERTY_COST = 2000000;
const TAX = 13;

export function calculatePaymentArray(salary) {
  const monthSalary = Number(salary);

  if (monthSalary) {
    const paymentArray = [];
    const yearSalary = monthSalary * 12;
    const yearTax = Math.floor((yearSalary * TAX) / 100);
    let taxDeduction = (MAX_PROPERTY_COST * TAX) / 100;

    while (taxDeduction > 0) {
      let sum = taxDeduction > yearTax ? yearTax : taxDeduction;
      paymentArray.push(sum);
      taxDeduction -= sum;
    }

    return paymentArray;
  }

  return [];
}

export function yearSuffixHandler(year) {
  year = year.toString();

  if (year > 10 && year <= 20) {
    return ` в ${year}-ый год`;
  }

  if (year === "2") {
    return ` во ${year}-ой год`;
  }

  if (year.endsWith("3")) {
    return ` в ${year}-ий год`;
  }

  if (
    year.endsWith("2") ||
    year.endsWith("6") ||
    year.endsWith("7") ||
    year.endsWith("8")
  ) {
    return ` в ${year}-ой год`;
  }

  return ` в ${year}-ый год`;
}

export function paymentSuffixHandler(payment) {
  payment = payment.toString();

  if (
    payment.endsWith("0") ||
    payment.endsWith("5") ||
    payment.endsWith("6") ||
    payment.endsWith("7") ||
    payment.endsWith("8") ||
    payment.endsWith("9")
  ) {
    return `${payment} рублей`;
  }

  if (payment.endsWith("1")) {
    return `${payment} рубль`;
  }

  if (payment.endsWith("2") || payment.endsWith("3") || payment.endsWith("4")) {
    return `${payment} рубля`;
  }
}
