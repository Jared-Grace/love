import { math_min } from "./math_min.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function messenger_messages_merge(older, newer) {
  "$plain older, newer";
  "Joins two readings of one conversation - older, read further up, and newer, read before it - into one list, oldest first, counting the messages both hold only once. Answers the list and how many messages the two shared; a share of none means a stretch between them may be missing.";
  "★ WHY: the page drops the newest messages as it is scrolled up, so the reading at the top no longer holds the bottom. Taking the last reading alone lost every message after your old one (2026-11-14: twelve messages read as none).";
  "★ THE SHARE IS THE LONGEST RUN that ends older and begins newer, compared by sender and words.";
  function same(a, b) {
    let r3 = equal(a.from, b.from) && equal(a.text, b.text);
    return r3;
  }
  let most = math_min(older.length, newer.length);
  let overlap = 0;
  for (let k = most; greater_than(k, 0); k--) {
    let start = subtract(older.length, k);
    let all = true;
    for (let i = 0; less_than(i, k); i++) {
      let b2 = same(older[start + i], newer[i]);
      if (not(b2)) {
        all = false;
        break;
      }
    }
    if (all) {
      overlap = k;
      break;
    }
  }
  let v = newer.slice(overlap);
  let r = {
    messages: older.concat(v),
    overlap,
  };
  return r;
}
