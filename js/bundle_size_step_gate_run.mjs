import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { bundle_sizes_baseline_path } from "./bundle_sizes_baseline_path.mjs";
import { bundle_sizes_now } from "./bundle_sizes_now.mjs";
import { bundle_sizes_steps_over } from "./bundle_sizes_steps_over.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bundle_size_step_gate_run() {
  "QA gate: no client bundle grows by more than a bundle may in one step, so a whole dependency tree arriving fails loud in whichever app it arrives in.";
  "The sibling of the ceilings gate and the answer to the thing that one cannot do. A ceiling names a size, so it can only be set for a page whose size somebody is prepared to keep naming, and it has to be raised on every honest growth. This measures the step instead, which is the shape the ceilings file had already noticed three separate times in its own prose: a drift is exactly what an accidental import does NOT look like, because a tree arrives all at once.";
  "Passing rewrites the record, so a day of ordinary growth re-bases itself and nobody is asked about it. Failing does not, so a jump stays refused until somebody looks at it - and looking is the whole point, since only a person can tell a feature arriving from a tree arriving.";
  "The sizes written back are the ones that were just compared rather than a fresh reading, because peers build bundles while this runs. A bundle that changed in that gap is then measured from where it was seen, not from where nobody looked.";
  "It measures the dev build for the same reason the ceilings gate does: prod only changes on a deliberate promote, so measuring it would report history and pass green while dev grew.";
  let now = await bundle_sizes_now();
  let path = bundle_sizes_baseline_path();
  let recorded = await baseline_known_read(path);
  let steps = bundle_sizes_steps_over(now, recorded);
  let names = list_map_property(steps, "name");
  let accept = fn_name("bundle_sizes_baseline_write");
  let hint = text_combine_multiple([
    "these bundles grew by more than a bundle grows in one step - read what arrived in them, and if it belongs there run ",
    accept,
    " to grow from here instead",
  ]);
  list_empty_is_assert_json(names, {
    hint,
    steps,
  });
  await baseline_known_write(now, path);
  let measured = now.length;
  let r = {
    measured,
  };
  return r;
}
