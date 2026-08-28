import { firebase_prod_file_names } from "./firebase_prod_file_names.mjs";
import { file_names_app_names } from "./file_names_app_names.mjs";
export async function firebase_prod_app_names() {
  "the pages that actually go live. hosting serves one folder out of one repo, so a list gathered across every repo on the machine names pages that were never uploaded and can only ever look missing";
  "All this half does is say where the list of files comes from. Turning that list into app names is the same work whichever side of the wire the files were listed from, and is said once next door.";
  let files = await firebase_prod_file_names();
  let names = file_names_app_names(files);
  return names;
}
