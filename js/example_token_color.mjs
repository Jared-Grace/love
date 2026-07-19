import { app_shared_color_keyword_dark } from "./app_shared_color_keyword_dark.mjs";
import { app_shared_color_literal_dark } from "./app_shared_color_literal_dark.mjs";
import { app_shared_color_punctuation_dark } from "./app_shared_color_punctuation_dark.mjs";
// Maps a highlight token class to its dark-surface color, or null for plain
// identifiers (which inherit the white code font). Used to color spans in the
// DOM renderer (no stylesheet, so colors are set per-node).
export function example_token_color(class_name) {
  if (class_name === "t-kw") {
    return app_shared_color_keyword_dark();
  }
  if (class_name === "t-str") {
    return app_shared_color_literal_dark();
  }
  if (class_name === "t-num") {
    return app_shared_color_literal_dark();
  }
  if (class_name === "t-punct") {
    return app_shared_color_punctuation_dark();
  }
  return null;
}
