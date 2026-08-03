import LZString from "lz-string";
export async function text_compress(text) {
  "Squeezes text down small enough to keep, and does it out of the one bundle the page already has.";
  "The library is asked for at the top of the file rather than at the moment of use. Asking for it at the moment of use reads as the thriftier of the two - nobody pays for it until somebody compresses something - but it makes the builder cut a SECOND script file out of the app, and a page here is sent out as exactly one page and one script. The second file is built, never sent, and asked for by a page that is already live: the app then dies at boot with nothing on the screen, because the first thing it does is save.";
  "Measured on the game the day this changed: one missing piece, about six kilobytes, and a blank white page for every player. No app small enough to have a size ceiling reaches this function at all, so the cost of always carrying it is paid by exactly the apps that were already carrying it.";
  let compressed = LZString.compressToUTF16(text);
  return compressed;
}
