export function qa_tree_names_skipped() {
  "The parts of the working folder the frozen copy leaves out";
  "The history is left out because no question here is about it, and it is larger than everything else together";
  "The installed packages are left out of the copying and pointed at instead, since they are the same whatever the code says";
  "The python environment and the phone build are left out because nothing that is asked reads them - and if that ever stops being true it stops loudly, with a missing file, rather than quietly with a wrong answer";
  "The ignored folder is left out because the copy lives in memory and it does not fit there. Measured 2026-09-27: it was 14G of pictures and backups and a second python environment; the memory area filled and the editor would not open. The copy standing on a commit never held it and every gate runs there - so nothing asked needs it, and what a run writes into it is made fresh inside the copy";
  let names = [".git", "node_modules", "venv", "android", "gitignore"];
  return names;
}
