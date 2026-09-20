import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_chip_color_readings } from "./app_code_lesson_chip_color_readings.mjs";
import { app_code_lesson_chip_color_baseline_path } from "./app_code_lesson_chip_color_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_code_lesson_chip_color_baseline_write() {
  arguments_assert(arguments, 0);
  ("write down what the categorical chip palette measures right now, so that the gate can tell afterwards whether anything about it has moved. For seeding it once, and for banking a change to the palette that somebody has decided on.");
  ("IT DOES NOT REFUSE TO GROW, AND EVERY OTHER RECORD OF THIS SHAPE DOES. The others hold offences, where growing is the one thing the gate exists to stop; this one holds readings, and a fifth colour added to the palette honestly produces more of them - three for itself and four more for every pair it makes. Refusing that would refuse the very case the gate was built to notice.");
  ("WHICH MEANS THE TEETH HERE ARE NOT IN THIS FUNCTION BUT IN WHO RUNS IT AND WHEN. Running this makes the gate green whatever the palette now says, so it is not a repair and must never be reached for as one. What it buys is that the change cannot happen QUIETLY: the readings it writes land in a commit as a plain diff of before and after, in sentences anybody can read, so a colour that got harder to read or a pair that collapsed is stated in the record rather than left to be noticed on a screen months later.");
  let known = app_code_lesson_chip_color_readings();
  let path = app_code_lesson_chip_color_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
