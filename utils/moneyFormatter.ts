import numbro from 'numbro';

export const formatter = (value: number) => numbro(value.toFixed(2)).format({ thousandSeparated: true });
