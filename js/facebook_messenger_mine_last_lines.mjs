import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
import { facebook_messenger_scroll_up_until } from "./facebook_messenger_scroll_up_until.mjs";
export async function facebook_messenger_mine_last_lines(thread_id) {
  "$plain thread_id";
  "Opens messenger conversation number thread_id, scrolls to its very top, and answers the last line of every message you sent there, oldest first - where a passage's onward link, and so its languages, would sit.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ YOURS ONLY: what the other person wrote is never answered, only the ends of your own messages.";
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, thread_id);
    if (not(clicked)) {
      let r = {
        thread_id,
        found: false,
        lines: [],
      };
      return r;
    }
    await sleep_human_pace();
    function lambda() {
      return false;
    }
    let read = await facebook_messenger_scroll_up_until(page, lambda);
    function lambda2(m) {
      let eq = equal(m.from, "You");
      return eq;
    }
    function lambda5(m) {
      function lambda3(l) {
        let r2 = l.trim();
        return r2;
      }
      function lambda4(l) {
        let g = greater_than(l.length, 0);
        return g;
      }
      let parts = m.text.split("\n").map(lambda3).filter(lambda4);
      let r3 = parts[subtract(parts.length, 1)] || "";
      return r3;
    }
    let lines = read.messages.filter(lambda2).map(lambda5);
    let r4 = {
      thread_id,
      found: true,
      top: read.top,
      mine: lines.length,
      lines,
    };
    return r4;
  } finally {
    await o.browser.close();
  }
}
