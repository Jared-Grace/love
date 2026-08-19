import { property_get } from "./property_get.mjs";
import { gloss_entries_affix_letters_wrong_entry_read } from "./gloss_entries_affix_letters_wrong_entry_read.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { each } from "./each.mjs";
export function gloss_entries_affix_letters_wrong(entries, known) {
  "The explanations in one passage that quote letters for a piece of their word which the dictionary gives no piece of that kind holding.";
  "This is the blindness left behind by the check on kind names. That one asks only whether a name is used where the dictionary gives no piece of that kind at all, so a word the dictionary does build with a prefix passes however wrong the prefix quoted for it is - the reader is handed made-up letters and told confidently what they mean, and nothing objects. Reading the letters the explanation actually quoted is what closes it, and it is the same repair the root check needed for the same reason: a test satisfied by a word being present is satisfied by the wrong word being present.";
  "A claim whose kind the dictionary gives no piece of is passed over here rather than reported twice. The check on kind names already answers that one, and a finding counted in two sweeps makes both of their numbers a lie.";
  "Where the dictionary gives more than one piece of a kind, a claim agreeing with any of them agrees. Nothing here says which piece the explanation was talking about, so the kindest reading is the only honest one. How the letters stand to one another is read the same way, from the nearest of the pieces given.";
  "How the two sets of letters stand is carried back beside them, because the count alone would say the same thing about a piece off by a letter as about one nobody could have got from the word. Half of what a sweep like this finds is the first, and a reader taking the number for the second would throw away prose that is very nearly right.";
  "A word the dictionary says nothing about, or takes apart in a shorthand nobody here has read, is passed over rather than judged - the same rule the kind-name check is held to, for the same reason: the explaining machine was never told either of those things.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let r = gloss_entries_affix_letters_wrong_entry_read(word_key, known);
  let entry_read = property_get(r, "entry_read");
  let wrong = property_get(r, "wrong");
  each(entries, entry_read);
  return wrong;
}
