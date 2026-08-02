import { permission_settings_local_unwatched } from "./permission_settings_local_unwatched.mjs";
import { permission_settings_local_baseline_path } from "./permission_settings_local_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function permission_settings_local_baseline_write() {
  "record the per-machine allow rules the shared list does not hold, so the gate can refuse the next one without refusing the ones already here";
  "the record only ever shrinks after this - a rule taken out of the local file and either dropped or named to the watched list leaves an entry behind, and the gate says so rather than letting the same rule come back under cover of being already known";
  let unwatched = await permission_settings_local_unwatched();
  let path = permission_settings_local_baseline_path();
  await baseline_known_growth_assert(
    unwatched,
    path,
    "these per-machine allow rules are not in the shared list and were not here before - name them to the shared list, or take them out of the local file, rather than recording them as known",
  );
  let r = await baseline_known_write(unwatched, path);
  return r;
}
