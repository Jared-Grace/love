import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_words } from "./text_words.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function g_arc_words_said(arc) {
  "Every word a player actually reads off this person, once each occurrence, in lower case and stripped down to its letters.";
  "IT IS THE PLAYER'S HALF OF THE ARC AND NOT THE WHOLE OF IT. An arc also carries an occupation, a trouble and a summary, and none of those is ever shown while playing - the summary is written for the call that writes the next person. Counting them would put words in front of a reading check that no reader ever meets, and the check would then be answered about somebody who is not the player.";
  "STRIPPED TO LETTERS AND LOWERED so a word is one word, and that stripping is done by the shared reader rather than here, because the same normalizing has to be applied to every field the word reports read - two spellings of what counts as one word would put the same word in two entries and make each of them look rarer than it is.";
  let said = [];
  let conversations = property_get(arc, "conversations");
  for (let conversation of conversations) {
    let catch_up = property_get(conversation, "catch_up");
    list_add(said, catch_up);
    let turns = property_get(conversation, "turns");
    for (let turn of turns) {
      let before = property_get(turn, "before");
      list_add(said, before);
      let after = property_get(turn, "after");
      list_add(said, after);
    }
  }
  let joined = list_join_space(said);
  let kept = words_letters_lowered(joined);
  return kept;
}
