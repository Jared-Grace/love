import { permission_grants_baseline_path } from "./permission_grants_baseline_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function permission_grants_baseline_file_write(known) {
  "put a list of known-failing standing grants on disk";
  "the two ways the baseline changes — rewritten wholesale from what fails now, and grown by one deliberately named grant — both end here, so the shape written to the file is decided in one place";
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  let path = permission_grants_baseline_path();
  await file_overwrite(path, json);
  let r = known.length;
  return r;
}
