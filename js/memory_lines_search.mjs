import { arguments_assert } from "./arguments_assert.mjs";
import { memory_folder_realpath } from "./memory_folder_realpath.mjs";
import { qa_tree_names_skipped } from "./qa_tree_names_skipped.mjs";
import { folder_lines_search } from "./folder_lines_search.mjs";
export async function memory_lines_search(s) {
  "Every line in the memory notes that holds this word, each one given back with the file it came from and the place it sits at";
  "The notes are the second body of writing everybody here searches, and until now the only way to search them was to name their folder at the shell. Measured over a fortnight of what the sessions actually ran, searching the notes by hand was one of the commonest shapes at the shell there is, and every one of those ended in a pipe because the answer came back as printed lines rather than as records.";
  "Filling the folder in is what makes this safe to grant, and the reason is the same one that made the repo-wide search worth its own name. A search that receives a folder receives a path, and an approval covers every argument the function will ever be handed, so approving one would approve a reader pointed anywhere on the disk. This takes a word and nothing else, and the only place it can ever look is the notes.";
  "The notes are addressed by the spelling with the link already followed, because the other spelling reaches into the folder the editor keeps its own settings in and is refused there by a guard no approval can lift. That is settled once, where the folder is named, rather than here.";
  "What a search does not want is borrowed from the frozen copy rather than written again. The notes are their own history, and a word found in the history is a word that used to be somewhere - which is the same reason that folder is left out of every other search here.";
  arguments_assert(arguments, 1);
  let path_folder = memory_folder_realpath();
  let folders_skipped = qa_tree_names_skipped();
  let found = await folder_lines_search(path_folder, s, folders_skipped);
  return found;
}
