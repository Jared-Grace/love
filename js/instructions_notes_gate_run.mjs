import { instructions_notes_unreached } from "./instructions_notes_unreached.mjs";
import { instructions_paths } from "./instructions_paths.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export async function instructions_notes_gate_run() {
  "Fails when a note exists that the instructions never point at, and names it.";
  "It guards the cost of splitting the instructions across files. Every other check on them follows the links to gather their text, so an unlinked note is read by nothing - and the check that refuses a stale name would pass on a file full of them, having never opened it. A gate that goes quiet is the failure worth building a gate against.";
  "The count of files actually reached is printed even when nothing is wrong, because a reader cannot otherwise tell a clean answer from a search that found no notes at all.";
  let reached = await instructions_paths();
  let count = list_size(reached);
  console.log("instruction files reached: " + count);
  let unreached = await instructions_notes_unreached();
  let missing = list_size(unreached);
  let any = greater_than(missing, 0);
  if (any) {
    let named = list_join_comma(unreached);
    let message = text_combine_multiple([
      "instructions notes gate: ",
      missing,
      " note(s) in the notes folder are pointed at by nothing, so every check that reads the instructions is blind to them - link them from the instructions file or move them out of that folder: ",
      named,
    ]);
    throw new Error(message);
  }
  let r = {
    reached: count,
    unreached: 0,
  };
  return r;
}
