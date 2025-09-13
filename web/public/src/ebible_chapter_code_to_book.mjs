import { marker } from "./marker.mjs";
import { string_take } from "./string_take.mjs";
export function ebible_chapter_code_to_book(href) {
  marker("1");
  let taken2 = string_take(href, 3);
  return taken2;
}
