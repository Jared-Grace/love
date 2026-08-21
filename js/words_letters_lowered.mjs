import { text_words } from "./text_words.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export function words_letters_lowered(text) {
  "Some written text broken into its words, each one lowered and stripped down to its letters, with anything that had no letters at all dropped.";
  "IT EXISTS SO THAT A WORD IS ONE WORD. A full stop riding along, or a capital because the sentence began, splits one word into three entries, and every count taken over them is then wrong by however often that word happened to end a sentence or start one.";
  "The empty ones are dropped rather than kept, because a stray dash or a lone number leaves nothing behind once its letters are asked for, and an entry with no letters is not a word anybody said.";
  "Occurrences are kept rather than deduplicated, because how OFTEN a word is used is what every rarity count is made of, and a caller wanting the distinct ones can always drop the repeats.";
  let words = text_words(text);
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
