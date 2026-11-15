import { reply_message_characters } from "./reply_message_characters.mjs";
import { list_filter } from "./list_filter.mjs";
import { reply_character_kept } from "./reply_character_kept.mjs";
export function reply_messages_inner_transform(message) {
  let characters = reply_message_characters(message);
  let filtered = list_filter(characters, reply_character_kept);
  return filtered;
}
