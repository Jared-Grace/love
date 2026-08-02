import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function g_objection_generate_upload_path_generic(f_name, chapter_code) {
  "Where one chapter's generated content sits, under the name of whatever generated it.";
  "The name arrives as a word that must not change, not as a reference to the function of that name, and the difference is the whole of what keeps this working. Content generated last year is sitting under the word as it was written then, and the shipped app asks for it by building this same address - so a name that followed a rename would move where the app looks while leaving every file already uploaded where it was, and the app would come back empty until all of it was generated again.";
  "That is why each caller wears the frozen mark rather than the spelled-name one. A rename is meant to be free; this is the one place a word cannot be, because it has already left for a disk nothing here can reach.";
  let file_name = file_name_json(chapter_code);
  let joined = path_join(["uploads", file_name]);
  let destination = firebase_deploy_function_destination(f_name, joined);
  return destination;
}
