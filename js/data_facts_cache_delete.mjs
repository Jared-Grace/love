import { functions_facts_cache_path } from "./functions_facts_cache_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function data_facts_cache_delete() {
  "Throws away what was read off each file last time, so the next question is";
  "answered by reading the files again.";
  "It is worth having a name because the alternative is a shell removal aimed at";
  "the ignored folder, and that folder is not only cache. Beside this file sit the";
  "notes saying which files each conversation has written and not yet committed -";
  "so a removal spelled wide enough to be convenient is spelled wide enough to";
  "make one session lose another session's record of its own work, which is then";
  "swept up under a message naming nobody.";
  "Naming one file cannot do that, and being one named unit it can be approved";
  "once instead of argued about each time. Measuring the cold path is the reason";
  "it gets asked for, and that is a thing worth being able to do freely.";
  "It says whether there was anything to throw away, because a cache that was";
  "already absent and one just cleared look identical afterwards - and a cold";
  "measurement taken in the belief it was warm is worse than no measurement.";
  let path = functions_facts_cache_path();
  let held = await file_exists(path);
  await file_delete_if_exists(path);
  let r = {
    path,
    deleted: held,
  };
  return r;
}
