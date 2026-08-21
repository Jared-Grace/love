import { bible_gloss_lone_marks_dropped } from "./bible_gloss_lone_marks_dropped.mjs";
import { bible_gloss_brackets_dropped } from "./bible_gloss_brackets_dropped.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_interlinear_verse_gloss_text(verse) {
  "$plain verse";
  "the verse is one row of the interlinear, holding its words. It is text to read and nothing that runs.";
  "One interlinear verse as a single run of English, built from the word-for-word renderings printed under its words.";
  "What comes out is deliberately the word-for-word rendering rather than a published translation: a translation is somebody's copyright, and this column is the interlinear's own, so what is built from it may be shown to anybody. It reads CHOPPILY for the same reason, and that is the information rather than a fault - a smooth translation has moved the words about until it can no longer be seen which English word stands under which original one.";
  "The table's own filler is DROPPED rather than printed. A row of dots, a vvv, a dash and a blank row are notation the table uses to say where the English of a word went or that it says nothing here, and a reader has not been taught that notation and cannot learn it from the page - so printed, they read as words of scripture that happen to be unpronounceable. Nothing is lost, because none of them was ever an English rendering of anything.";
  "THE MARKS AROUND A SUPPLIED WORD GO THE SAME WAY AND THE WORD INSIDE STAYS. He who [is] in you is the table saying that English needs a verb the Greek does not print, which is true and is aimed at somebody who reads interlinears. The reader of the pictures has been taught no notation at all, and the band is a whole line under a whole line rather than a word standing under a word - so nothing on the page could say which original word a bracketed word hung under, and the mark is decoration with no way to resolve it.";
  "THE MARKS COME OFF BEFORE THE FILLER IS ASKED ABOUT, so a row holding nothing but marks is met as the empty wording it becomes rather than added as a word made of punctuation.";
  "A MARK LEFT STANDING ALONE GOES NEXT DOOR AS WELL. The tables carry English punctuation along with the original word order, and the two do not survive each other - a closing quote can be glossed onto a verb whose English sits either side of it, and read out flat it lands beside nothing. What that drops here is one closing quote in fifteen chapters; what it stops is the next mark of that kind arriving unannounced.";
  let glosses = [];
  for (let word of verse.words) {
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
