import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
export async function facebook_messenger_last_label_compare(id) {
  "$plain id";
  "Opens messenger conversation number id and answers the label of the last message on the page beside the last message kept in its private file, with where the two first differ. Sends nothing. It is how a send that refused with they wrote again is checked against what the page really says.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let file = messenger_since_mine_file(id);
  let saved = await file_read_json(file);
  let last = saved.messages[saved.messages.length - 1];
  let kept = last ? last.text : null;
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, id);
    if (!clicked) {
      let r = {
        id,
        clicked,
        label: null,
        kept,
        contains: false,
        differ_at: null,
      };
      return r;
    }
    await sleep_human_pace();
    await sleep_human_pace();
    let label = await page.evaluate(
      "(function(){var all=Array.from(document.querySelectorAll('[role=main] [aria-label^=\"At \"]'));var e=all[all.length-1];return e?e.getAttribute('aria-label'):null})()",
    );
    let contains = label !== null && kept !== null && label.includes(kept);
    let differ_at = null;
    if (label !== null && kept !== null && !contains) {
      let colon = label.indexOf(": ");
      let words = label.slice(colon + 2);
      let i = 0;
      while (i < words.length && i < kept.length && words[i] === kept[i]) {
        i = i + 1;
      }
      let v = words.slice(i, i + 20);
      let v2 = kept.slice(i, i + 20);
      differ_at = {
        index: i,
        page: JSON.stringify(v),
        kept: JSON.stringify(v2),
      };
    }
    let r2 = {
      id,
      clicked,
      label,
      kept,
      contains,
      differ_at,
    };
    return r2;
  } finally {
    await o.browser.close();
  }
}
