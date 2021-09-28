export const moneyFormatter = (value: number, remove = 'US') =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  })
    .format(value)
    .replace(remove, '');
