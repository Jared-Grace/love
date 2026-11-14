import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_row_open } from "./facebook_messenger_row_open.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function facebook_messenger_tail_save(url) {
  "$plain url";
  "Opens one messenger conversation at url in the signed-in page profile and keeps the last lines the page shows, whatever they are - calls, photos and notices included, not only messages with words - in a private file named by the conversation's number. It reads; it never sends. It answers only how many lines and where the file is, never the words.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ WHY: the since-mine reader keeps only lines that say 'Message sent ... by', so a chat marked unread whose newest item is a call or a notice reads as nothing new. This shows what the newest item really is.";
  let id = url.match(/\/t\/(\d+)/)[1];
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  let page = o.page;
  try {
    await sleep_human_pace();
    let clicked = await facebook_messenger_row_open(page, id);
    if (!clicked) {
      let r2 = {
        url,
        clicked: false,
      };
      return r2;
    }
    await sleep_human_pace();
    let text = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
    );
    let lines = text.split("\n").slice(-80);
    let file = folder_private_path("messenger_tail/" + id + ".json");
    await file_overwrite_json(file, {
      url,
      read_at: new Date().toISOString(),
      lines,
    });
    let r = {
      url,
      clicked: true,
      file,
      count: lines.length,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
