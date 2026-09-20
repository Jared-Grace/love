import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color_readings } from "./app_code_highlight_color_readings.mjs";
import { app_code_highlight_color_baseline_path } from "./app_code_highlight_color_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_code_highlight_color_baseline_write() {
  arguments_assert(arguments, 0);
  ("write down what the pointing colours measure right now, so that the gate can tell afterwards whether anything about them has moved. For seeding it once, and for banking a change somebody has decided on.");
  ("IT DOES NOT REFUSE TO GROW, for the same reason its twin over the chip palette does not: this holds readings and not offences, and a fourth pointing colour honestly produces more of them - three for itself and four more for every pair it makes. Refusing that would refuse the very case the gate was built to notice.");
  ("SO THE TEETH ARE NOT HERE BUT IN WHO RUNS IT AND WHEN. Running this makes the gate green whatever the pointing colours now say, so it is not a repair and must never be reached for as one. What it buys is that the change cannot happen QUIETLY: the readings land in a commit as a plain diff of before and after, in sentences anybody can read.");
  let known = app_code_highlight_color_readings();
  let path = app_code_highlight_color_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
