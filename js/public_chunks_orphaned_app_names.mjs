import { arguments_assert } from "./arguments_assert.mjs";
import { path_base } from "./path_base.mjs";
import { file_name_app_chunk_app_name_or_null } from "./file_name_app_chunk_app_name_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function public_chunks_orphaned_app_names(f_paths) {
  "Which apps a list of leftover script files belongs to, said as the name of each app's own function.";
  "A LEFTOVER IS ALWAYS SOMEBODY'S. A build cuts a piece of one app out into a file of its own and names that file after the app it came from, so the folder is still saying whose the file is long after the build that made it has been forgotten. Read back, that turns a list of addresses into a list of apps.";
  "It is read back because of what a deployment does with a gate that names nobody. A gate red about something it cannot place holds back every app there is, on purpose - the direction to be wrong in is the one that stops a send rather than the one that lets a break through. So a gate whose offenders are addresses rather than names accuses everyone, and three files weighing five hundred and eleven bytes between them held all thirty four apps out of a deployment while the two apps they belonged to were spelled in their own names the whole time.";
  "The app is spelled as the name of its function rather than as its own short name, because that is the word the reading on the other side is written in. What an app ships is a list of function names, and a leftover placed against that list can only be matched by one of those. The short name is an English word for several apps here, which is the other reason not to say it: a gate mentioning music or code in passing would name an app that has nothing to do with the matter.";
  "A file that is not one of these is passed over rather than guessed at. Not everything a folder keeps was cut out of an app, and a wrong name here would hold back an app that is perfectly sound.";
  arguments_assert(arguments, 1);
  let named = [];
  for (let f_path of f_paths) {
    let file_name = path_base(f_path);
    let a_name = file_name_app_chunk_app_name_or_null(file_name);
    let nobody = null_is(a_name);
    if (nobody) {
      continue;
    }
    let f_name = app_shared_name_prefixed(a_name);
    list_add(named, f_name);
  }
  let unique = list_unique(named);
  let sorted = list_sort_text(unique);
  return sorted;
}
