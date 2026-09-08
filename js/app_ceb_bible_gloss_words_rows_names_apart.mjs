import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_common } from "./bible_words_common.mjs";
import { gloss_words_rows_names_apart } from "./gloss_words_rows_names_apart.mjs";
export async function app_ceb_bible_gloss_words_rows_names_apart(rows) {
  "$plain rows";
  "One list of Cebuano word rows cut in two against the whole Cebuano bible: the borrowed names no honest gloss can be written for, and everything a person could sit down and write about.";
  ("The cutting itself is ",
    fn_name("gloss_words_rows_names_apart"),
    ", which asks to be handed the vocabulary to judge against and so cannot decide which bible that is. Four readings of this app each answered that question for themselves, in the same three lines and the same order, and the answer was the same every time because there is only one Cebuano bible on this disk. Naming it once leaves each of those readings saying which rows it is cutting rather than where the language lives.");
  ("★ THE VOCABULARY HANDED OVER IS THE WHOLE CEBUANO BIBLE AND NOT THE CHAPTERS THAT HAVE BEEN GLOSSED, AND THAT IS THE ONLY THING MAKING THE TEST WORTH ANYTHING. A row is called a name when its small-letter spelling is met nowhere in what is handed in, so every book nobody has read yet is a chance for an ordinary word to clear itself; over four hundred authored chapters alone the same test files the language's own words as names. The reason lives in full in ",
    fn_name("gloss_words_rows_names_apart"),
    " and is repeated here because this is the line that chooses the text.");
  ("Both halves come back whole rather than one of them, because the four readings want different halves - two of them print the names as well, to show what was taken off somebody's list, and a wrapper handing back only the words would make that impossible without going round it.");
  ("Nothing is written, and the bible underneath is walked afresh every time this is asked - the vocabulary is not held over between asks anywhere below here. So a reading that means to cut two lists should ask once and cut twice rather than ask twice, and that cost was already what it was: each of the four readings asked exactly once before this existed and asks exactly once now.");
  arguments_assert(arguments, 1);
  let bible_folder = ebible_folder_cebuano();
  let common_words = await bible_words_common(bible_folder);
  let apart = gloss_words_rows_names_apart(rows, common_words);
  return apart;
}
