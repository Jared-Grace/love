import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
export function path_bare_downloads(path_given) {
  arguments_assert(arguments, 1);
  ("$plain path_given");
  ("A path as given, unless it is a bare file name - then the file of that name in Downloads.");
  ("★ A BARE NAME MEANS DOWNLOADS, NEVER THE FOLDER THE COMMAND HAPPENS TO RUN IN. Commands run from the repo root, so a bare name read as it stands lands a file at the top of the repo, where the next commit sweeps it into git - forty-four lyric video description files went in that way, while the videos they described sat in Downloads, which is also the only place the posting that reads them looks.");
  let nested = text_includes(path_given, "/");
  if (nested) {
    return path_given;
  }
  let r = folder_user_downloads_path(path_given);
  return r;
}
