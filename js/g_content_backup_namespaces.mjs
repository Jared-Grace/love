import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function g_content_backup_namespaces() {
  "Every folder in storage that the game's own written content lands in - the sermons, the objections, and the reviewer's marks on them.";
  "Two of these are spelled as references because a function of that name is what puts the files there, so a rename of the writer takes the reading with it. The other two name no function at all - the data already sits under those words and no rename may move it - so they are frozen where they stand.";
  let namespaces = [
    fn_name("g_sermon_generate_upload"),
    fn_name("g_sermon_write_upload"),
    fn_name("g_objection_generate_upload"),
    text_frozen("g_verify_approval"),
    text_frozen("g_verify_status"),
  ];
  return namespaces;
}
