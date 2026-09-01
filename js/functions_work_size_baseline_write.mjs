import { functions_work_size_baseline_path } from "./functions_work_size_baseline_path.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { baseline_known_shrink_write } from "./baseline_known_shrink_write.mjs";
export async function functions_work_size_baseline_write() {
  "record which functions already hold more lines of work than the ceiling allows, so the gate can refuse the next one without refusing the ones already here";
  "run this after cutting a function down, to shrink the record. it cannot make a newly grown one green, because the only thing it writes is a subset of what the record already held - so it says which names have started offending rather than refusing to drop anything while they do";
  let path = functions_work_size_baseline_path();
  let named = await functions_work_oversize_names();
  let r = await baseline_known_shrink_write(named, path);
  return r;
}
