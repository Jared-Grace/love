import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
import { node_builtin_module_names } from "./node_builtin_module_names.mjs";
import { node_only_package_names } from "./node_only_package_names.mjs";
export function node_only_module_names() {
  "Every module name a browser cannot make good on - what Node carries inside itself, and the installed libraries that want a machine.";
  "The two halves are gathered separately and joined here, because one of them is asked of Node and the other has to be written down, and a reader of either wants to know which it is looking at. Joined, they are the single question a file is put to: does it name any of these.";
  arguments_assert(arguments, 0);
  let builtins = node_builtin_module_names();
  let packages = node_only_package_names();
  let names = list_concat(builtins, packages);
  return names;
}
