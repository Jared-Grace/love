import { facebook_messenger_row_open_list } from "./facebook_messenger_row_open_list.mjs";
export async function facebook_messenger_row_open(page, id) {
  "Opens conversation number id by clicking its row in the chat list, after showing only unread chats and scrolling down at a person's pace until the row is there; when the unread list ends without it, it does the same in the whole list. Answers whether it was found and clicked.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ WHY A CLICK AND NOT THE ADDRESS: on 2026-11-07 an older encrypted conversation opened by its address alone showed only 'Facebook user' and a spinner for minutes, in Chrome and here alike; the same conversation clicked in the list loaded at once.";
  "★ UNREAD FIRST, because the whole list runs to thousands and the unread one to hundreds: about 60 steps reached its end, against 70 steps for the first 200 of the whole list.";
  "★ THEN THE WHOLE LIST, because reading a conversation marks it read: on 2026-11-08 a conversation saved for a reply was gone from the unread list by the time the reply was to be sent, 80 steps found nothing, and the reply could not go out. The whole list is newest first, so a conversation just read sits near its top.";
  let unread = await facebook_messenger_row_open_list(page, id, "Unread");
  if (unread) {
    return true;
  }
  let all = await facebook_messenger_row_open_list(page, id, "All");
  return all;
}
