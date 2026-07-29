import { baseline_known_write } from "./baseline_known_write.mjs";
import { permission_grants_baseline_path } from "./permission_grants_baseline_path.mjs";
export async function permission_grants_baseline_file_write(known) {
  "put a list of known-failing standing grants on disk";
  "the two ways the baseline changes — rewritten wholesale from what fails now, and grown by one deliberately named grant — both end here, so the shape written to the file is decided in one place";
  let path = permission_grants_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
