import { path_join } from "./path_join.mjs";
import { g_sermon_loop_folder } from "./g_sermon_loop_folder.mjs";
export function g_verify_active_chapters_path() {
  "Absolute path of chapters.txt - the books whose chapters are being written right now, one code per line. Two callers reach for this file, the queue-advance step that promotes a finished book out of it and the loop check that reads what is in flight, and each of them used to spell the path into its own constant under a different name; one function so those two cannot drift apart or disagree about what to call it.";
  let folder = g_sermon_loop_folder();
  let path = path_join([folder, "chapters.txt"]);
  return path;
}
