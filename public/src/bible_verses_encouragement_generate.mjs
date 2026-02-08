import { function_list_generate } from "../../../love/public/src/function_list_generate.mjs";
import { list_filter_starts_with_any } from "../../../love/public/src/list_filter_starts_with_any.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_ends_with_space } from "../../../love/public/src/text_ends_with_space.mjs";
import { string_trim_right } from "../../../love/public/src/string_trim_right.mjs";
import { text_skip_while } from "../../../love/public/src/text_skip_while.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { string_starts_with_space } from "../../../love/public/src/string_starts_with_space.mjs";
import { string_starts_with_dot } from "../../../love/public/src/string_starts_with_dot.mjs";
import { string_starts_with_digit } from "../../../love/public/src/string_starts_with_digit.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function bible_verses_encouragement_generate() {
  let file_path = folder_user_docs_path("bible_references.hopenation.org.txt");
  let contents = await file_read(file_path);
  let split = text_split_newline(contents);
  let fns = [
    string_starts_with_digit,
    string_starts_with_dot,
    string_starts_with_space,
  ];
  function lambda2(item2) {
    item2 = whitespace_normalize(item2);
    each(fns, lambda);
    function lambda(fn) {
      item2 = text_skip_while(fn, item2);
    }
    item2 = string_trim_right(text_ends_with_space, item2);
    return item2;
  }
  let mapped = list_map(split, lambda2);
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  let mapped2 = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(mapped, mapped2);
  await function_list_generate(
    bible_verses_encouragement_generate,
    verse_references,
  );
}
