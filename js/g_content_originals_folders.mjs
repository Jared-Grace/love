import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { fn_name } from "./fn_name.mjs";
export function g_content_originals_folders() {
  "Every folder on the drive holding writing the game did itself.";
  "Named one at a time rather than taken whole, and that is the whole point of the function. The same drive holds the downloaded Bibles, the read-aloud recordings, every answer an outside service ever gave and the locks - some fourteen thousand megabytes of it, almost none of it ours to hand out. A list saying which folders are the game's own writing is the only thing standing between a backup and all of the rest.";
  "Each is spelled as a reference because the folder is named after the function that fills it, so a rename of the writer moves the folder and moves this reading with it.";
  let f_name6 = g_sermon_edited_store_name();
  let names = [
    fn_name("g_sermon_generate"),
    fn_name("g_sermon_write"),
    fn_name("g_objection_generate"),
    fn_name("g_arc_generate"),
    fn_name("g_struggle_generate"),
    f_name6,
  ];
  return names;
}
