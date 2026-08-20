import { arguments_assert } from "./arguments_assert.mjs";
import { data_found_folder } from "./data_found_folder.mjs";
import { path_join } from "./path_join.mjs";
export function findings_folder() {
  "Where what a check already found out is kept, in the found half of the data folder, so nothing sweeping what the present depends on mistakes a record of the past for one of them";
  "Not called history, though that is the everyday word for it, because this repo already says history when it means the one git keeps - the reading that asks whether a folder has its own. One word answering to two things is how a reader ends up sure of the wrong one. Findings is what the repo already calls what a check turned up, so the record of what checks turned up wears the same word.";
  "A record of the past spells names, and the two commands that ask whether a name is still spoken for read every file they are pointed at. So a function named once by a red gate could never be deleted again, and a rename would rewrite what a past run actually said. Measured the day this folder was made: sixty-nine commits recorded, two hundred and fifty-two live functions held undeletable by nothing but that record, and seven names in it belonging to functions already gone.";
  "It sat beside the data folder at first, and being a separate folder was the whole mechanism. It is inside the data folder now, and the mechanism is unchanged, because what kept it out of those sweeps was never where it sat - it is that the sweeps name the folder they read, and they name the given half. So this is one folder fewer at the top of the repo and exactly the same protection, which is the trade the move was made for.";
  arguments_assert(arguments, 0);
  let found = data_found_folder();
  let v = path_join([found, "findings"]);
  return v;
}
