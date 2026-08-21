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
  "STRIPPED TO LETTERS AND LOWERED so a word is one word. A full stop riding along, or a capital because the sentence began, splits one word into three entries and every count taken over them is wrong by however often that word happened to end a sentence.";
  "Occurrences are kept rather than deduplicated here, because how OFTEN a word is used is the whole of what a rarity count is made of, and a caller wanting the distinct ones can always drop the repeats.";
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
  let words = text_words(joined);
  let kept = [];
  for (let word of words) {
    let lowered = text_lower_to(word);
    let letters = text_letters_only(lowered);
    let any = text_empty_not_is(letters);
    if (any) {
      list_add(kept, letters);
    }
  }
  return kept;
}
