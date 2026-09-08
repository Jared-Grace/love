import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_lowered_set } from "./list_lowered_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_cebuano_words_unwritten(words) {
  "$plain words";
  "Of the words handed in, the ones the whole Cebuano translation never writes standing alone, beside the lowered list they were asked as and how many words the translation writes.";
  "★ THE TRANSLATION IS THE ONE WITNESS HERE THAT THE GLOSS PIPELINE DID NOT PRODUCE, WHICH IS THE ONLY REASON AN ANSWER FROM IT MEANS ANYTHING. Asking the gloss store whether it knows a word it invented is circular. The translation is the text the explanations are about, it was written by someone else, and if a word is a Cebuano word these verses use, it stands somewhere in sixty-six books.";
  "A word the translation does write is not thereby innocent and a word it does not is not thereby a mistake anyone made. Cebuano roots often live only inside longer forms, so a real root can be missing from this answer for a reason that is about the language rather than about anything written here. What is settled is narrower: for a word in this list, no source on this disk has ever seen it standing on its own.";
  "Both sides are put into small letters before they are compared, because the translation keeps its capitals on purpose and a word taken from the middle of a sentence never has one. The words handed in are lowered and made distinct first, so the same word asked twice in two spellings is one question.";
  "The written words are counted whole and lowered into a set afterwards, rather than asked for already lowered, because the count handed back is of the words the translation writes as it writes them. Lowering merges a name at the start of a sentence into the ordinary word beneath it, so the two numbers are not the same number and the one worth saying beside this answer is the larger.";
  "The lowered list is handed back rather than only its size, because the readings that ask this each name that count differently and one of them is about explained words while another is about pieces cut out of them.";
  "Nothing is written. The translation is read afresh on every ask.";
  arguments_assert(arguments, 1);
  let lowered = list_map_unique(words, text_lower_to);
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let spelled = list_lowered_set(written);
  function unwritten_is(word) {
    let there = set_includes(spelled, word);
    let none = not(there);
    return none;
  }
  let unwritten = list_filter(lowered, unwritten_is);
  let r = {
    lowered: lowered,
    written_words: list_size(written),
    unwritten: unwritten,
  };
  return r;
}
