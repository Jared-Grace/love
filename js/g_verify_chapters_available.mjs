import { local_function_path_json } from "./local_function_path_json.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
export async function g_verify_chapters_available() {
  let sample = local_function_path_json("_", g_sermon_write);
  let folder = sample.slice(0, sample.lastIndexOf("/"));
  let files;
  try {
    files = await folder_read_files(folder);
  } catch (missing) {
    return { chapters: [] };
  }
  let chapters = files
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.slice(0, -5))
    .sort();
  return { chapters };
}
