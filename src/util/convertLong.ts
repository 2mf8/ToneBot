import Long from "long";

export function toLong(n: Long | number | string): Long {
  if (typeof n == "string") {
    return Long.fromString(n)
  }
  if (typeof n == "number") {
    return Long.fromNumber(n)
  }
  return n
}
