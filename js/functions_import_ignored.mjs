import { fn_name } from "./fn_name.mjs";
export function functions_import_ignored() {
  "Imports that say nothing about what a function does, and so are not followed when asking what it can reach. Each one is plumbing every part of the repo sits on top of: counting it makes a third of all functions look like they shell out, which answers nothing about any of them.";
  "The install pair is the whole reason this list exists. Saving any json can decide a module is missing and install it, and installing runs a command, so through those two edges almost every function on the machine reaches a shell. That path is real but it belongs to the package manager rather than to the caller, and no argument handed to the caller steers it.";
  "The cost of the list is that a genuine shell-out hidden behind one of these names would be missed, so a name is added here only when its own body is read and shown to take no instruction from its caller.";
  "The roster of command seams was the third name here, and it is worth recording why it left. It imported all eight runners only to spell their names, and that edge was inherited by every checker and every report about the seams - so the one fn whose whole job is to refuse dangerous grants was itself refused a grant, for importing the list of what to refuse. Ignoring the edge answered that, at the price this list always charges. Naming the eight instead of importing them removes the edge outright, so there is nothing left to ignore, and a shell-out that ever did hide behind that name is caught again rather than waved through.";
  "That is the remedy to reach for first whenever a name is proposed for this list. An import that exists only to read a name off a fn is not a dependency at all, and it can be deleted; only an edge that is real, and plumbing, and unsteerable by any caller belongs here.";
  let f_name = fn_name("import_install");
  let f_name2 = fn_name("npm_install");
  let names = [f_name, f_name2];
  return names;
}
