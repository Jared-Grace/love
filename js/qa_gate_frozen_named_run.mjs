import { qa_gate_frozen_folder_run } from "./qa_gate_frozen_folder_run.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_frozen_ensure } from "./qa_gate_frozen_ensure.mjs";
import { property_get } from "./property_get.mjs";
export async function qa_gate_frozen_named_run(gate_name) {
  "$plain gate_name";
  "Runs ONE gate by name inside the frozen copy of this folder, the same copy the whole judging stands in, and hands back what it said.";
  "IT EXISTS BECAUSE A GATE THAT PASSES HERE CAN STILL FAIL THERE, and the whole judging is the slowest possible way to find that out. The copy is a different place to stand: it holds only what is committed, it is read-only, and a function that looks its own folder up finds the copy rather than the repo. A gate that reaches for anything outside the files - a cache, a lock, a sibling folder - is where those differ, and reasoning about whether it would reach is not the same as watching it reach.";
  "THE COPY IS MADE THE SAME WAY THE JUDGING MAKES IT and never a second way, so what is watched here is the place the judging would put the gate and not a lookalike built beside it.";
  "The run is asked for as a list of words rather than as a line of text, so nothing carried in the name can turn into a second word, and the program it runs is spelled here rather than taken from the caller.";
  "Nothing is caught. A gate that complains complains, because a complaint is the answer this was asked for.";
  arguments_assert(arguments, 1);
  let frozen = await qa_gate_frozen_ensure();
  let folder = property_get(frozen, "folder");
  let commit = property_get(frozen, "commit");
  let said = await qa_gate_frozen_folder_run(folder, gate_name);
  let r = {
    folder,
    commit,
    said,
  };
  return r;
}
