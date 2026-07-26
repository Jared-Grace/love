export function functions_import_ignored() {
  "Imports that say nothing about what a function does, and so are not followed when asking what it can reach. Each one is plumbing every part of the repo sits on top of: counting it makes a third of all functions look like they shell out, which answers nothing about any of them.";
  "The install pair is the whole reason this list exists. Saving any json can decide a module is missing and install it, and installing runs a command, so through those two edges almost every function on the machine reaches a shell. That path is real but it belongs to the package manager rather than to the caller, and no argument handed to the caller steers it.";
  "The cost of the list is that a genuine shell-out hidden behind one of these names would be missed, so a name is added here only when its own body is read and shown to take no instruction from its caller.";
  let names = ["import_install", "npm_install"];
  return names;
}
