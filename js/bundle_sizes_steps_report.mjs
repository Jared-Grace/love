import { arguments_assert } from "./arguments_assert.mjs";
import { bundle_sizes_steps_measured } from "./bundle_sizes_steps_measured.mjs";
import { property_get } from "./property_get.mjs";
export async function bundle_sizes_steps_report() {
  "What the one-step bundle growth gate would complain about, asked without changing the answer.";
  "The gate itself rewrites the record whenever it passes, which is right for a gate and wrong for a question: asking it whether a bundle jumped re-bases the very numbers the next ask would have compared against. This reads the same two sides and says the same thing, and writes nothing.";
  "So it is the one to reach for before a judging or a deploy, and the one to reach for after a build, to see what arrived before the gate quietly accepts it.";
  "The sizes are read by the same named reading the gate uses, so the two cannot come to disagree about what they are comparing. What is left here is the choosing of what to say: the sizes themselves are the gate's business and not a reader's, so they are not passed on.";
  arguments_assert(arguments, 0);
  let read = await bundle_sizes_steps_measured();
  let measured = property_get(read, "measured");
  let names = property_get(read, "names");
  let steps = property_get(read, "steps");
  let r = {
    measured,
    names,
    steps,
  };
  return r;
}
