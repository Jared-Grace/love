import { integer_random } from "./integer_random.mjs";
import { sleep } from "./sleep.mjs";
export async function sleep_human_pace() {
  "Waits a few seconds, a different number each time, between two steps on a site that watches for robots - so a run moves like a person reading, never at a machine's even beat.";
  let ms = integer_random(2000, 5000);
  await sleep(ms);
}
