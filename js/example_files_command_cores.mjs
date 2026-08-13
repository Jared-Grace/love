import { js_identifier_params_delete_dir } from "./js_identifier_params_delete_dir.mjs";
import { js_identifier_param_rename_dir } from "./js_identifier_param_rename_dir.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_identifiers_rename_dir } from "./js_identifiers_rename_dir.mjs";
import { js_identifier_delete_unused_dir } from "./js_identifier_delete_unused_dir.mjs";
import { js_identifier_copy_dir } from "./js_identifier_copy_dir.mjs";
import { js_identifier_wrap_dir } from "./js_identifier_wrap_dir.mjs";
import { js_identifiers_prefix_rename_dir } from "./js_identifiers_prefix_rename_dir.mjs";
import { js_identifier_param_new_dir } from "./js_identifier_param_new_dir.mjs";
import { js_selects_functionize_dir } from "./js_selects_functionize_dir.mjs";
export function example_files_command_cores() {
  "Which hermetic core proves which whole-repo command. The commands themselves read and write wherever they are pointed, so a corpus example cannot run one; each has a twin taking the folder as its first argument, and that twin is what the example actually executes inside a temporary directory.";
  "This is a register rather than a chain of branches because a pairing of two names is all any entry ever was. Every branch here used to be six lines saying hand the folder and the arguments to this one, and the six lines differed only in which core they named - so adding an example of a command that already had a twin still meant writing code, and getting the wiring wrong was possible in a way a two-column table is not.";
  "Both columns follow a rename. The command is written as a spelled name rather than a property key, because a key that happens to match a function is not a reference and would keep the old word after the function moved; the core is imported, which the rename machinery already follows.";
  let cores = [
    {
      name: fn_name("function_rename"),
      core: js_identifiers_rename_dir,
    },
    {
      name: fn_name("function_delete_unused"),
      core: js_identifier_delete_unused_dir,
    },
    {
      name: fn_name("function_copy"),
      core: js_identifier_copy_dir,
    },
    {
      name: fn_name("function_wrap"),
      core: js_identifier_wrap_dir,
    },
    {
      name: fn_name("functions_rename_if_starts_with"),
      core: js_identifiers_prefix_rename_dir,
    },
    {
      name: fn_name("function_param_new"),
      core: js_identifier_param_new_dir,
    },
    {
      name: fn_name("function_params_delete"),
      core: js_identifier_params_delete_dir,
    },
    {
      name: fn_name("function_param_rename"),
      core: js_identifier_param_rename_dir,
    },
    {
      name: fn_name("js_selects_functionize"),
      core: js_selects_functionize_dir,
    },
    {
      name: fn_name("app_shared_prod_snapshot"),
      core: app_shared_prod_snapshot_folder,
    },
  ];
  return cores;
}
