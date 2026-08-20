import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { text_binary_is } from "./text_binary_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { text_combine } from "./text_combine.mjs";
import { not } from "./not.mjs";
export async function folder_root_move_bare_named(before) {
  "Every file that hands a moved folder's name over as a piece of writing, with no folder mark after it - the way code names a folder it is about to build a path out of. Answers them and changes nothing.";
  "Reported rather than rewritten, because which of the two a name is takes a reading, and a reading is the one thing a sweep cannot do. A wrong guess here writes a path that nobody ever notices is wrong.";
  "Asked of the name in quotation marks rather than of the name loose in the writing. Loose, an ordinary word answers everywhere: `letters` came back from two hundred and twenty seven files, which is not a report anybody reads - and the one shape actually worth a reading, a folder named as a piece of writing on its way into a path, was in there somewhere among them.";
  "A file that already spells the folder as the start of a path is left off, because that spelling has been dealt with and saying so again only buries the ones that have not.";
  let repo = folder_repo_love();
  let quoted = text_quote_double(before);
  let as_path = text_combine(before, "/");
  let paths = await git_files_tracked_folder(repo);
  let named = [];
  for (let tracked_path of paths) {
    let f_path = path_join([repo, tracked_path]);
    let text = await file_read_try(f_path);
    if (not(text)) {
      continue;
    }
    let binary = text_binary_is(text);
    if (binary) {
      continue;
    }
    let spelled = text_includes(text, quoted);
    if (not(spelled)) {
      continue;
    }
    let dealt = text_includes(text, as_path);
    if (dealt) {
      continue;
    }
    named.push(tracked_path);
  }
  return named;
}
