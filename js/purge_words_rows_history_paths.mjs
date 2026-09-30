import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { purge_words_rows_words } from "./purge_words_rows_words.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { git_folder_history_words_paths } from "./git_folder_history_words_paths.mjs";
import { list_size } from "./list_size.mjs";
export async function purge_words_rows_history_paths(folder, rows_text) {
  "$plain folder";
  "$plain rows_text";
  "Every file a repository has ever held that any of the named rows of the private word list was ever written into or taken out of. Reads and changes nothing, and sends nothing anywhere.";
  ("★ ROWS ARE NAMED AND WORDS ARE NOT, BECAUSE A COMMAND LINE IS AMONG THE MOST TRAVELLED TEXT THERE IS - the reason is spelled at ",
    fn_name("purge_words_rows_words"),
    ", which is the only place a row becomes a word.");
  ("★ THIS IS THE CONTROL A FINISHED PURGE IS CHECKED AGAINST, AND IT IS WHY THE BEFORE-COPIES ARE KEPT. Nothing found in a rewritten past is indistinguishable from a pattern that matches nowhere - a word spelled a way the repository never used, a flag dropped, a pattern that stopped compiling. Asked of the copy taken before the rewrite, this must answer with files; asked of the copy after it, with none. Two answers that disagree are a measurement and one answer alone is a hope.",
    "Once both answers are written down the copy has no second job left, because the only thing it then still offers is an undo nobody can use - a past that is hours old is already hundreds of commits behind a folder ten agents commit into.");
  ("★ THERE IS NO REWRITE ANYWHERE UNDERNEATH THIS, WHICH IS THE WHOLE REASON TO ASK IT THIS WAY. The rehearsing commands answer the same question on the way past, but they pay for a complete rewrite of the history to do it, and a control is asked far more often than a rewrite is run. The sibling ",
    fn_name("purge_words_rows_history_rehearse"),
    " is the one to reach for when what is wanted is the rewrite rather than the count.");
  ("★ WHAT COMES BACK IS WHERE TO LOOK, NEVER WHAT TO TAKE OUT - the reader underneath says so at length, and the same warning binds here. A word that identifies somebody in the short list it sat alone in is an ordinary word of the world in the long list beside it, and this cannot tell the two apart.");
  ("The reading is the word-start one the reader underneath offers. An occurrence with a letter welded to its front is not reached by it, so a count of zero from this is not on its own the end of the question.");
  arguments_assert(arguments, 2);
  let rows = text_split_comma(rows_text);
  let words = await purge_words_rows_words(rows_text);
  let words_text = list_join_comma(words);
  let paths = await git_folder_history_words_paths(folder, words_text);
  let carrying = list_size(paths);
  let r = {
    folder,
    rows,
    carrying,
    paths,
  };
  return r;
}
