export const formatCurrency = (value: number) => {
  const formattedPrice = value.toFixed(2).toString().replace('.', ',')

  return formattedPrice
}
