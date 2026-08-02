import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
export async function firebase_function_folder_names() {
  "Every function name the shared bucket has a folder under, each said once.";
  "The bucket files everything a function uploaded under that function's own name, so this list is the set of names that have escaped to a disk nothing here can reach. Reading it is the only way to learn what is actually up there - the game uploads straight from a browser, so what the bucket holds runs ahead of anything on this machine.";
  "Listing is names only, and that is exactly enough. Nothing here needs a size or a time; the whole question is which words are written up there.";
  arguments_assert(arguments, 0);
  let prefix = "function/";
  let paths = await firebase_storage_list_jg(prefix);
  let names = [];
  for (let path of paths) {
    let parts = text_split_slash_forward(path);
    let name = list_get(parts, 1);
    list_add(names, name);
  }
  let unique = [...new Set(names)];
  unique.sort();
  return unique;
}
