import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { text_combine } from "./text_combine.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_last } from "./list_last.mjs";
export async function git_file_text_arrived_commit(path_file, said) {
  "$plain path_file";
  "$plain said";
  "The commit that first put a given run of text into a given file, asked of the history itself.";
  "★ A COMMIT IS ASKED FOR BY WHAT IT DID BECAUSE ITS NAME DOES NOT LAST. This history is written again on purpose to keep the pack small - twice in the three weeks up to the fourth of September 2026 - and a rewrite gives every commit it touches a new name while carrying the changes themselves through unaltered. So the change is the durable name and the sha is the perishable one, and a door written down as a sha is dead the next time somebody repacks. Two doors were found dead exactly that way, on the same day, and this is what they were both mended into.";
  "★ THE OLDEST ANSWER IS THE ARRIVAL, WHICH IS WHY THE LAST LINE IS TAKEN AND NOT THE FIRST. Git answers newest first, and a later commit that took the text away again matches the same search as the one that brought it. Only the oldest of them can be the moment it appeared.";
  "★ IT THROWS RATHER THAN COMING BACK EMPTY, and for a door that is the whole safety of it. A door is asked which side of a change something falls on; an empty answer would silently put everything on one side, blessing a whole record or offering a whole Bible as work, and nothing would say so. A loud failure asks for a minute of reading instead - and it is asking for something real, because text no longer found means the file was reworded and the door has to be pointed at words that are still there.";
  "The search is held to the one file that did the thing, so a copy of the same words living somewhere else - the prose of a caller explaining what it looks for, most of all - cannot answer in its place.";
  arguments_assert(arguments, 2);
  let folder = folder_current_absolute();
  let probe = text_combine("-S", said);
  let words = ["log", probe, "--format=%H", "--", path_file];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let full = list_filter(lines, text_empty_not_is);
  list_empty_not_is_assert_json(full, said);
  let commit = list_last(full);
  return commit;
}
