import { text_includes } from "./text_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function qa_gate_said_history_blind_is(said) {
  "$plain said";
  arguments_assert(arguments, 1);
  ("Whether what a gate complained about is git saying there is no repository here at all.");
  ("Asked of a gate that went red inside the frozen copy, this is conclusive rather than suggestive. The copy is made without the history on purpose, so a gate in there reaching git finds no repository, every run, on every commit, for as long as it sits in that half. Its question is about this machine and this folder and it is being asked of a copy of the files - which is a gate in the wrong list, not a gate that is broken.");
  ("The words are git's own and have been for its whole life, which is why matching them is safe. What is matched is the complaint a gate handed back, so a gate that finds a real fault and says so in its own words cannot be mistaken for this.");
  let blind = text_includes(said, "not a git repository");
  return blind;
}
