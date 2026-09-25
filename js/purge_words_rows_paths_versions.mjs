import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { purge_words_rows_words } from "./purge_words_rows_words.mjs";
import { git_folder_paths_words_blobs } from "./git_folder_paths_words_blobs.mjs";
import { list_map } from "./list_map.mjs";
export async function purge_words_rows_paths_versions(
  folder,
  rows_text,
  paths_text,
) {
  "$plain folder";
  "$plain rows_text";
  "$plain paths_text";
  "Every version of the named files that has ever held any of the named rows of the private word list, named by the file and by git's own name for its contents. Reads and changes nothing.";
  ("★ ROWS ARE NAMED AND WORDS ARE NOT, BECAUSE A COMMAND LINE IS AMONG THE MOST TRAVELLED TEXT THERE IS - the reason is spelled at ",
    fn_name("purge_words_rows_words"),
    ", which is the only place a row becomes a word.");
  ("★ THE ANSWER LEAVES THE WORDS OUT TOO, AND THAT IS WHY IT HANDS BACK ONLY A FILE AND A NAME FOR ITS CONTENTS. The reader underneath says which of the words each version was holding, which is exactly the thing that must not be read aloud, pasted or summarised. A file and a forty-letter name say which version to go and look at without saying anything about what is in it.");
  ("★ THIS IS THE STEP BEFORE A KEEP-LIST CAN BE WRITTEN. A rewrite scoped to a path reaches every version of that path or none, so where some versions of a path are innocent the only cut that fits is to name them. Nobody can name them without first being told what there is to name, and a reader then opens each one and judges it. The judging is a person's, made once and written down; this only lays out the work.");
  ("Asked of the repository as it stands. The names die with the next rewrite of it, so a list built from this is good until the history moves and never afterwards.");
  arguments_assert(arguments, 3);
  let rows = text_split_comma(rows_text);
  let words = await purge_words_rows_words(rows_text);
  let paths = text_split_comma(paths_text);
  let holding = await git_folder_paths_words_blobs(folder, paths, words);
  function purge_words_rows_paths_versions_where(held) {
    let where = {
      path: held.path,
      blob: held.blob,
    };
    return where;
  }
  let versions = list_map(holding, purge_words_rows_paths_versions_where);
  let r = {
    folder,
    rows,
    paths,
    versions,
  };
  return r;
}
