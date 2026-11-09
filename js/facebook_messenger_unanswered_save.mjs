import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_list_rows } from "./facebook_messenger_list_rows.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function facebook_messenger_unanswered_save() {
  "Walks the whole chat list (All, not Unread) in the signed-in page profile and keeps, in the private folder, every chat whose last message is not yours, oldest first - read or not. Answers only counts, the oldest one's number and how long ago it was, and where the file is, never anyone's words.";
  "★ ALL, NOT UNREAD: on 2026-11-09 the Unread list ended in mid-June while the human knew of messages from May; a chat once opened leaves Unread whether or not it was answered.";
  "★ YOURS IS WHAT THE ROW SAYS IS YOURS: the list starts your own last message with 'You:' or 'You sent'.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let rows = null;
  try {
    await sleep_human_pace();
    rows = await facebook_messenger_list_rows(o.page, "All");
  } finally {
    await o.browser.close();
  }
  function mine_is(row) {
    function lambda(line) {
      let r2 = line.startsWith("You:") || line.startsWith("You sent");
      return r2;
    }
    let r = row.lines.some(lambda);
    return r;
  }
  function lambda2(row) {
    let b = mine_is(row);
    let r3 = not(b);
    return r3;
  }
  let unanswered = rows.filter(lambda2).reverse();
  let path = text_combine_multiple([
    fn_name("facebook_messenger_unanswered_save"),
    ".json",
  ]);
  let file = folder_private_path(path);
  await file_overwrite_json(file, {
    read_at: new Date().toISOString(),
    rows: rows.length,
    unanswered,
  });
  let oldest = null;
  if (greater_than(unanswered.length, 0)) {
    let first = unanswered[0];
    oldest = {
      id: first.id,
      ago: first.lines[subtract(first.lines.length, 1)],
    };
  }
  let r4 = {
    rows: rows.length,
    unanswered: unanswered.length,
    oldest,
    file,
  };
  return r4;
}
