import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function ebible_version_usfm_download_path(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Where on this machine one translation fetched from eBible as usfm is unpacked.");
  ("It is a folder of its own beside the one holding the same translation's pages, and not a folder inside it, because the two are separate downloads of separate things. A reader asking for the pages must not have to step past the markup to find them, and a fetch of one must not look finished because the other is there.");
  ("The store is asked for by the name it is under rather than by handing the fetching function over, because handing it over reads nothing off it but its name and costs a bundler the whole of the fetching and unpacking in order to spell a path.");
  let f_name = fn_name("ebible_version_usfm_download");
  let joined = storage_function_path(f_name, bible_folder);
  return joined;
}
