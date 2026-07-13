import { ebible_version_books_names } from "../../love/js/ebible_version_books_names.mjs";
import { folder_user_docs_read_lines } from "../../love/js/folder_user_docs_read_lines.mjs";
import { function_list_generate_open } from "../../love/js/function_list_generate_open.mjs";
import { list_filter_starts_with_any } from "../../love/js/list_filter_starts_with_any.mjs";
import { ebible_folder_english } from "../../love/js/ebible_folder_english.mjs";
import { list_map } from "../../love/js/list_map.mjs";
import { text_ends_with_space } from "../../love/js/text_ends_with_space.mjs";
import { text_trim_right } from "../../love/js/text_trim_right.mjs";
import { text_skip_while } from "../../love/js/text_skip_while.mjs";
import { each } from "../../love/js/each.mjs";
import { whitespace_normalize } from "../../love/js/whitespace_normalize.mjs";
import { text_starts_with_space } from "../../love/js/text_starts_with_space.mjs";
import { text_starts_with_dot } from "../../love/js/text_starts_with_dot.mjs";
import { text_starts_with_digit } from "../../love/js/text_starts_with_digit.mjs";
export async function bible_verses_encouragement_generate() {
  let split = await folder_user_docs_read_lines(
    "bible_references.hopenation.org.txt",
  );
  let fns = [
    text_starts_with_digit,
    text_starts_with_dot,
    text_starts_with_space,
  ];
  function lambda2(item) {
    item = whitespace_normalize(item);
    each(fns, lambda);
    function lambda(fn) {
      item = text_skip_while(fn, item);
    }
    item = text_trim_right(text_ends_with_space, item);
    return item;
  }
  let mapped = list_map(split, lambda2);
  let bible_folder = ebible_folder_english();
  let mapped2 = await ebible_version_books_names(bible_folder);
  let verse_references = list_filter_starts_with_any(mapped, mapped2);
  await function_list_generate_open(
    bible_verses_encouragement_generate,
    verse_references,
  );
}
