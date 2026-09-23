import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_chip_color_readings } from "./app_code_lesson_chip_color_readings.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_lesson_chip_color_baseline_path } from "./app_code_lesson_chip_color_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function app_code_lesson_chip_color_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: nothing about the categorical chip palette may change without saying so. Every colour is measured at each of the three jobs it does, and every pair of them at how far apart it looks to ordinary sight and to each of the three ways a cone can be missing; each reading is compared with what the same reading came to before.");
  ("IT HOLDS THE PALETTE STILL RATHER THAN HOLDING IT TO A STANDARD, WHICH IS THE WHOLE POINT AND NOT A WEAKNESS. Five things are known to be wrong with these colours. Every fix for every one of them is a judgment about colour - darken a colour somebody chose by looking, or recolour a screen, or drop a hue the course is built around - and the decision is deliberately waiting on somebody who has worked in colour, in accessibility, in visual design. A gate that failed on the faults would have to be either ignored or silenced, and a gate anybody has learned to ignore protects nothing at all.");
  ("So it decides nothing and refuses only movement. A reading the record does not hold fails, and a reading the record holds that is no longer produced fails too, so the palette cannot drift in either direction and a new fault cannot arrive under cover of the old ones. What it buys the wait is that the state the expert will be shown is the state that was measured, and not whatever it has quietly become since.");
  ("THE FIGURES ARE IN THE NAMES, WHICH IS WHAT LETS A RECORD OF NAMES WATCH A SET OF MEASUREMENTS. Each reading is a sentence ending in its own number, cut downwards to a fixed number of places, so a figure that moves past that place makes a sentence the record has never seen and leaves one of its own sentences unproduced. Both teeth then bite on a number, using nothing but the machinery every other ratchet here already had.");
  ("A reading that gets BETTER fails exactly as loudly as one that gets worse, and that is deliberate. An improvement to a palette this carefully revised is still somebody having changed a colour, and the one thing being protected is that nobody changes one without the change being visible.");
  ("HOW MANY READINGS WERE TAKEN GOES OUT WITH THE VERDICT, counted off the readings themselves rather than worked back from the offenders - which on a clean run are none, so a length read off them would say nothing was checked on exactly the runs where the question matters. Green here means four colours were measured at three jobs each and six pairs at four kinds of sight; if that number ever falls, the sweep has been pointed somewhere else and the verdict is green because it looked at nothing.");
  let readings = app_code_lesson_chip_color_readings();
  let taken = list_size(readings);
  let path = app_code_lesson_chip_color_baseline_path();
  let told = await baseline_names_gate_generic(
    readings,
    path,
    "the chip palette measures differently than it did - read these against the ones that went away, decide whether the change is wanted, and bank it if it is",
    fn_name("app_code_lesson_chip_color_baseline_write"),
  );
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let result = {
    taken,
    added,
    stale,
  };
  return result;
}
