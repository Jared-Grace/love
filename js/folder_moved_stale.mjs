import { folder_home } from "./folder_home.mjs";
import { folder_links_with_text } from "./folder_links_with_text.mjs";
import { folder_spellings } from "./folder_spellings.mjs";
import { list_includes } from "./list_includes.mjs";
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
  "Every way of writing the folder is looked for, not only the one that looks like a folder. The other has had all its separators turned into dashes, so a hunt for the folder's own letters walks straight past it, and a file that writes both is answered once rather than twice.";
  "The copies are asked about the folder alone, because where a copy pulls from is an address and an address is written the one way.";
  "The links are asked for too, and this line used to say they were not worth asking about - that only the one reaching the assistant's memory mattered, and that it would fail loudly. Both halves were wrong. A move left two links pointing into the old place, one starting the desktop's keyboard shortcuts at login and one standing in the folder of programs; neither failed loudly, and what they did instead was stop happening.";
  let folders = folders_moved_stale_folders();
  let f_name = fn_name("folders_moved_expected");
  let register = text_combine_multiple([f_name, ".mjs"]);
  let spellings = folder_spellings(before);
  let files = [];
  for (let folder of folders) {
    for (let spelling of spellings) {
      let hits = await folder_files_with_text(folder, spelling);
      for (let hit of hits) {
        let itself = text_ends_with(hit, register);
        let already = list_includes(files, hit);
        if (not(itself) && not(already)) {
          files.push(hit);
        }
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
  let home = folder_home();
  let links = await folder_links_with_text(home, before);
  let stale = {
    before,
    files,
    mirrors,
    links,
  };
  return stale;
}
