import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_user } from "./folder_user.mjs";
export function bible_audio_archive_root_folder() {
  "Where recordings that are kept but are not part of what is being made are put aside, one folder per translation, laid out exactly as the live tree is.";
  "★ IT IS BESIDE THE LIVE TREE RATHER THAN INSIDE IT, WHICH IS THE WHOLE OF WHAT IT BUYS. Every sweep over recordings reads the live folder and counts what it finds there, so a recording left in place is counted whether or not anybody wants it. Five hundred and eight recordings were on this disk and four hundred and twenty seven of them were books nobody had asked for, which read as a disk that was almost finished when it was almost empty.";
  "★ THE SOUND IS MOVED AND NOT DELETED, BECAUSE THE REASON FOR SETTING IT ASIDE WAS THE WORD FOR NOW. The deuterocanonical books were put off rather than ruled out, and hours of recording them already exist. A move can be undone by moving back; a delete asks for those hours again.";
  arguments_assert(arguments, 0);
  let folder = path_join(["audio", "bible_archive"]);
  let f = folder_user(folder);
  return f;
}
