export async function file_module_import(file_path) {
  "$plain file_path";
  "Loads one file of code from disk and answers what it offers, for a caller holding a path rather than a name.";
  "Every other way of reaching code here goes by name, and a name is looked up in the code that is checked out now. This one is for the other case: a copy of the repository as it stood on some earlier day, sitting in a folder of its own, whose files no name in the live repo points at.";
  "What is named here is a file to run, so this belongs with the functions that must never be reachable straight from a command line - a path is as good as a program to anything that will import it.";
  let module = await import(file_path);
  return module;
}
