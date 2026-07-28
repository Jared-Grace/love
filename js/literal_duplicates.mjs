import { js_code_literal_prose_only } from "./js_code_literal_prose_only.mjs";
import { literal_getter_peer_is } from "./literal_getter_peer_is.mjs";
import { literal_duplicate_means } from "./literal_duplicate_means.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { literal_distinctive_is } from "./literal_distinctive_is.mjs";
import { list_add } from "./list_add.mjs";
export async function literal_duplicates() {
  let names = await folder_read_files("js");
  let codes = {};
  for (let name of names) {
    let b2 = name.endsWith(".mjs");
    if (not(b2)) {
      continue;
    }
    let f_name = name.slice(0, -4);
    let file_path = path_join(["js", name]);
    codes[f_name] = await file_read(file_path);
  }
  let getters = [];
  for (let f_name of Object.keys(codes)) {
    let literal = js_code_getter_literal(codes[f_name], f_name);
    if (not_equal(literal, "") && literal_distinctive_is(literal)) {
      list_add(getters, {
        f_name,
        literal,
      });
    }
  }
  let found = [];
  for (let getter of getters) {
    let quoted = JSON.stringify(getter.literal);
    let files = [];
    for (let f_name of Object.keys(codes)) {
      let peer_is = literal_getter_peer_is(getters, f_name, getter.literal);
      let holds = codes[f_name].includes(quoted);
      let candidate = not_equal(f_name, getter.f_name) && not(peer_is) && holds;
      if (candidate) {
        let prose_only = js_code_literal_prose_only(
          codes[f_name],
          getter.literal,
        );
        if (not(prose_only)) {
          list_add(files, f_name);
        }
      }
    }
    if (greater_than(files.length, 0)) {
      let means = literal_duplicate_means(codes, files, getter.literal);
      list_add(found, {
        f_name: getter.f_name,
        literal: getter.literal,
        files,
        means,
      });
    }
  }
  function lambda(a, b) {
    let difference = subtract(b.files.length, a.files.length);
    return difference;
  }
  found.sort(lambda);
  return found;
}
