import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function facebook_page_lock_hold_minutes(minutes) {
  "Waits its turn for the facebook lock, prints held, then keeps it for the given minutes (at most 120) or until this process is stopped - so facebook work done by hand or in the human's own Chrome makes the timers queue behind it.";
  ("★ TIMERS QUEUE ON THIS SAME LOCK (through ",
    fn_name("facebook_page_launch"),
    "), so while it is held they wait instead of acting on facebook at the same moment.");
  ("★ CAPPED AT 120 MINUTES: a waiting timer gives up after three hours, and a forgotten hold must end by itself. Stopping the process frees the lock at once.");
  let count = Number(minutes);
  if (not(greater_than(count, 0) && less_than_equal(count, 120))) {
    throw new Error(
      "minutes must be more than 0 and at most 120, got " + minutes,
    );
  }
  let lock = await facebook_page_lock_take();
  console.log("held");
  let seconds = multiply(count, 60);
  await sleep_seconds(seconds);
  lock.kill();
  let r = {
    held_minutes: count,
  };
  return r;
}
