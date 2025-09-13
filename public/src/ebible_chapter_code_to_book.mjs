import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
import { marker } from "./marker.mjs";
import { string_take } from "./string_take.mjs";
export function ebible_chapter_code_to_book(href) {
  marker("1");
  let count = ebible_book_code_size();
  let book_code = string_take(href, count);
  return book_code;
}
