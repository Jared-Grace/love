import { text_split_plus } from "./text_split_plus.mjs";
import { facebook_messenger_profile_languages_set } from "./facebook_messenger_profile_languages_set.mjs";
export async function facebook_messenger_profile_languages_set_plus(
  thread_id,
  languages_plus,
) {
  "$plain thread_id";
  "$plain languages_plus";
  "Keeps languages_plus - the languages joined by + the way a next-passage link spells them, like ur+pa+en+original - as the ones the person in messenger conversation number thread_id reads their passages in.";
  "★ FOR WHEN THE CHAT SAYS THE WRONG THING: a passage sent in the wrong languages becomes the newest one in the chat, and reading the chat would keep it as the choice; kept languages are asked first, so this is how a person's choice is put right.";
  let languages = text_split_plus(languages_plus);
  let r = await facebook_messenger_profile_languages_set(thread_id, languages);
  return r;
}
