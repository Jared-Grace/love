import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
export function storage_local_key_owner_renames_code(renames) {
  "$plain renames";
  "The source of the function the browser reads the renames from, with every entry spelled out: the old name frozen, so it never follows anything, and the new name as a reference, so a later rename carries it along.";
  let notes = [
    "Every rename of a function whose name people's browsers had already filed settings under: the name it had, and the name it answers to now. Read in the browser, so that settings filed under the old name are found under the new one.",
    "Written out whole from the record beside it by a rename, so it is never edited by hand: the record is the source.",
    "The old name is frozen, because it is a word sitting on disks this repo cannot reach. The new name is a reference, and every entry names the function as it is called today, so a function renamed twice needs no chain.",
  ];
  let lines = [];
  for (let note of notes) {
    let json = json_to(note);
    let line = text_combine_multiple(["  ", json, ";\n"]);
    list_add(lines, line);
  }
  list_add(lines, "  let r = [\n");
  for (let rename of renames) {
    let before = property_get(rename, "before");
    let after = property_get(rename, "after");
    let json2 = json_to(before);
    let json3 = json_to(after);
    let line = text_combine_multiple([
      "    { before: ",
      fn_name("text_frozen"),
      "(",
      json2,
      "), after: ",
      fn_name("fn_name"),
      "(",
      json3,
      ") },\n",
    ]);
    list_add(lines, line);
  }
  list_add(lines, "  ];\n  return r;\n");
  let body = list_join(lines, "");
  let code = text_combine_multiple([
    "export function ",
    fn_name("storage_local_key_owner_renames"),
    "() {\n",
    body,
    "}\n",
  ]);
  return code;
}
