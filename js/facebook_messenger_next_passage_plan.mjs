import { fn_name } from "./fn_name.mjs";
import { facebook_messenger_thread_read } from "./facebook_messenger_thread_read.mjs";
import { facebook_messenger_next_passage_plan_text_generic } from "./facebook_messenger_next_passage_plan_text_generic.mjs";
import { messenger_replies_amen_or_none_is } from "./messenger_replies_amen_or_none_is.mjs";
export async function facebook_messenger_next_passage_plan(thread_url) {
  "$plain thread_url";
  ("What a daily ",
    fn_name("facebook_messenger_next_passage_send_amen_or_unanswered"),
    " run on the conversation at thread_url would send, without sending anything.");
  let read = await facebook_messenger_thread_read(thread_url);
  let r = await facebook_messenger_next_passage_plan_text_generic(
    read.text,
    messenger_replies_amen_or_none_is,
  );
  return r;
}
