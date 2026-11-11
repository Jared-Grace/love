import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function bible_word_article_sites_path() {
  "Where the list of sites a tapped bible word can be opened on sits under the assets folder, so a reader's app learns of a new site without being rebuilt.";
  let file_path = text_combine_multiple([
    fn_name("bible_word_article_sites"),
    ".json",
  ]);
  return file_path;
}
