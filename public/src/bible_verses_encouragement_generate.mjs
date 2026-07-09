import { ebible_version_books_names } from "../../../love/public/src/ebible_version_books_names.mjs";
import { folder_user_docs_read_lines } from "../../../love/public/src/folder_user_docs_read_lines.mjs";
import { function_list_generate } from "../../../love/public/src/function_list_generate.mjs";
import { list_filter_starts_with_any } from "../../../love/public/src/list_filter_starts_with_any.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_ends_with_space } from "../../../love/public/src/text_ends_with_space.mjs";
import { text_trim_right } from "../../../love/public/src/text_trim_right.mjs";
import { text_skip_while } from "../../../love/public/src/text_skip_while.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { text_starts_with_space } from "../../../love/public/src/text_starts_with_space.mjs";
import { text_starts_with_dot } from "../../../love/public/src/text_starts_with_dot.mjs";
import { text_starts_with_digit } from "../../../love/public/src/text_starts_with_digit.mjs";
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
  await function_list_generate(
    bible_verses_encouragement_generate,
    verse_references,
  );
}
