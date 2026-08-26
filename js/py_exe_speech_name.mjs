import { folder_user_join } from "./folder_user_join.mjs";
import { text_combine } from "./text_combine.mjs";
export function py_exe_speech_name() {
  "The python that can speak, ending in a space so a script name follows straight on the end of it.";
  "★ THE SPEAKING STACK IS A SECOND PYTHON AND NOT THE REPO'S ONE, ON PURPOSE. Kokoro brings a quarter of a gigabyte of machine learning with it, and the repo's python is shared by every peer working here for talking to an outside service. Keeping them apart means a peer's install cannot break a five-day recording run and the recording run cannot break theirs.";
  "★ IT LIVES OUTSIDE THE REPO BECAUSE ONLY THE REPO'S OWN venv IS IGNORED BY GIT. A second one built beside it would have been swept into a public repository by the next peer who committed the whole tree.";
  let p = folder_user_join("venv_speech", "bin/python");
  let n = text_combine(p, " ");
  return n;
}
