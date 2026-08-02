import { fn_name } from "./fn_name.mjs";
export function g_content_backup_namespaces() {
  "Every folder in storage holding writing the game did itself - the sermons, the objections, the arc lengths.";
  "Written content only, and nothing a player ever typed. What the backup keeps is published, so the line it holds is that a machine wrote the words and at most one person here edited them. A reviewer's marks and a reader's suggestion are neither, however small or however harmless the file looks today - a field that takes free text will one day have somebody's words in it, and by then the backup will have been publishing them for months.";
  "Each is spelled as a reference because a function of that name is what puts the files there, so a rename of the writer takes this reading with it.";
  let f_name = fn_name("g_sermon_generate_upload");
  let f_name2 = fn_name("g_sermon_write_upload");
  let f_name3 = fn_name("g_objection_generate_upload");
  let f_name4 = fn_name("g_arc_generate_upload");
  let namespaces = [f_name, f_name2, f_name3, f_name4];
  return namespaces;
}
