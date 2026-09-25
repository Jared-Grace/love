import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_paths_texts_blobs_kept_callback } from "./git_history_paths_texts_blobs_kept_callback.mjs";
export function git_history_paths_texts_callback(paths) {
  arguments_assert(arguments, 1);
  ("The instructions a history rewrite reads to take words out of these named files only, and to leave every other file in the repository exactly as it found it.");
  ("This is the case where every version of a named file is guilty, which is the ordinary one: a word that should never have been written anywhere in these files comes out of all of them. Its neighbour is the same instructions with a list of the versions to hand back untouched, for the case where one version's copy of the word turns out to be innocent, and the whole body lives there rather than here because two copies of a rewrite's instructions would be two chances to fix one and not the other.");
  ("Keeping nothing is spelled as an empty list rather than left out. A list that names no versions to keep is not a missing argument or a refused one - it is exactly and only the statement that there are no exceptions, which is what this name means.");
  let text = git_history_paths_texts_blobs_kept_callback(paths, []);
  return text;
}
