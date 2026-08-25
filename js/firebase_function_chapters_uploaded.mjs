import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { firebase_uploads_folder } from "./firebase_uploads_folder.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
export async function firebase_function_chapters_uploaded(f_name) {
  "Every chapter one generating function has actually published, read off the bucket rather than off any list of what it was meant to publish.";
  "Asking the bucket is the whole point. A chapter is written on one machine, uploaded from it, and read by a page somewhere else, so the only place that knows which chapters a reader can be shown is the place the reader fetches them from. A word typed here instead would be right on the day it was typed and would say nothing when the next chapter went up.";
  "Listing is names only, and names are exactly what is wanted - the file is named after the chapter it holds, so the answer is in the listing without anything being downloaded.";
  "$plain f_name";
  "the name arrives as the frozen word the files were uploaded under rather than as a reference to a function, for the same reason the address itself is built from a frozen word: what is up there was filed under the word as it stood then, and a name that followed a rename would look somewhere nothing was ever written.";
  arguments_assert(arguments, 1);
  let uploads = firebase_uploads_folder();
  let folder = firebase_deploy_function_destination(f_name, uploads);
  ("a listing matches the opening letters of a name rather than walking a folder, so the closing slash is what stops a neighbouring folder whose name merely starts the same way from being swept in");
  let slash = text_slash_forward();
  let prefix = text_combine(folder, slash);
  let paths = await firebase_storage_list_jg(prefix);
  function chapter_code_of(path) {
    let parts = text_split_slash_forward(path);
    let file_name = list_last(parts);
    let chapter_code = file_name_json_name(file_name);
    return chapter_code;
  }
  let chapter_codes = list_map(paths, chapter_code_of);
  return chapter_codes;
}
