import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function web_assets_bible_laid_out_path(version, book_code) {
  "$plain version";
  "$plain book_code";
  "Where one book of one bible is kept once it has been cut into verses with its layout, as a path under the folder a browser fetches pictures and data from.";
  "The writer and the reader both ask here, so the place a book is written to and the place it is fetched from cannot come to differ.";
  arguments_assert(arguments, 2);
  let file_name = text_combine_multiple([book_code, ".json"]);
  let path = list_join_slash_forward(["bible", "laid_out", version, file_name]);
  return path;
}
