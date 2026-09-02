import { arguments_assert } from "./arguments_assert.mjs";
import { bundle_sizes_now } from "./bundle_sizes_now.mjs";
import { bundle_sizes_baseline_path } from "./bundle_sizes_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { bundle_sizes_steps_over } from "./bundle_sizes_steps_over.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bundle_sizes_steps_report() {
  "What the one-step bundle growth gate would complain about, asked without changing the answer.";
  "The gate itself rewrites the record whenever it passes, which is right for a gate and wrong for a question: asking it whether a bundle jumped re-bases the very numbers the next ask would have compared against. This reads the same two sides and says the same thing, and writes nothing.";
  "So it is the one to reach for before a judging or a deploy, and the one to reach for after a build, to see what arrived before the gate quietly accepts it.";
  arguments_assert(arguments, 0);
  let sizes_now = await bundle_sizes_now();
  let baseline_path = bundle_sizes_baseline_path();
  let recorded = await baseline_known_read(baseline_path);
  let steps = bundle_sizes_steps_over(sizes_now, recorded);
  let names = list_map_property(steps, "name");
  let measured = sizes_now.length;
  let r = {
    measured,
    names,
    steps,
  };
  return r;
}
