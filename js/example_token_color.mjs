import { equal } from "./equal.mjs";
import { app_shared_color_keyword_dark } from "./app_shared_color_keyword_dark.mjs";
import { app_shared_color_literal_dark } from "./app_shared_color_literal_dark.mjs";
import { app_shared_color_punctuation_dark } from "./app_shared_color_punctuation_dark.mjs";
("Maps a highlight token class to its dark-surface color, or null for plain");
("identifiers (which inherit the white code font). Used to color spans in the");
("DOM renderer (no stylesheet, so colors are set per-node).");
export function example_token_color(class_name) {
  if (equal(class_name, "t-kw")) {
    let r = app_shared_color_keyword_dark();
    return r;
  }
  if (equal(class_name, "t-str")) {
    let r2 = app_shared_color_literal_dark();
    return r2;
  }
  if (equal(class_name, "t-num")) {
    let r3 = app_shared_color_literal_dark();
    return r3;
  }
  if (equal(class_name, "t-punct")) {
    let r4 = app_shared_color_punctuation_dark();
    return r4;
  }
  return null;
}
