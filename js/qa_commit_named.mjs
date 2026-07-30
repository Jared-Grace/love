import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function qa_commit_named() {
  "Every commit already judged, each answering which gates were red and which functions each of them named";
  "An empty record is written the first time rather than treated as a fault, because having judged nothing yet is the ordinary state of a thing that has just begun";
  let path = qa_commit_named_path();
  let named = await file_read_json_initialize(path, {});
  return named;
}
