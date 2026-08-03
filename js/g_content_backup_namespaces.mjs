import { g_sermon_generate_upload_namespace } from "./g_sermon_generate_upload_namespace.mjs";
import { g_sermon_write_upload_namespace } from "./g_sermon_write_upload_namespace.mjs";
import { g_objection_generate_upload_namespace } from "./g_objection_generate_upload_namespace.mjs";
import { g_arc_generate_upload_namespace } from "./g_arc_generate_upload_namespace.mjs";
export function g_content_backup_namespaces() {
  "Every folder in storage holding writing the game did itself - the sermons, the objections, the arc lengths.";
  "Written content only, and nothing a player ever typed. What the backup keeps is published, so the line it holds is that a machine wrote the words and at most one person here edited them. A reviewer's marks and a reader's suggestion are neither, however small or however harmless the file looks today - a field that takes free text will one day have somebody's words in it, and by then the backup will have been publishing them for months.";
  "Each is read off the function that holds the word rather than spelled here, and each of those words is frozen. A function of that name is indeed what puts the files there, but the files are on a shared bucket nothing here can move - so the word stays where it is through a rename, and this list has to stay with the files rather than with the writer. Spelled as references, as they were until this line was written, a rename would have moved this reading to a folder that does not exist and left every uploaded file unbacked.";
  let f_name = g_sermon_generate_upload_namespace();
  let f_name2 = g_sermon_write_upload_namespace();
  let f_name3 = g_objection_generate_upload_namespace();
  let f_name4 = g_arc_generate_upload_namespace();
  let namespaces = [f_name, f_name2, f_name3, f_name4];
  return namespaces;
}
