import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
export function local_function_folder(fn) {
  "The folder one function's own stored files sit in.";
  "Asking for the folder directly is what lets the file path be built from it, rather than the other way round: a caller that wanted the folder used to ask for the path of a made-up file and then cut the last piece off the answer, which meant a name that was never a real file had to pass every check a real one does.";
  let folder = storage_function_folder_path(fn.name);
  return folder;
}
