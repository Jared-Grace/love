export async function string_compress(text) {
  const LZString = (await import("lz-string")).default;
  let v = LZString.compressToUTF16(text);
  return v;
}
