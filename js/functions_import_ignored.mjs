import { functions_command_seams } from "./functions_command_seams.mjs";
import { import_install } from "./import_install.mjs";
import { npm_install } from "./npm_install.mjs";
export function functions_import_ignored() {
  "Imports that say nothing about what a function does, and so are not followed when asking what it can reach. Each one is plumbing every part of the repo sits on top of: counting it makes a third of all functions look like they shell out, which answers nothing about any of them.";
  "The install pair is the whole reason this list exists. Saving any json can decide a module is missing and install it, and installing runs a command, so through those two edges almost every function on the machine reaches a shell. That path is real but it belongs to the package manager rather than to the caller, and no argument handed to the caller steers it.";
  "The cost of the list is that a genuine shell-out hidden behind one of these names would be missed, so a name is added here only when its own body is read and shown to take no instruction from its caller.";
  "The roster of command seams is here for a reason worth stating, because it looks at first like the last name that should be. It imports all eight runners, but only to spell their names, and what it hands back is text. Nothing can be invoked through it: it takes no argument at all, so there is no instruction a caller could give it, and a list of strings is not a way to call anything. Meanwhile the edge it creates is inherited by everything that consults the roster, which is every checker and every report about the seams - so without this entry the one function whose whole job is to refuse dangerous grants was itself refused a grant, for importing the list of what to refuse.";
  let names = [
    import_install.name,
    npm_install.name,
    functions_command_seams.name,
  ];
  return names;
}
