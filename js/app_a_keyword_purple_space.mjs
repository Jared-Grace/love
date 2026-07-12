import { html_span_space } from "./html_span_space.mjs";
import { app_a_keyword_purple } from "./app_a_keyword_purple.mjs";
export function app_a_keyword_purple_space(parent, text) {
  let keyword = app_a_keyword_purple(parent, text);
  html_span_space(parent);
  let v = {
    keyword,
  };
  return v;
}
