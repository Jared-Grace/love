import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_glass_filters } from "./song_image_glass_filters.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { path_base } from "./path_base.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { lyric_video_picture_light_text } from "./lyric_video_picture_light_text.mjs";
export function song_image_glass_light_filters(document, key) {
  "$plain document";
  "$plain key";
  "The ffmpeg picture filters for the copy of one couplet's stained glass that a reader's browser fetches, with the same light the lyric video gives that picture when it draws it.";
  "THE VIDEO LIGHTS SOME PICTURES AS IT DRAWS THEM, AND THE FILE ON DISK NEVER SAYS SO. The timing document carries a brightness, contrast or gamma beside a picture, and the render applies it on the way through; so a copy made from the file alone shows a picture the video never showed. The tomb's lines were darkened that way, and the page showed them pale until the human noticed.";
  "WHERE THE VIDEO SHOWS ONE FILE TWICE, THE LAST SHOWING WINS, because that is the picture the line settles on. WHO conquered death is shown plain and then glowing over the same words; the glow is where it ends. The first showing was the other reading, and was not taken because it is the one the video moves away from.";
  "A PICTURE THE DOCUMENT GIVES NO LIGHT IS CUT EXACTLY AS BEFORE, character for character, so nothing already published changes.";
  arguments_assert(arguments, 2);
  let base = song_image_glass_filters();
  let name = String(key) + ".png";
  function lambda(picture) {
    let left = path_base(picture.path);
    let eq = equal(left, name);
    return eq;
  }
  let showings = list_filter(document.pictures, lambda);
  if (list_empty_is(showings)) {
    return base;
  }
  let picture = list_last(showings);
  let light = lyric_video_picture_light_text(picture);
  if (equal(light, "")) {
    return base;
  }
  let filters = "null" + light + "," + base;
  return filters;
}
