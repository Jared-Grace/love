import { folder_read_files } from "./folder_read_files.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { literal_distinctive_is } from "./literal_distinctive_is.mjs";
import { list_add } from "./list_add.mjs";

// Every named constant whose value is ALSO written as a bare literal
// somewhere else — the "helper exists, literal remains" shape. Returns
// [{f_name, literal, files}] sorted by how widely the literal is duplicated.
export async function literal_duplicates() {
  let paths = await folder_read_files("js");
  let codes = {};
  for (let path of paths) {
    if (!path.endsWith(".mjs")) {
      continue;
    }
    let f_name = path.split("/").pop().slice(0, -4);
    codes[f_name] = await file_read(path);
  }
  let getters = [];
  for (let f_name of Object.keys(codes)) {
    let literal = js_code_getter_literal(codes[f_name], f_name);
    if (literal !== "" && literal_distinctive_is(literal)) {
      list_add(getters, { f_name, literal });
    }
  }
  let found = [];
  for (let getter of getters) {
    let quoted = JSON.stringify(getter.literal);
    let files = [];
    for (let f_name of Object.keys(codes)) {
      if (f_name !== getter.f_name && codes[f_name].includes(quoted)) {
        list_add(files, f_name);
      }
    }
    if (files.length > 0) {
      list_add(found, { f_name: getter.f_name, literal: getter.literal, files });
    }
  }
  found.sort(function lambda(a, b) {
    return b.files.length - a.files.length;
  });
  return found;
}
