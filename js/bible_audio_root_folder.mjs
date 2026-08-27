import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_user } from "./folder_user.mjs";
export function bible_audio_root_folder() {
  "Where every recorded bible on this disk is kept, one folder per translation.";
  "★ THE LAYOUT IS SPELLED ONCE SO THAT A MOVE IS ONE EDIT AND NOT A SEARCH. The chapter path used to spell the two folder names itself, so anything wanting the whole tree - a sweep, a size, a clean-up - had to spell them again, and a second speller is what makes a moved folder strand its own data quietly.";
  arguments_assert(arguments, 0);
  let folder = path_join(["audio", "bible"]);
  let f = folder_user(folder);
  return f;
}
