export function bible_glyph_artwork_folder_name() {
  "The folder the picture Bible's drawn glyph files live in, given as the one piece of the address that a path on this machine and a URL in a reader's browser both spell the same way.";
  "IT IS A FUNCTION RATHER THAN THE SAME TWO WORDS TYPED TWICE, because the two callers are asked at different times by different machines: one is a folder on the machine that downloads the artwork, the other is an address a phone fetches over the network. Spelled twice, moving the folder fixes the download and quietly leaves every page asking for a place nothing writes to.";
  "AND NOTHING WOULD GO RED IF THAT HAPPENED, which is the actual reason this is worth a function. A page that cannot fetch a picture falls back to the emoji character on purpose, so the whole Bible still draws and still reads - it just silently stops showing the artwork that was downloaded for it. A fault that repairs itself into the old behaviour is a fault nobody reports.";
  let folder_name = "img/glyph";
  return folder_name;
}
