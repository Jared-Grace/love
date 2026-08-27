import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
export function berean_usfm_download_path() {
  arguments_assert(arguments, 0);
  ("Where on this machine the Berean release fetched from its publisher is unpacked.");
  ("The store is asked for by the name it is under rather than by the function that fills it. Handing that function over reads nothing off it but its name and costs the whole of it, because a bundler follows that import like any other - so a page that only wanted to spell an address would carry the fetching and unzipping of a bible in order never to use it.");
  let f_name = fn_name("berean_usfm_download");
  let folder = storage_function_folder_path(f_name);
  return folder;
}
