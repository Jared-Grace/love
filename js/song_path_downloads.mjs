import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
export async function song_path_downloads(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("Where on this machine a song of a given name is, given that songs arrive in the downloads folder.");
  ("A PAGE IS NEVER TOLD WHERE A CHOSEN FILE ACTUALLY IS. A browser hands a page the file's contents and its name and nothing else, on purpose - so a page that has just played a song still cannot say the one thing a renderer needs, which is the path to read it from again. This closes that gap from the other side: the name is enough to find the file, because there is one folder songs land in.");
  ("It answers with whether it found anything rather than with a path that may be nothing, so a caller has to look at the answer before using it. A path built by joining and never checked is a path that is always returned and sometimes wrong.");
  let folder = folder_user_downloads_path();
  let path_audio = path_join([folder, file_name]);
  let found = await file_exists(path_audio);
  let r = {
    path_audio,
    found,
  };
  return r;
}
