import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { text_binary_is } from "./text_binary_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { not } from "./not.mjs";
export async function folder_root_move_bare_named(before) {
  "Every file that writes a moved folder's name on its own, with no folder mark after it. Answers them and changes nothing.";
  "Reported rather than rewritten, because the name on its own is usually an ordinary word and only sometimes the folder. Which of the two it is takes a reading, and a reading is the one thing a sweep cannot do - so the sweep hands the list over instead of guessing, and a wrong guess here writes a path nobody ever notices is wrong.";
  "A file that already spells the folder as the start of a path is left off, because that spelling has been dealt with and saying so again only buries the ones that have not.";
  let repo = folder_repo_love();
  let bare = before;
  let as_path = text_combine(before, "/");
  let paths = await git_files_tracked_folder(repo);
  let named = [];
  for (let path_relative of paths) {
    let f_path = path_join([repo, path_relative]);
    let text = await file_read_try(f_path);
    if (not(text)) {
      continue;
    }
    let binary = text_binary_is(text);
    if (binary) {
      continue;
    }
    let spelled = text_includes(text, bare);
    if (not(spelled)) {
      continue;
    }
    let dealt = text_includes(text, as_path);
    if (dealt) {
      continue;
    }
    named.push(path_relative);
  }
  return named;
}
