import { not } from "./not.mjs";
import { file_exists } from "./file_exists.mjs";
import { daemon_unit_path } from "./daemon_unit_path.mjs";
export async function daemon_unit_text_current(fn_name) {
  ("what is on disk right now, or null when this daemon has never been installed; the caller compares it to decide whether anything needs restarting");
  let path = daemon_unit_path(fn_name);
  let exists = await file_exists(path);
  let missing = not(exists);
  if (missing) {
    return null;
  }
  ("read past the cached reader: this file lives outside the repo and is edited by us and by systemd's own tooling, so only the disk is the truth");
  let fs = await import("fs");
  let contents = await fs.promises.readFile(path, "utf-8");
  return contents;
}
