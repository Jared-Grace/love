import { arguments_assert } from "./arguments_assert.mjs";
import { bundle_sizes_now } from "./bundle_sizes_now.mjs";
import { bundle_sizes_baseline_path } from "./bundle_sizes_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { bundle_sizes_steps_over } from "./bundle_sizes_steps_over.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bundle_sizes_steps_measured() {
  "the size of every client bundle as it stands right now, which of them grew by more than a bundle grows in one step, and the names of those - read in one go and written nowhere";
  "The gate about one-step growth and the question that asks the gate what it would say were both spelling this out, line for line. What actually separates them is what happens AFTERWARDS: the gate writes the sizes back so tomorrow is measured from today, and the question writes nothing so that asking it changes no answer. So the reading is the shared part and the writing is not, and only the reading belongs here.";
  "The sizes themselves are handed back beside the steps, and not only the steps, because whoever writes them down has to write down THESE. Peers build bundles while this runs, so a second reading taken a moment later would record a size that nobody ever compared anything against.";
  arguments_assert(arguments, 0);
  let sizes = await bundle_sizes_now();
  let path = bundle_sizes_baseline_path();
  let recorded = await baseline_known_read(path);
  let steps = bundle_sizes_steps_over(sizes, recorded);
  let names = list_map_property(steps, "name");
  let measured = sizes.length;
  let r = {
    sizes,
    steps,
    names,
    measured,
  };
  return r;
}
