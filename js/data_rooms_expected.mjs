import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { data_found_folder } from "./data_found_folder.mjs";
import { path_base } from "./path_base.mjs";
export function data_rooms_expected() {
  "The two rooms the data folder is allowed to be made of, said as the last word of each one's own path.";
  "Two and not more, because the split is not a filing preference - it is what decides whether a name spelled in a file is a name a later run still depends on. The given half is read by the two commands that ask whether a function name is still spoken for, so a name there cannot be deleted and a rename has to rewrite the file spelling it. The found half is read by neither, so a record of what already happened goes on saying what the run actually said. Every file in this folder is one or the other of those, and a third room would be a claim that there is a third answer to that question.";
  "Taken from the two folders' own functions rather than written out again here, so a room that is ever moved or renamed is moved in one place and this goes on being true.";
  arguments_assert(arguments, 0);
  let given = data_given_folder();
  let found = data_found_folder();
  let given_room = path_base(given);
  let found_room = path_base(found);
  let expected = [given_room, found_room];
  return expected;
}
