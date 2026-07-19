import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { equal } from "./equal.mjs";
export function pwa_icon_emoji(app_name) {
  if (equal(app_name, "verses")) {
    return emoji_book_open();
  }
  return emoji_pray();
}
