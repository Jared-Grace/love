import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
export async function folder_history_is(folder) {
  "Whether this folder keeps its own history";
  "Looked for on disk rather than asked of git and read off the refusal. The refusal is worded differently depending on where the folder sits - a copy under the shared-memory filesystem is told about a filesystem boundary, an ordinary folder about parent directories - so anything matching one wording lets the other straight through, and the crash such a guard exists to prevent happens anyway. Measured: it did";
  "The question is asked because a frozen copy of this folder is deliberately made without the history, and everything that reads the history has to answer something sensible when asked from inside one rather than take the run down";
  let history = path_join([folder, ".git"]);
  let kept = await file_exists(history);
  return kept;
}
