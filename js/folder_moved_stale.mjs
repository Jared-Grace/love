import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { folders_moved_stale_folders } from "./folders_moved_stale_folders.mjs";
import { folder_files_with_text } from "./folder_files_with_text.mjs";
import { git_mirrors_folders } from "./git_mirrors_folders.mjs";
import { git_remote_origin_url_get } from "./git_remote_origin_url_get.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { text_includes } from "./text_includes.mjs";
export async function folder_moved_stale(before) {
  "Everything that still spells one folder's old place: the files that write it out, and the copies of repositories that still pull from it.";
  "The copies are asked separately from the files because where a copy pulls from is not written in any file this can read - it is kept inside the copy itself. That is the one that goes wrong quietly: a copy pointed at a folder that is gone simply stops being brought up to date, and looks exactly like a copy that had nothing to bring.";
  "The one file left out is the list of moves itself, which writes the old place down on purpose, because that is where the old place is remembered. Counting it would mean this could never answer empty, and an answer that is never empty cannot be the thing that says a move is finished.";
  "A link is not a file and is not answered here. The only one that matters is the one the assistant's memory is reached through, and that one fails loudly and at once, which is the kind of mistake nobody needs a list to find.";
  let folders = folders_moved_stale_folders();
  let register = text_combine_multiple([
    fn_name("folders_moved_expected"),
    ".mjs",
  ]);
  let files = [];
  for (let folder of folders) {
    let hits = await folder_files_with_text(folder, before);
    for (let hit of hits) {
      let itself = text_ends_with(hit, register);
      if (not(itself)) {
        files.push(hit);
      }
    }
  }
  let mirrors = [];
  let copies = await git_mirrors_folders();
  for (let copy of copies) {
    async function lambda_url() {
      let asked = await git_remote_origin_url_get(copy);
      return asked;
    }
    let url = await catch_null_async(lambda_url);
    if (url) {
      let spelled = text_includes(url, before);
      if (spelled) {
        mirrors.push(copy);
      }
    }
  }
  let stale = {
    before,
    files,
    mirrors,
  };
  return stale;
}
