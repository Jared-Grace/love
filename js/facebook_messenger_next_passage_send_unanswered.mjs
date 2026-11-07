import { facebook_messenger_next_passage_send_generic } from "./facebook_messenger_next_passage_send_generic.mjs";
import { messenger_replies_none_is } from "./messenger_replies_none_is.mjs";
export async function facebook_messenger_next_passage_send_unanswered(
  thread_url,
) {
  "$plain thread_url";
  "Once a day: when nothing has been sent after your last message in the conversation at thread_url, sends the next passage its next-passage link names. Any reply at all sends nothing, so a person answers it.";
  "★ IT IS SAFE TO RUN AGAIN ONLY ONCE A DAY: an unanswered passage is again unanswered the next run, so each run sends one more - that is the point, and why the timer is daily.";
  let r = await facebook_messenger_next_passage_send_generic(
    thread_url,
    messenger_replies_none_is,
  );
  return r;
}
