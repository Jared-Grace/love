import { json_format_to } from "./json_format_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_constant_json_write(f_name, prose, value) {
  "$plain f_name";
  "Write out a repo function that does nothing but hand back one fixed value, with the sentences it should carry above it.";
  "IT EXISTS SO THAT A FACT COUNTED ON DISK CAN BE READ IN A BROWSER. A page decides what to draw in one pass with nothing to wait for, and it cannot count files; so what the folders say is counted here and written into a function the page imports. Every generated table of that kind was building the same source text by hand - the export line, the prose lines, the value, the return - and the copies agreed only for as long as somebody kept them agreeing.";
  "THE PROSE IS PASSED IN RATHER THAN WRITTEN HERE, because what a generated table means is different for every table and the shape of a generated file is the same for all of them. That split is the whole reason this is worth having: the part that differs is a list of sentences, and the part that does not is never written twice.";
  "THE VALUE GOES THROUGH JSON AND SO MUST BE PLAIN. A function or a date or anything carrying identity comes back as something else or as nothing, silently, and the file still parses. What belongs here is a table that was counted, not an object that was built.";
  "IT NAMES THE FILE AFTER THE FUNCTION and writes it beside every other one, because that is where the repo looks for a name. A generated file kept anywhere else is a name nothing can import and a name no rename would follow.";
  let json = json_format_to(value);
  let lines = [];
  let item = text_combine_multiple(["export function ", f_name, "() {"]);
  list_add(lines, item);
  for (let sentence of prose) {
    let quoted = json_format_to(sentence);
    let item2 = text_combine_multiple(["  ", quoted, ";"]);
    list_add(lines, item2);
  }
  let item3 = text_combine_multiple(["  let r = ", json, ";"]);
  list_add_multiple(lines, [item3, "  return r;", "}", ""]);
  let source = list_join_newline(lines);
  let folder = folder_repo_love();
  let name = text_combine_multiple([f_name, ".mjs"]);
  let path = path_join([folder, "js", name]);
  await file_overwrite(path, source);
  return path;
}
