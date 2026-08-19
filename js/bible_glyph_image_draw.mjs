import { bible_glyph_image_source } from "./bible_glyph_image_source.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_img } from "./html_img.mjs";
import { html_on } from "./html_on.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function bible_glyph_image_draw(parent, glyph_name, character) {
  "$plain glyph_name";
  "$plain character";
  "the name is one glyph's name and the character is the emoji it has been drawn as until now. Both are text to draw and neither runs.";
  "Draw one glyph as its picture, with the emoji character standing ready underneath in case the picture never arrives.";
  "THE CHARACTER IS NOT A CAPTION AND NOT AN ALTERNATIVE READING - it is the same glyph drawn by the reader's font instead of by this repo's artwork, so exactly one of the two is ever visible. The picture is shown and the character is hidden, and they trade places only if the picture fails to load.";
  "ONE MECHANISM COVERS TWO DIFFERENT FAILURES and that is why it is worth having rather than being a nicety. A glyph nobody has drawn artwork for yet has no file to fetch, and a phone whose emoji font is older than the character draws a blank box for it. The first is fixed by falling back to the font; the second is fixed by not needing the font at all. Between them they are most of the ways a reader loses a word.";
  "THE FALLBACK IS HIDDEN RATHER THAN ADDED AFTERWARDS, because a character added once the load has already failed appears a moment after the reader started reading the line, and every word after it moves. Both are in place before anything is fetched, so nothing on the page ever shifts.";
  "The picture is sized in EMS rather than pixels, so it grows with the text around it - the reader who made this Bible bigger meant the pictures too, and a picture fixed in pixels would be the one word on the page that ignored them.";
  "ONLY THE HEIGHT IS SET AND THE WIDTH FOLLOWS IT, because the artwork is not promised to be square and nothing here knows the shape of a file it has not fetched. Setting both would silently stretch any picture that is not, and a stretched picture is worse than a missing one: it still reads as the word, so nobody looks twice at it.";
  let fallback = html_span_text_content(parent, character);
  html_style_set(fallback, "display", "none");
  let src = bible_glyph_image_source(glyph_name);
  let image = html_img(parent, src);
  html_attribute_set(image, "alt", character);
  html_style_set(image, "height", "1em");
  html_style_set(image, "width", "auto");
  html_style_set(image, "verticalAlign", "-0.15em");
  function on_missing() {
    html_style_set(image, "display", "none");
    html_style_set(fallback, "display", "inline");
  }
  html_on(image, "error", on_missing);
  return image;
}
