import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_folder_blob_text(folder, blob) {
  "$plain folder";
  "$plain blob";
  "What one version of a file held, read back out of the history by git's own name for its contents.";
  "Named by the contents rather than by a commit and a path on purpose. The same contents are usually reached by many commits and sometimes by several paths, and asking this way reads them once and cannot be asked the wrong question - there is no version of this that needs telling which commit to look in.";
  "Read as text, which is what everything asking this wants. A file of bytes that are not text comes back as the text they decode to, so this is for asking questions about writing and not about weight - the weight of a version has its own reader.";
  arguments_assert(arguments, 2);
  let asked = ["cat-file", "blob", blob];
  let text = await git_folder_run(folder, asked);
  return text;
}
