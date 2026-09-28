import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { git_commit_maps_read } from "./git_commit_maps_read.mjs";
import { file_read } from "./file_read.mjs";
import { git_commit_names_renamed } from "./git_commit_names_renamed.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function git_commit_names_renamed_files(file_paths_comma) {
  "$plain file_paths_comma";
  "Which of these files still name commits by names a rewrite has since changed, and what each of those names is called now - the reading a reference migration is planned from.";
  "The files are named as one word with commas between them, the way every command here takes a list, and the name of what comes in says so. A list handed straight to a loop when a command line gave it one word is walked a letter at a time, which opens a file called d and blames the disk.";
  "The saved rewrite records are loaded once for the whole run, because each is around seven megabytes and there is nothing per file about them.";
  "★ A FILE WITH NOTHING TO CHANGE IS LEFT OUT OF THE ANSWER, AND THE COUNT OF FILES LOOKED AT IS GIVEN INSTEAD. Most files hold no commit names at all, so listing them would bury the few that matter under the many that do not - and a caller reading a short list has no way to tell a thorough search with three findings from a search that only reached three files. The number looked at is what tells those apart.";
  "★ THIS READS AND CHANGES NOTHING, WHICH IS WHY IT CAN BE ASKED FREELY. Deciding that a name written in a file may be rewritten is a separate act, because the same name can stand in a file as a reference to follow and in the next line as the record of a rename, which must not follow anything.";
  arguments_assert(arguments, 1);
  let file_paths = text_split_comma(file_paths_comma);
  let reads = await git_commit_maps_read();
  let files = [];
  for (let file_path of file_paths) {
    let text = await file_read(file_path);
    let found = git_commit_names_renamed(reads, text);
    let renamings = property_get(found, "renamings");
    let ambiguous = property_get(found, "ambiguous");
    let quiet_renamings = list_empty_is(renamings);
    let quiet_ambiguous = list_empty_is(ambiguous);
    let interesting = not(quiet_renamings) || not(quiet_ambiguous);
    if (interesting) {
      let one = {
        file_path,
        renamings,
        ambiguous,
      };
      list_add(files, one);
    }
  }
  let looked_at = list_size(file_paths);
  let r = {
    looked_at,
    files,
  };
  return r;
}
