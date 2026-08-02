import { number_moved_round } from "./number_moved_round.mjs";
import { math_min } from "./math_min.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_plant_npcs_target(index) {
  "The size a plant is aiming at, from how many plants have already been planted - six for the first and one more each time until it settles at thirteen.";
  "A ramp rather than a draw, because the thing being modelled is a worker who grows. Drawn independently every time, the fourth plant is as likely to be small as the first, and then nothing about the game gets bigger except the number at the top of the screen.";
  "Settling rather than climbing forever is what keeps the table of thirteen meaning something. A size that kept rising would pass it without anybody noticing it had been reached.";
  let s = g_generation_settings();
  let first = s.plant_npcs_first;
  let settle = s.plant_npcs_settle;
  let climb = s.plant_npcs_settle_plants;
  let along = divide(index, climb);
  let part = math_min(1, along);
  let risen = subtract(settle, first);
  let r = number_moved_round(first, risen, part);
  return r;
}
