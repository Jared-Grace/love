export function qa_tree_names_skipped() {
  "The parts of the working folder the frozen copy leaves out";
  "The history is left out because no question here is about it, and it is larger than everything else together";
  "The installed packages are left out of the copying and pointed at instead, since they are the same whatever the code says";
  "The python environment and the phone build are left out because nothing that is asked reads them - and if that ever stops being true it stops loudly, with a missing file, rather than quietly with a wrong answer";
  let names = [".git", "node_modules", "venv", "android"];
  return names;
}
