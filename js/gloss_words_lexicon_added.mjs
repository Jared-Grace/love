import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { strongs_greek_definition } from "./strongs_greek_definition.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { null_is } from "./null_is.mjs";
import { objects_merge } from "./objects_merge.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function gloss_words_lexicon_added(chapter_code, words) {
  "One chapter's interlinear words, each given what the lexicon holds under its Strong's number: the dictionary form, where the word comes from, and its range of meaning.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN04, chosen from the Bible's own book and chapter numbering. It names a place in the canon and nothing that runs.";
  "This is here so that where a word comes from is given to an author rather than recalled by them. Everything else an explanation needs is already handed over - the word, its transliteration, its parsing, its rarity - and its origin was the one part left to be produced from memory. It is also the one part nothing downstream can check: a wrong parsing contradicts a table sitting beside it, and a wrong origin reads exactly like a right one, is the most memorable sentence in the entry, and is the one the reader will carry away.";
  "The entry is handed over whole rather than picked apart into fields. Thirteen of the five and a half thousand entries carry no origin and nineteen carry no definition, so a fixed set of fields would have to invent an empty one for those - and an empty origin offered to an author reads as a word having no origin rather than as the lexicon not saying.";
  "Nothing at all is added outside the New Testament, and that is a correctness bound rather than a saving. The interlinear gives a word one Strong's number out of whichever of its two columns is filled, and the Greek and the Hebrew numberings are separate books that both start at one. So a Hebrew word looked up here would find a real Greek entry wearing its number and hand back a confident account of a different word.";
  "A word the table gives no number, and a number the lexicon has never heard of, both come back exactly as they arrived.";
  let testament_name = bible_chapter_testament_name(chapter_code);
  let greek_name = ebible_testament_new_name();
  let greek_is = equal(testament_name, greek_name);
  if (not(greek_is)) {
    return words;
  }
  async function word_read(word) {
    let strong = property_get(word, "strong");
    if (not(strong)) {
      return word;
    }
    let entry = await strongs_greek_definition(strong);
    if (null_is(entry)) {
      return word;
    }
    let held = {
      lexicon: entry,
    };
    let with_lexicon = objects_merge([word, held]);
    return with_lexicon;
  }
  let added = await list_map_async(words, word_read);
  return added;
}
