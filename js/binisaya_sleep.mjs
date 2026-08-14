import { binisaya_crawl_delay_seconds } from "./binisaya_crawl_delay_seconds.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function binisaya_sleep() {
  "Wait the time binisaya.com asks to be waited between two askings.";
  "The wait comes before the asking rather than after it, so that a run stopped part way through has already paid for the asking it is about to make rather than owing for one it made.";
  let seconds = binisaya_crawl_delay_seconds();
  await sleep_seconds(seconds);
}
