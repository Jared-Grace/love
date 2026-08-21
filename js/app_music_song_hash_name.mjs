import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
export function app_music_song_hash_name(title) {
  "$plain title";
  "The word a song is reached by in an address, made out of what the song is called - the FATHER's SON becomes the_FATHERs_SON.";
  "AN ADDRESS CANNOT HOLD WHAT A TITLE HOLDS. A space ends the address in some places that carry links as plain text, and an apostrophe is turned into an escape by others, so both are taken out rather than trusted - a link to a song is a thing people send each other, and it has to survive being pasted.";
  "It is made from the title rather than written down beside it, so renaming the song moves its address with it and the two cannot come apart.";
  "The letters keep the case the title gave them, because a person reading the link should still see the name they know. Nothing matches against it by case - the reading of an address lower-cases both sides first.";
  arguments_assert(arguments, 1);
  let kept = title.replace(/[^0-9A-Za-z ]/g, "");
  let underscore = "_";
  let r = text_replace_space_to(kept, underscore);
  return r;
}
