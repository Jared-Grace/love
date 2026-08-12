import { verse_number_key } from "./verse_number_key.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { words_multiset_keep } from "./words_multiset_keep.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
export function gloss_passage_base_repair(passage, verses_base) {
  "Bring one passage of a gloss chapter back in line with the base text: its stored verse wording is rewritten from the base, and any word explained that the base does not carry is dropped.";
  "It answers with how many explanations it removed, so a caller can report a number rather than a claim.";
  let verse_numbers = property_get(passage, "verse_numbers");
  function verse_text(verse_number) {
    let property_name = verse_number_key();
    let verse = list_find_property(verses_base, property_name, verse_number);
    let text = property_get(verse, "text");
    return text;
  }
  let originals = list_map(verse_numbers, verse_text);
  property_set(passage, "originals", originals);
  let s = list_join_space(originals);
  let words_allowed = text_split_space(s);
  let generated = property_get(passage, "generated");
  let items = json_parse_try(generated);
  if (null_is(items)) {
    let r = 0;
    return r;
  }
  let word_key = app_shared_gloss_bible_generate_generic_word();
  ("an explanation may name a phrase rather than a single word, so what it names is split the same way the verse is. Asking for the whole field as one word dropped every phrase in the chapter, because no single word of the verse ever equals two words joined.");
  function words_get(item) {
    let word = property_get(item, word_key);
    let words = text_split_space(word);
    return words;
  }
  let kept = words_multiset_keep(items, words_get, words_allowed);
  let value = json_format_to(kept);
  property_set(passage, "generated", value);
  let left = list_size(items);
  let right = list_size(kept);
  let removed = subtract(left, right);
  return removed;
}
