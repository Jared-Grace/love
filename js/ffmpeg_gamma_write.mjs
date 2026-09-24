import { ffmpeg_image_filter_write } from "./ffmpeg_image_filter_write.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ffmpeg_gamma_write(path_from, gamma, path_to) {
  "$plain path_from";
  "$plain gamma";
  "$plain path_to";
  "read a picture, lift or lower its middle tones by a gamma, and save that as a new picture - a gamma under one brightens, over one darkens";
  "THE DARKEST AND THE LIGHTEST STAY WHERE THEY ARE, which is what makes this brighten rather than wash out. Every colour channel is bent along a curve fixed at both ends, so black leads stay black, white stays white, and only what lies between moves. The plain brightness filter was measured doing the other thing: on a hymn drawing it lifted the blackest black from sixteen to twenty-seven, which greys the lead lines of a window and shortens the range a picture has from darkest to lightest.";
  "it works on the red, green and blue channels each and not on brightness alone, because a curve on brightness alone pushes colours about as it goes; the same bend on every channel keeps each colour's own hue";
  "A PICTURE OF FEW COLOURS STAYS ONE. Each colour in is mapped to exactly one colour out, so a picture cut to a handful of colours comes out with the same handful, only lighter, and needs no second cut.";
  "it writes somewhere new rather than over the picture it read, says yes in advance to overwriting, and says one frame, for the same reasons the palette writer gives";
  "IT CARRIES THE CONTENT CREDENTIALS OVER, because ffmpeg keeps no chunk it has no use for and the terms these pictures are drawn under forbid dropping them";
  let curve = text_combine_multiple(["gammaval(", gamma, ")"]);
  let filters = text_combine_multiple([
    "format=rgb24,lutrgb=r=",
    curve,
    ":g=",
    curve,
    ":b=",
    curve,
  ]);
  let ran = await ffmpeg_image_filter_write(path_from, filters, path_to);
  return ran;
}
