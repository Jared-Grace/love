import { folder_private_root } from "./folder_private_root.mjs";
import { path_join } from "./path_join.mjs";
export function folder_secret() {
  "The folder holding the keys that let this machine act as itself - the service account the uploads and deploys sign in with, and beside them the tokens, sessions and calendars that stand for the human somewhere else.";
  "It sits inside the folder of things that never leave this machine, rather than beside it. The two were keeping one promise from two places: a key must not be copied anywhere, and neither must somebody else's words. A promise kept in two places is one that whoever writes the next backup has to be told about twice, and being told once is the only version of that which survives being forgotten. Inside, the promise belongs to the folder above and this is one kind of thing keeping it.";
  "Which is also what it always was. Half of what is in here was never a key: a calendar, a saved session, a token. That is private rather than secret, and the folder had been quietly holding both kinds for as long as it existed.";
  "The name stays, because the two words do not mean the same thing and the narrower one is worth keeping where it applies. Private says do not copy this off the machine. Secret says that and more - do not print it, do not write it into a log, and if it is ever seen by anybody, replace it rather than hide it again.";
  "It used to be said as two steps up from wherever the asking happened to start, which was never the repo at all - a relative path is answered against the folder the process was started in, so the same words meant different folders to different callers. It survived only because the repo sat two steps under the home folder and almost everything ran from the repo root, and moving the repo one folder deeper broke exactly that coincidence, quietly: the two steps up landed beside the repo, nothing named the old place for a search to find, and the keys simply stopped being found. Asking outright for the folder this belongs in says the same thing from any starting folder, and goes on saying it wherever either folder is moved to next.";
  let root = folder_private_root();
  let joined = path_join([root, "secret"]);
  return joined;
}
