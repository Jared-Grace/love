import { window_open } from "../../../love/public/src/window_open.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
export function window_open_google_define(item) {
  let letters_only = text_letters_only(item);
  window_open("https://www.google.com/search?q=define:" + letters_only);
}
