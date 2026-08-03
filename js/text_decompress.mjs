import LZString from "lz-string";
export async function text_decompress(compressed) {
  "Reads back text that was squeezed down - the other half of the squeezing.";
  "The library is named at the top of the file rather than asked for at the moment of use, for the reason its twin carries in full: asking at the moment of use makes the builder cut a second script file out of the app, and an app here is sent out as one page and one script, so that second file is never sent and the page dies asking for it.";
  let decompressed = LZString.decompressFromUTF16(compressed);
  return decompressed;
}
