import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { bible_gloss_brackets_dropped } from "./bible_gloss_brackets_dropped.mjs";
import { bible_gloss_lone_marks_dropped } from "./bible_gloss_lone_marks_dropped.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_interlinear_verse_gloss_text(verse) {
  "$plain verse";
  "the verse is one row of the interlinear, holding its words. It is text to read and nothing that runs.";
  "One interlinear verse as a single run of English, built from the renderings printed under its words and put back into the order those renderings were worded for.";
  arguments_assert(arguments, 1);
  ("WHAT IS PRINTED UNDER THE WORDS IS NOT A GLOSS COLUMN. The column is headed BSB version, and it is the Berean Standard Bible cut into chunks and hung on the original words - so a chunk says what it says because of where ENGLISH puts it, and the table keeps a second number saying where that is. That is the number the words are put back in order by here.");
  ("THE ORIGINAL'S ORDER WAS TRIED FIRST AND IT CANNOT WORK, and the reason is not that it read choppily. Genesis 1:3 is the proof: the verb and he said is glossed said, and its leading and is filed under the next word as the chunk And God - so read in the order the Hebrew stands in, the verse comes out as said And God, which is not the English order and is not the Hebrew order either. The chunks straddle the words they hang on, so no arrangement of them is a word-for-word line; there are only two honest outputs, the English these chunks were cut from, and a gloss column this repo writes for itself.");
  ("NOTHING IS LOST BY PUTTING THEM BACK. The band is a whole line under a whole line rather than a word standing under a word, so nothing on the page ever showed which English chunk stood over which picture - the order the chunks were left in bought no alignment and cost the reader the sentence.");
  ("THE TEXT MAY BE SHOWN TO ANYBODY. What comes out this way is the Berean wording, which this repo already publishes as one of its own translations and reads as public domain off the publisher's own licence page.");
  ("The table's own filler is DROPPED rather than printed. A row of dots, a vvv, a dash and a blank row are notation the table uses to say where the English of a word went or that it says nothing here, and a reader has not been taught that notation and cannot learn it from the page - so printed, they read as words of scripture that happen to be unpronounceable. Nothing is lost, because none of them was ever an English rendering of anything.");
  ("THE MARKS AROUND A SUPPLIED WORD GO THE SAME WAY AND THE WORD INSIDE STAYS. He who [is] in you is the table saying that English needs a verb the Greek does not print, which is true and is aimed at somebody who reads interlinears. The reader of the pictures has been taught no notation at all, and the band is a whole line under a whole line rather than a word standing under a word - so nothing on the page could say which original word a bracketed word hung under, and the mark is decoration with no way to resolve it.");
  ("THE MARKS COME OFF BEFORE THE FILLER IS ASKED ABOUT, so a row holding nothing but marks is met as the empty wording it becomes rather than added as a word made of punctuation.");
  ("A MARK LEFT STANDING ALONE GOES NEXT DOOR AS WELL. The tables carry English punctuation along with the original word order, and the two do not survive each other - a closing quote can be glossed onto a verb whose English sits either side of it, and read out flat it lands beside nothing. What that drops here is one closing quote in fifteen chapters; what it stops is the next mark of that kind arriving unannounced.");
  ("The words are copied before they are sorted, because the verse handed in is the one every other reader of this chapter is holding - and the order it arrives in is the original's, which is what the pictures and the gloss author both work from.");
  let ordered = list_copy(verse.words);
  function gloss_sort_of(word) {
    let value = word.gloss_sort;
    return value;
  }
  list_sort_number_mapper(ordered, gloss_sort_of);
  let glosses = [];
  for (let word of ordered) {
    let stripped = bible_gloss_brackets_dropped(word.gloss);
    let gloss = bible_gloss_lone_marks_dropped(stripped);
    let filler = bible_glyph_gloss_placeholder_is(gloss);
    if (filler) {
      continue;
    }
    list_add(glosses, gloss);
  }
  let text = list_join_space(glosses);
  return text;
}
