import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_uploads_folder } from "./firebase_uploads_folder.mjs";
import { path_join } from "./path_join.mjs";
import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
export function firebase_function_upload_path(f_name, file_name) {
  "$plain f_name";
  "$plain file_name";
  "Where one generated file sits in storage, under the name of whatever generated it.";
  "The name arrives as a word that must not change, not as a reference to the function of that name. Content generated last year is sitting under the word as it was written then, and the shipped app asks for it by building this same address - so a name that followed a rename would move where the app looks while leaving every file already uploaded where it was.";
  "It says nothing about what kind of file this is, which is what lets the chapters and the recordings share it. The caller has already decided that, because the caller is the only one that knows.";
  arguments_assert(arguments, 2);
  let uploads = firebase_uploads_folder();
  let joined = path_join([uploads, file_name]);
  let destination = firebase_deploy_function_destination(f_name, joined);
  return destination;
}
