import { fn_name } from "./fn_name.mjs";
export function example_tool_families() {
  "Which commands the examples menu clusters under one friendly word. A family covers more than one command on purpose: renaming a name and renaming a whole prefix are the same tool asked two ways, adding a parameter and deleting one are two ends of the same thing, and the three fold entry points differ only in how much they are told. A command named nowhere here is its own family, so examples of one command still cluster and a lone tool stays lone.";
  "The word is what a reader sees, so it is written as a word. The command is written as a spelled name rather than a property key, because a key matching a function name is not a reference and would keep the old word after that command was renamed - the cluster would then quietly split in two.";
  let families = [
    {
      name: fn_name("function_rename"),
      family: "rename",
    },
    {
      name: fn_name("functions_rename_if_starts_with"),
      family: "rename",
    },
    {
      name: fn_name("function_delete_unused"),
      family: "delete unused",
    },
    {
      name: fn_name("function_param_new"),
      family: "parameters",
    },
    {
      name: fn_name("function_params_delete"),
      family: "parameters",
    },
    {
      name: fn_name("js_fold"),
      family: "fold",
    },
    {
      name: fn_name("js_fold_all"),
      family: "fold",
    },
    {
      name: fn_name("js_fold_auto"),
      family: "fold",
    },
    {
      name: fn_name("js_imports_auto_relative"),
      family: "imports",
    },
  ];
  return families;
}
