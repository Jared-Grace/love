export async function text_compress(text) {
  const LZString = (await import("lz-string")).default;
  let v = LZString.compressToUTF16(text);
  return v;
}
