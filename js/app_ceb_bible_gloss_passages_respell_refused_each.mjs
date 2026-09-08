import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_passage_words_bare } from "./gloss_passage_words_bare.mjs";
import { gloss_entries_words_bare } from "./gloss_entries_words_bare.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { gloss_chapters_passages_entried_generic } from "./gloss_chapters_passages_entried_generic.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_each(
  refused_read,
) {
  "The walk the respell itself does over the Cebuano gloss store, handing over every passage it would decline: the chapter it stands in, the words its explanations name, the words the passage actually has, and the passage itself.";
  "★ THE TEST HERE HAS TO STAY THE RESPELL'S OWN TEST OR EVERY READING BUILT ON IT IS ABOUT A DIFFERENT SET. A passage is declined when the two lists do not come to the same number, and that is compared here in the same words the respell compares it in. A reading that measured refusal its own way would look like this one and answer about passages the respell never touched.";
  "The two lists are handed over whole rather than their sizes, because a count says that they disagree and never where, and where is the whole of what mending one needs. A reading wanting only the counts asks the sizes itself, which costs it one line and costs nothing to the reading that wants the words.";
  "The passage travels last rather than beside the chapter it stands in, so that the readings written before it was carried keep working unchanged. A reading naming three parameters is handed a fourth it never looks at, which costs it nothing; had the passage been put in the middle, every one of them would have gone on running and answered about the wrong thing.";
  "Passages with nothing explained in them are passed over before anything is counted and are not counted as seen, and that is the shared walk's doing rather than this reading's - the respell passes over them too, since there is no disagreement to have where nobody has written anything.";
  "Nothing is written. The chapters are read off the disk and compared, and the store is left exactly as it was found.";
  "The one parameter names something that runs: it is called once for every declined passage, with the chapter code, the explained words, the written words and the passage, and what it does with those four is the whole of what one reading differs from another by.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  function passage_read(chapter_code, passage, entries) {
    let written = gloss_passage_words_bare(passage, words_read);
    let explained = gloss_entries_words_bare(entries);
    let named = list_size(explained);
    let count = list_size(written);
    let counted_same = equal(named, count);
    if (counted_same) {
      return;
    }
    refused_read(chapter_code, explained, written, passage);
  }
  let walked = await gloss_chapters_passages_entried_generic(fn, passage_read);
  return walked;
}
