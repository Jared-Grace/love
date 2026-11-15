import { text_apostrophe_straightened } from "./text_apostrophe_straightened.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function reply_message_characters(message) {
  "Every character of a message the way the reply rules first see it - apostrophes straightened, letters made small - before anything is dropped.";
  let straight = text_apostrophe_straightened(message);
  let lower = text_lower_to(straight);
  let characters = text_split_empty(lower);
  return characters;
}
