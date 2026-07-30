import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_read_json_or_null } from "./file_read_json_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function qa_commit_named() {
  "Every commit already judged, each answering which gates were red and which functions each of them named. Read-only.";
  "An empty record where the file is not there yet, so the first asker writes it rather than failing on its absence.";
  let path = qa_commit_named_path();
  let read = await file_read_json_or_null(path);
  let missing = null_is(read);
  if (missing) {
    let empty = {};
    return empty;
  }
  return read;
}
