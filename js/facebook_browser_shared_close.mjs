import { facebook_page_lock_take } from "./facebook_page_lock_take.mjs";
import { facebook_browser_shared_close_held } from "./facebook_browser_shared_close_held.mjs";
export async function facebook_browser_shared_close() {
  "Waits its turn at the facebook profile, then ends the browser left open in it, and answers whether one was open. Any later run starts a fresh one.";
  let lock = await facebook_page_lock_take();
  try {
    let closed = await facebook_browser_shared_close_held();
    let r = {
      closed,
    };
    return r;
  } finally {
    lock.kill();
  }
}
