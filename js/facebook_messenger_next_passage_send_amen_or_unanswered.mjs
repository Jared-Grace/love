import { facebook_messenger_next_passage_send_generic } from "./facebook_messenger_next_passage_send_generic.mjs";
import { messenger_replies_amen_or_none_is } from "./messenger_replies_amen_or_none_is.mjs";
import { next_passage_copied } from "./next_passage_copied.mjs";
export async function facebook_messenger_next_passage_send_amen_or_unanswered(
  thread_url,
) {
  "$plain thread_url";
  "Once a day: when nothing, or only Amen or praying hands, has been sent after your last message in the conversation at thread_url, sends the next passage its next-passage link names. A reply with words of its own sends nothing, so a person answers it.";
  let r = await facebook_messenger_next_passage_send_generic(
    thread_url,
    messenger_replies_amen_or_none_is,
    next_passage_copied,
  );
  return r;
}
