import { arguments_assert } from "./arguments_assert.mjs";
export function song_image_glass_filters_width(width) {
  "$plain width";
  "The ffmpeg picture filters that cut one of the hymn's sharpened stained-glass pictures down to a given width in pixels, for a copy a reader's browser fetches.";
  "THE WIDTH IS ASKED FOR BECAUSE THE PAGE FETCHES TWO COPIES OF EACH PICTURE: a small one drawn in the page as it is scrolled, and a large one fetched only when a reader taps the small one to see it whole. Everything else about the cut is the same for both, so it is said once here.";
  arguments_assert(arguments, 1);
  let filters =
    "scale=" +
    width +
    ":-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=256:stats_mode=full[p];[b][p]paletteuse=dither=sierra2_4a";
  return filters;
}
