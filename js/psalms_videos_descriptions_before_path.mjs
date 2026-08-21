import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function psalms_videos_descriptions_before_path(moment) {
  "$plain moment";
  "Where one reading of what the channel's songs already carried is kept, named by the moment it was taken.";
  "In the found half of the data folder because it is a record of what was true once, not something a later run reads to decide by. A record of the past must not be rewritten when a name changes, and that is exactly what the halves are for.";
  "Named by the moment rather than written over, because the whole worth of it is having the one from before the run that took the words away. A single file kept up to date would hold the state after the damage and call itself a backup.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("psalms_videos_descriptions_before");
  let name = text_combine_multiple([f_name, "_", moment, ".json"]);
  let v = findings_folder();
  let path = path_join([v, name]);
  return path;
}
