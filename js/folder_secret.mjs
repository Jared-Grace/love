import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function folder_secret() {
  "The folder holding the keys that let this machine act as itself - the service account the uploads and deploys sign in with. It sits in the human's home folder, and is deliberately outside every repo, so that nothing in it can be committed by accident.";
  "It used to be said as two steps up from wherever the asking happened to start, which was never the repo at all - a relative path is answered against the folder the process was started in, so the same words meant different folders to different callers. It survived only because the repo sat two steps under the home folder and almost everything ran from the repo root.";
  "Moving the repo one folder deeper broke exactly that coincidence, and it broke quietly: the two steps up landed beside the repo instead of in the home folder, nothing named the old place for a search to find, and the keys simply stopped being found. Asking the home folder outright says the same thing from any starting folder, and goes on saying it wherever the repo is moved to next.";
  let home = folder_home();
  let joined = path_join([home, "secret"]);
  return joined;
}
