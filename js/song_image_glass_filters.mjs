import { arguments_assert } from "./arguments_assert.mjs";
export function song_image_glass_filters() {
  "The ffmpeg picture filters that turn one of the hymn's sharpened stained-glass pictures into the copy a reader's browser fetches.";
  "IT SHRINKS TO FIVE HUNDRED AND FORTY ACROSS, three times the width the page shows a picture at, so a phone that draws three pixels for every one the page names still gets a sharp picture; the sharpened original is four times wider than that and would cost a reader over a megabyte a picture.";
  "IT NAMES TWO HUNDRED AND FIFTY-SIX COLOURS AND SCATTERS BETWEEN THEM, unlike the flat pictures, which name thirty-two and scatter nothing. Stained glass is lit, textured and shaded, so it is not a handful of colours; scattering is what keeps its shading from breaking into bands. Measured on the jug and basin: about two hundred and twenty kilobytes at this size, and looked at beside a lossy copy it could not be told apart.";
  "IT STAYS A PNG RATHER THAN A SMALLER KIND OF PICTURE, because the content credentials these pictures must keep are carried as a PNG chunk, and the one tool here that carries them only knows that format.";
  arguments_assert(arguments, 0);
  let filters =
    "scale=540:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=256:stats_mode=full[p];[b][p]paletteuse=dither=sierra2_4a";
  return filters;
}
