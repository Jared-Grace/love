import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_messenger_list_ids } from "./facebook_messenger_list_ids.mjs";
export async function facebook_messenger_unread_ids() {
  "Opens messenger in the signed-in page profile and answers the conversation number of every unread chat, oldest first, so the first is the one waiting longest. It reads the list only; no chat is opened, so none is marked read.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let o = await facebook_page_open("https://www.facebook.com/messages/");
  try {
    await sleep_human_pace();
    let ids = await facebook_messenger_list_ids(o.page, "Unread");
    let r = ids.reverse();
    return r;
  } finally {
    await o.browser.close();
  }
}
