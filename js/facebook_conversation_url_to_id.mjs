import { text_between } from "./text_between.mjs";
export function facebook_conversation_url_to_id(conversation_url) {
  let left = "/t/";
  let right = "/";
  let facebook_conversation_id = text_between(conversation_url, left, right);
  return facebook_conversation_id;
}
