import { gloss_chapter_known_read } from "./gloss_chapter_known_read.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_entry_gloss_blank_is } from "./gloss_entry_gloss_blank_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function gloss_chapter_glosses_blank_words(chapter_code, fn) {
  "Every English word one stored gloss chapter has left without a meaning, gathered under the verses it sits in and kept in the order it occurs there, with each of those verses in every language the chapter holds.";
  "$plain chapter_code";
  "the code is a chapter's name, like LUK05, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  "★ A BLANK MEANING IS INVISIBLE TO THE ALIGNMENT GATE, which counts explanations against words and never looks at what an explanation says. So a chapter can be green, published, and still reach a reader as a word, two colons and a hole where the meaning belonged.";
  "The order is what makes the hole fillable. An author cannot be handed a word on its own, because the language being explained inflects for gender and number and the same English word is answered differently in different verses; handed the verse and the run of blanks in it, the author reads the verse and chooses. The order is also what a filler matches its answers against, so it is the answer's shape rather than a convenience.";
  "The verses come back beside the words because the author needs both and they are in the same file. Asking for the chapter's wording separately would read the same store twice and leave the two answers to be lined up by hand.";
  "Verses with nothing missing are left out rather than answered empty, because what is wanted here is the work left to do.";
  let chapter = await gloss_chapter_known_read(chapter_code, fn);
  let passages = property_get(chapter, "passages");
  let blanks = {};
  let texts = {};
  let counted = 0;
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let blank = list_filter(entries, gloss_entry_gloss_blank_is);
    let none = list_empty_is(blank);
    if (not(none)) {
      let verse_key = g_sermon_passage_verses_key(passage);
      let words = list_map(blank, gloss_entry_word_read);
      property_set(blanks, verse_key, words);
      let said = property_get(passage, "texts");
      property_set(texts, verse_key, said);
      let right = list_size(words);
      counted = add(counted, right);
    }
  }
  each(passages, passage_read);
  let verse_keys = object_property_names(blanks);
  let r = {
    chapter_code,
    blank: counted,
    verses: list_size(verse_keys),
    blanks,
    texts,
  };
  return r;
}
