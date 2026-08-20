import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function qa_gate_timings_path() {
  "Where how long each gate takes is kept, so the shares handed to the runs asked side by side can be made even";
  "Reading it, rewriting it and dealing by it are three separate functions, so the file name is spelled once here rather than once in each of them";
  let folder = findings_folder();
  let path = path_join([folder, "qa_gate_timings.json"]);
  return path;
}
