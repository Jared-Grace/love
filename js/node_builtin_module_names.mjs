import { builtinModules } from "module";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_unique } from "./list_unique.mjs";
export function node_builtin_module_names() {
  "Everything Node carries inside itself, asked of Node rather than written down here.";
  "★ A TYPED LIST OF THESE IS A LIST THAT GOES QUIETLY SHORT. The one that stood here named three - the disk, the disk again, and starting another program - and the repo was by then reaching for eight more it did not name: paths, the machine, addresses, reading a line, a stream, hashing, serving, and the module system itself. Nothing went red, because a reading narrowed by a typed word cannot complain about what it never looked for.";
  "Node knows its own list and answers with it, so the list is right on a version nobody has installed yet and cannot fall behind the one that is.";
  "The names come back without the scheme in front of them, which is the spelling to compare against.";
  arguments_assert(arguments, 0);
  let names = list_unique(builtinModules);
  return names;
}
