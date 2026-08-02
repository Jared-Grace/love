import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
import { path_join } from "./path_join.mjs";
export function storage_function_path(f_name, file_name) {
  "One file inside a function's own store, asked by the name the store is under rather than by the function.";
  "The name-taking twin exists because a store outlives the function that opened it. Once files are written under a word, that word is the address, and code that only wants to read them should not have to import the function it was named after - which in one case meant a sermon reader pulling in a whole app.";
  let folder = storage_function_folder_path(f_name);
  let joined = path_join([folder, file_name]);
  return joined;
}
