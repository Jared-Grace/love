import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { function_rename } from "./function_rename.mjs";
import { js_identifiers_rename_dir } from "./js_identifiers_rename_dir.mjs";
import { function_delete_unused } from "./function_delete_unused.mjs";
import { js_identifier_delete_unused_dir } from "./js_identifier_delete_unused_dir.mjs";
import { function_copy } from "./function_copy.mjs";
import { js_identifier_copy_dir } from "./js_identifier_copy_dir.mjs";
import { function_wrap } from "./function_wrap.mjs";
import { js_identifier_wrap_dir } from "./js_identifier_wrap_dir.mjs";
("Map a multi-file example's fn to a directory transform (dir)=>void run in a sandbox");
("temp dir. ",
  function_rename.name,
  " / ",
  function_delete_unused.name,
  " / ",
  function_copy.name,
  " are repo-wide/ambient,");
("so the gate proves their CROSS-FILE core via the hermetic js_identifier(s)_*_dir cores.");
export function example_files_command_lambda(fn_name, args) {
  if (equal(fn_name, function_rename.name)) {
    async function lambda(dir) {
      let r = await js_identifiers_rename_dir(dir, args[0], args[1]);
      return r;
    }
    return lambda;
  }
  if (equal(fn_name, function_delete_unused.name)) {
    async function lambda(dir) {
      let r2 = await js_identifier_delete_unused_dir(dir, args[0]);
      return r2;
    }
    return lambda;
  }
  if (equal(fn_name, function_copy.name)) {
    async function lambda(dir) {
      let r3 = await js_identifier_copy_dir(dir, args[0], args[1]);
      return r3;
    }
    return lambda;
  }
  if (equal(fn_name, function_wrap.name)) {
    async function lambda(dir) {
      let r4 = await js_identifier_wrap_dir(dir, args[0], args[1]);
      return r4;
    }
    return lambda;
  }
  return null;
}
