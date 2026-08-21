import { baseline_known_write } from "./baseline_known_write.mjs";
import { bundle_sizes_baseline_path } from "./bundle_sizes_baseline_path.mjs";
import { bundle_sizes_now } from "./bundle_sizes_now.mjs";
export async function bundle_sizes_baseline_write() {
  "Records every client bundle at the size it is now, so the next step is measured from here.";
  "For seeding the record once, and for saying yes to a jump the gate stopped: read what arrived, and if it belongs there, run this and it becomes the new place to grow from. Saying yes is meant to be one command and a decision, not an edit.";
  "The gate does this for itself whenever it passes, so nobody has to run it after an ordinary day's growth.";
  let sizes = await bundle_sizes_now();
  let path = bundle_sizes_baseline_path();
  let written = await baseline_known_write(sizes, path);
  return written;
}
