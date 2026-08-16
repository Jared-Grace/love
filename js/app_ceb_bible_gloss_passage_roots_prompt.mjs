import { property_list_first } from "./property_list_first.mjs";
import { binisaya_words_roots_prompt } from "./binisaya_words_roots_prompt.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
export function app_ceb_bible_gloss_passage_roots_prompt(passage, known) {
  "What a Cebuano dictionary says the words of this one passage are built from, ready to be shown to the machine that is about to explain them.";
  "A passage carries its wording in every bible it was gathered from, and only the first of those is the Cebuano - the ones after it are there for the machine to read the sense from and hold no Cebuano words at all. So the first is the only one whose words this dictionary can be asked about.";
  "A dash inside a word is left standing, the same way the counting of a chapter's vocabulary leaves it standing, because the dictionary is keyed by words spelled the way the page spells them. Cut at the dash, maluloy-on becomes two words the dictionary has never heard of and the passage loses a root it had.";
  let cebuano = property_list_first(passage, "texts");
  let text = list_join_space(cebuano);
  let words = text_punctuation_dash_kept_split(text);
  let r = binisaya_words_roots_prompt(words, known);
  return r;
}
