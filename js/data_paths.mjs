import { data_given_folder } from "./data_given_folder.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
export async function data_paths() {
  "Every file in the given half of the data folder, however deeply nested. What lives there - the example corpus, the aliases the human types, the baselines a gate ratchets against - is not code, so no sweep over the functions ever sees it, and the two commands that ask whether a name is still spoken for both start here.";
  "The given half and not the whole folder, and that is the whole reason the halves exist. A name spelled anywhere these paths reach is a name a later run still depends on: it cannot be deleted, and renaming it has to rewrite the file that spells it. Both of those are right for something read to decide, and both are wrong for a record of what already happened - a rename that rewrote a past finding would make the record say what the run never said. So the found half is not read here, and a file moved into it stops holding its names by that fact alone. Measured when the halves were made: four hundred and forty live names held by kept copies alone, and seven names in the findings belonging to functions already gone.";
  let folder = data_given_folder();
  let paths = await folder_read_recursive_paths_async(folder);
  return paths;
}
