import { function_is_assert_json } from "./function_is_assert_json.mjs";
import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
export function local_function_folder(fn) {
  "The folder one function's own stored files sit in.";
  "Asking for the folder directly is what lets the file path be built from it, rather than the other way round: a caller that wanted the folder used to ask for the path of a made-up file and then cut the last piece off the answer, which meant a name that was never a real file had to pass every check a real one does.";
  "It refuses anything that is not a function, rather than reading a name off it. A name handed in as text has no name of its own, so the folder came out spelled after nothing at all - and a folder spelled after nothing is empty, which every caller above here reads as a store with nothing wrong in it. That is the one answer this must never give by accident, and the command line is where it happened: a function named on it arrives as text unless the caller looks it up.";
  function_is_assert_json(fn, {
    hint: "this wants the function itself and was handed something else - if the name arrived from a command line, look it up first, because text carrying a name has no name of its own and the folder would be spelled after nothing",
    fn,
  });
  let folder = storage_function_folder_path(fn.name);
  return folder;
}
