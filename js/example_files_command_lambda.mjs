import { fn_name } from "./fn_name.mjs";
import { js_selects_functionize_dir } from "./js_selects_functionize_dir.mjs";
import { equal } from "./equal.mjs";
import { js_identifiers_rename_dir } from "./js_identifiers_rename_dir.mjs";
import { js_identifier_delete_unused_dir } from "./js_identifier_delete_unused_dir.mjs";
import { js_identifier_copy_dir } from "./js_identifier_copy_dir.mjs";
import { js_identifier_wrap_dir } from "./js_identifier_wrap_dir.mjs";
import { js_identifiers_prefix_rename_dir } from "./js_identifiers_prefix_rename_dir.mjs";
import { js_identifier_param_new_dir } from "./js_identifier_param_new_dir.mjs";
import { js_identifier_param_delete_dir } from "./js_identifier_param_delete_dir.mjs";
("Map a multi-file example's fn to a directory transform (dir)=>void run in a sandbox");
("temp dir. The repo-wide renaming, unused-deleting and copying commands are ambient,");
("so the gate proves their CROSS-FILE core via the hermetic js_identifier(s)_*_dir cores.");
export function example_files_command_lambda(f_name, args) {
  if (equal(f_name, fn_name("function_rename"))) {
    async function lambda(dir) {
      let r = await js_identifiers_rename_dir(dir, args[0], args[1]);
      return r;
    }
    return lambda;
  }
  if (equal(f_name, fn_name("function_delete_unused"))) {
    async function lambda(dir) {
      let r2 = await js_identifier_delete_unused_dir(dir, args[0]);
      return r2;
    }
    return lambda;
  }
  if (equal(f_name, fn_name("function_copy"))) {
    async function lambda(dir) {
      let r3 = await js_identifier_copy_dir(dir, args[0], args[1]);
      return r3;
    }
    return lambda;
  }
  if (equal(f_name, fn_name("function_wrap"))) {
    async function lambda(dir) {
      let r4 = await js_identifier_wrap_dir(dir, args[0], args[1]);
      return r4;
    }
    return lambda;
  }
  if (equal(f_name, fn_name("functions_rename_if_starts_with"))) {
    async function lambda(dir) {
      let r5 = await js_identifiers_prefix_rename_dir(dir, args[0], args[1]);
      return r5;
    }
    return lambda;
  }
  if (equal(f_name, fn_name("function_param_new"))) {
    async function lambda(dir) {
      let r6 = await js_identifier_param_new_dir(
        dir,
        args[0],
        args[1],
        args[2],
      );
      return r6;
    }
    return lambda;
  }
  if (equal(f_name, fn_name("function_params_delete"))) {
    async function lambda(dir) {
      let r7 = await js_identifier_param_delete_dir(dir, args[0], args[1]);
      return r7;
    }
    return lambda;
  }
  if (equal(f_name, fn_name("js_selects_functionize"))) {
    async function lambda(dir) {
      let r8 = await js_selects_functionize_dir(dir, args[0], args[1], args[2]);
      return r8;
    }
    return lambda;
  }
  return null;
}
