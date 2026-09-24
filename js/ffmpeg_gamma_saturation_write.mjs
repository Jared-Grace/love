import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_image_filter_write } from "./ffmpeg_image_filter_write.mjs";
export async function ffmpeg_gamma_saturation_write(
  path_from,
  gamma,
  saturation,
  path_to,
) {
  "$plain path_from";
  "$plain gamma";
  "$plain saturation";
  "$plain path_to";
  "read a picture, lift its middle tones by a gamma the way the gamma writer does, then make its colours stronger by a saturation - one keeps them, over one strengthens them - and save that as a new picture";
  "IT EXISTS BECAUSE A LIGHTER PICTURE ALSO GOES PALER. Lifting the middle tones moves every colour toward white, so a drawing lifted far enough looks washed out; strengthening the colours afterwards gives back the range of colour that the lift took, while black stays black and white stays white, since neither has any colour to strengthen.";
  "the colour step works on brightness and colour separately, so the picture is turned back into plain red, green and blue at the end";
  let curve = text_combine_multiple(["gammaval(", gamma, ")"]);
  let filters = text_combine_multiple([
    "format=rgb24,lutrgb=r=",
    curve,
    ":g=",
    curve,
    ":b=",
    curve,
    ",hue=s=",
    saturation,
    ",format=rgb24",
  ]);
  let ran = await ffmpeg_image_filter_write(path_from, filters, path_to);
  return ran;
}
