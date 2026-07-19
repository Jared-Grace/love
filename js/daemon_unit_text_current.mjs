import { file_exists } from "./file_exists.mjs";
import { daemon_unit_path } from "./daemon_unit_path.mjs";
export async function daemon_unit_text_current(fn_name) {
  ("what is on disk right now, or null when this daemon has never been installed; the caller compares it to decide whether anything needs restarting");
  let path = daemon_unit_path(fn_name);
  let exists = await file_exists(path);
  if (!exists) {
    return null;
  }
  let fs = await import("fs");
  let contents = await fs.promises.readFile(path, "utf-8");
  return contents;
}
