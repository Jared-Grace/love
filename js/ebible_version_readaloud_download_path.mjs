import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function ebible_version_readaloud_download_path(bible_folder) {
  "$plain bible_folder";
  "Where on this machine the spoken reading of one bible is unpacked.";
  "★ THE STORE IS ASKED FOR BY THE NAME IT IS UNDER, NOT BY THE FUNCTION IT IS NAMED AFTER. Handing the function over reads nothing off it but its name, and costs the whole of it: a bundler follows that import like any other, so every page that merely worked out where this folder is was carrying the fetching and unpacking of the recordings in order to spell a path.";
  let f_name = fn_name("ebible_version_readaloud_download");
  let joined = storage_function_path(f_name, bible_folder);
  return joined;
}
