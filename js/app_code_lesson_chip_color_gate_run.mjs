import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_chip_color_readings } from "./app_code_lesson_chip_color_readings.mjs";
import { app_code_lesson_chip_color_baseline_path } from "./app_code_lesson_chip_color_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function app_code_lesson_chip_color_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: nothing about the categorical chip palette may change without saying so. Every colour is measured at each of the three jobs it does, and every pair of them at how far apart it looks to ordinary sight and to each of the three ways a cone can be missing; each reading is compared with what the same reading came to before.");
  ("IT HOLDS THE PALETTE STILL RATHER THAN HOLDING IT TO A STANDARD, WHICH IS THE WHOLE POINT AND NOT A WEAKNESS. Five things are known to be wrong with these colours. Every fix for every one of them is a judgment about colour - darken a colour somebody chose by looking, or recolour a screen, or drop a hue the course is built around - and the decision is deliberately waiting on somebody who has worked in colour, in accessibility, in visual design. A gate that failed on the faults would have to be either ignored or silenced, and a gate anybody has learned to ignore protects nothing at all.");
  ("So it decides nothing and refuses only movement. A reading the record does not hold fails, and a reading the record holds that is no longer produced fails too, so the palette cannot drift in either direction and a new fault cannot arrive under cover of the old ones. What it buys the wait is that the state the expert will be shown is the state that was measured, and not whatever it has quietly become since.");
  ("THE FIGURES ARE IN THE NAMES, WHICH IS WHAT LETS A RECORD OF NAMES WATCH A SET OF MEASUREMENTS. Each reading is a sentence ending in its own number, cut downwards to a fixed number of places, so a figure that moves past that place makes a sentence the record has never seen and leaves one of its own sentences unproduced. Both teeth then bite on a number, using nothing but the machinery every other ratchet here already had.");
  ("A reading that gets BETTER fails exactly as loudly as one that gets worse, and that is deliberate. An improvement to a palette this carefully revised is still somebody having changed a colour, and the one thing being protected is that nobody changes one without the change being visible.");
  let readings = app_code_lesson_chip_color_readings();
  let path = app_code_lesson_chip_color_baseline_path();
  let name_write = fn_name("app_code_lesson_chip_color_baseline_write");
  let result = await baseline_names_gate_generic(
    readings,
    path,
    "the chip palette measures differently than it did - read these against the ones that went away, decide whether the change is wanted, and bank it if it is",
    name_write,
  );
  return result;
}
