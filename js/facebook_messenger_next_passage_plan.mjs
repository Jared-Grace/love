import { facebook_messenger_thread_read } from "./facebook_messenger_thread_read.mjs";
import { facebook_messenger_next_passage_plan_text } from "./facebook_messenger_next_passage_plan_text.mjs";
export async function facebook_messenger_next_passage_plan(thread_url) {
  "$plain thread_url";
  "What a daily run on the conversation at thread_url would send, without sending anything.";
  let read = await facebook_messenger_thread_read(thread_url);
  let r = await facebook_messenger_next_passage_plan_text(read.text);
  return r;
}
