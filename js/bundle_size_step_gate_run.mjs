import { arguments_assert } from "./arguments_assert.mjs";
import { bundle_sizes_steps_measured } from "./bundle_sizes_steps_measured.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { bundle_sizes_baseline_path } from "./bundle_sizes_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function bundle_size_step_gate_run() {
  "QA gate: no client bundle grows by more than a bundle may in one step, so a whole dependency tree arriving fails loud in whichever app it arrives in.";
  "The sibling of the ceilings gate and the answer to the thing that one cannot do. A ceiling names a size, so it can only be set for a page whose size somebody is prepared to keep naming, and it has to be raised on every honest growth. This measures the step instead, which is the shape the ceilings file had already noticed three separate times in its own prose: a drift is exactly what an accidental import does NOT look like, because a tree arrives all at once.";
  "Passing rewrites the record, so a day of ordinary growth re-bases itself and nobody is asked about it. Failing does not, so a jump stays refused until somebody looks at it - and looking is the whole point, since only a person can tell a feature arriving from a tree arriving.";
  "The sizes written back are the ones that were just compared rather than a fresh reading, because peers build bundles while this runs. A bundle that changed in that gap is then measured from where it was seen, not from where nobody looked. That is why the reading hands the sizes back at all, and why this writes down what it was handed rather than asking again.";
  "It measures the dev build for the same reason the ceilings gate does: prod only changes on a deliberate promote, so measuring it would report history and pass green while dev grew.";
  arguments_assert(arguments, 0);
  let read = await bundle_sizes_steps_measured();
  let names = property_get(read, "names");
  let steps = property_get(read, "steps");
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
  let sizes = property_get(read, "sizes");
  let path = bundle_sizes_baseline_path();
  await baseline_known_write(sizes, path);
  let measured = property_get(read, "measured");
  let r = {
    measured,
  };
  return r;
}
