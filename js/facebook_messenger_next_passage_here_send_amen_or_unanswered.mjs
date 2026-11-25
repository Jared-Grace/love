import { facebook_messenger_next_passage_send_generic } from "./facebook_messenger_next_passage_send_generic.mjs";
import { messenger_replies_amen_or_none_is } from "./messenger_replies_amen_or_none_is.mjs";
import { next_passage_here_copied } from "./next_passage_here_copied.mjs";
export async function facebook_messenger_next_passage_here_send_amen_or_unanswered(
  thread_url,
) {
  "$plain thread_url";
  "Once a day: when nothing, or only Amen or praying hands, has been sent after your last message in the conversation at thread_url, sends the passage after the one its last passage link names, with a link to that new passage itself. For a conversation whose links point at the passage they came with rather than at the next one. A reply with words of its own sends nothing, so a person answers it.";
  let r = await facebook_messenger_next_passage_send_generic(
    thread_url,
    messenger_replies_amen_or_none_is,
    next_passage_here_copied,
  );
  return r;
}
