import { app_shared_column_content_max_width } from "./app_shared_column_content_max_width.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_content_cap_width() {
  "the width a light-blue content card caps to - the content column on a wide screen, or the parent minus one outer gap each side when narrower. Mirrors the width of the light-blue card on purpose, so the success message and the correction (which are NOT plain cards) line up at exactly the same width as the cards.";
  let column = app_shared_column_content_max_width();
  let outer = app_shared_spaced_gap();
  let width = text_combine_multiple([
    "min(",
    column,
    ", calc(100% - ",
    outer,
    " - ",
    outer,
    "))",
  ]);
  return width;
}
