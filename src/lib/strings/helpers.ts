export function pluralize(n: number, base: string, plural?: string): string {
  if (n === 1) {
    return base
  }
  if (plural) {
    return plural
  }
  return base + 's'
}

export function enforceLen(str: string, len: number, ellipsis = false): string {
  str = str || ''
  if (str.length > len) {
    return str.slice(0, len) + (ellipsis ? '...' : '')
  }
  return str
}

// https://stackoverflow.com/a/52171480
export function toHashCode(str: string, seed = 0): number {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507)
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507)
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909)

  return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}
