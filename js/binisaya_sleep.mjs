import { add } from "./add.mjs";
import { binisaya_crawl_delay_seconds } from "./binisaya_crawl_delay_seconds.mjs";
import { binisaya_crawl_delay_spread_seconds } from "./binisaya_crawl_delay_spread_seconds.mjs";
import { integer_random } from "./integer_random.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function binisaya_sleep() {
  "Wait the time binisaya.com asks to be waited between two askings, give or take a little more.";
  "The wait comes before the asking rather than after it, so that a run stopped part way through has already paid for the asking it is about to make rather than owing for one it made.";
  "The little more is only ever more. The stated rate is the least this may wait and never the middle of what it waits, so the spread is added on top of it rather than laid around it.";
  let least = binisaya_crawl_delay_seconds();
  let spread = binisaya_crawl_delay_spread_seconds();
  let most = add(least, spread);
  let seconds = integer_random(least, most);
  await sleep_seconds(seconds);
}
