import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function sword_version_download_path(sword_folder) {
  "$plain sword_folder";
  "Where on this machine one bible fetched as a Sword module is unpacked.";
  "Named after the fetching itself, the way every other downloaded thing here is, so the folder says what put it there and nothing has to be told twice where things go.";
  "★ THE STORE IS ASKED FOR BY THE NAME IT IS UNDER, NOT BY THE FUNCTION IT IS NAMED AFTER. Handing the function over reads nothing off it but its name, and costs the whole of it: a bundler follows that import like any other, so every page that merely worked out where this folder is would be carrying the fetching and unpacking of a module in order to spell a path.";
  let f_name = fn_name("sword_version_download");
  let joined = storage_function_path(f_name, sword_folder);
  return joined;
}
