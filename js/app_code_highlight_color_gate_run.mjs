import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color_readings } from "./app_code_highlight_color_readings.mjs";
import { app_code_highlight_color_baseline_path } from "./app_code_highlight_color_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function app_code_highlight_color_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: nothing about the pointing colours may change without saying so. Every colour is measured at each of the three jobs it does, and every pair of them at how far apart it looks to ordinary sight and to each of the three ways a cone can be missing; each reading is compared with what the same reading came to before.");
  ("IT HOLDS THE SET STILL RATHER THAN HOLDING IT TO A STANDARD, the same way its twin over the chip palette does, and for the same reason: the colour decisions here are waiting on somebody who has worked in colour, and a gate that failed on a known fault would have to be ignored or silenced. It decides nothing and refuses only movement - a reading the record does not hold fails, and a reading the record holds that is no longer produced fails too.");
  ("IT EXISTS BECAUSE THIS SET IS THE ONE LIKELY TO BE ASKED TO MOVE. Every reading here clears its floor today, so on the faults alone this palette would need no watching at all. What it needs watching for is the proposal standing over both palettes: give each hue a dark tone and a light tone, and these become the light half. A set about to be revised, with nothing holding it still, is exactly the set whose before-picture goes missing.");
  ("THE FIGURES ARE IN THE NAMES, which is what lets a record of names watch a set of measurements. Each reading is a sentence ending in its own number, cut downwards to a fixed number of places, so a figure that moves past that place makes a sentence the record has never seen and leaves one of its own sentences unproduced.");
  ("A reading that gets BETTER fails exactly as loudly as one that gets worse. An improvement is still somebody having changed a colour, and the one thing being protected is that nobody changes one without the change being visible.");
  let readings = app_code_highlight_color_readings();
  let path = app_code_highlight_color_baseline_path();
  let name_write = fn_name("app_code_highlight_color_baseline_write");
  let result = await baseline_names_gate_generic(
    readings,
    path,
    "the pointing colours measure differently than they did - read these against the ones that went away, decide whether the change is wanted, and bank it if it is",
    name_write,
  );
  return result;
}
