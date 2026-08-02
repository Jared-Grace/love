import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function g_content_backup_namespaces() {
  "Every folder in storage that the game's own written content lands in - the sermons, the objections, and the reviewer's marks on them.";
  "The first three are spelled as references because a function of that name is what puts the files there, so a rename of the writer takes the reading with it. The last two name no function at all - the data already sits under those words and no rename may move it - so they are frozen where they stand.";
  let f_name = fn_name("g_sermon_generate_upload");
  let f_name2 = fn_name("g_sermon_write_upload");
  let f_name3 = fn_name("g_objection_generate_upload");
  let t = text_frozen("g_verify_approval");
  let t2 = text_frozen("g_verify_status");
  let namespaces = [f_name, f_name2, f_name3, t, t2];
  return namespaces;
}
