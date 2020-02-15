export default function(num: number, decimals: number): number {
  const m = Math.pow(10, decimals)
  return Math.round(num * m) / m
}
