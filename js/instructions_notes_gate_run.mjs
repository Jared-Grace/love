import { instructions_notes_unreached } from "./instructions_notes_unreached.mjs";
import { instructions_paths } from "./instructions_paths.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function instructions_notes_gate_run() {
  "Fails when a note exists that the instructions never point at, and names it.";
  "It guards the cost of splitting the instructions across files. Every other check on them follows the links to gather their text, so an unlinked note is read by nothing - and the check that refuses a stale name would pass on a file full of them, having never opened it. A gate that goes quiet is the failure worth building a gate against.";
  "The count of files actually reached is printed even when nothing is wrong, because a reader cannot otherwise tell a clean answer from a search that found no notes at all.";
  let reached = await instructions_paths();
  let count = list_size(reached);
  console.log("instruction files reached: " + count);
  "The unreached notes are thrown as a list rather than written into a sentence, because a later reader has to be able to tell WHICH notes without reading English. A gate whose complaint names nobody a reader can pick out cannot be shown to be about somewhere else, and so holds every app in the repo out of a deployment - twelve gates were doing exactly that in one recorded run, none of them silent.";
  let unreached = await instructions_notes_unreached();
  list_empty_is_assert_json(unreached, {
    hint:
      "note(s) in the notes folder are pointed at by nothing, so every check that reads the instructions is blind to them - link them from the instructions file or move them out of that folder",
    unreached,
  });
  let r = {
    reached: count,
    unreached: 0,
  };
  return r;
}
