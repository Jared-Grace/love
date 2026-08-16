import { memory_folder } from "./memory_folder.mjs";
import { memory_folder_realpath } from "./memory_folder_realpath.mjs";
export function memory_folder_spellings() {
  "Every way the memory folder can be written down - the one that goes through the link inside the assistant's own settings, and the one with the link already followed.";
  "Both, because the two reach the same files and either can turn up in a command somebody typed. Anything deciding whether a command is about the notes has to recognise it whichever way it was spelled, and a decider that knew only one would let the other straight past while looking as though it had checked.";
  "Which of the two to write when writing is a different question, settled where each is named: the followed one, because the other lands inside the folder the assistant keeps its own settings in and is refused there by a guard no approval can lift.";
  let linked = memory_folder();
  let followed = memory_folder_realpath();
  let spellings = [linked, followed];
  return spellings;
}
