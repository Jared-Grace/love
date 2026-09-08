import { fn_name } from "./fn_name.mjs";
import { reply_names_bible } from "./reply_names_bible.mjs";
import { reply_names_authored } from "./reply_names_authored.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function reply_names_common() {
  "Every given name the parser is willing to recognise as a name, in one sorted list with nothing said twice.";
  ("★ IT IS A JOIN AND NOTHING ELSE, SO THE SOURCES STAY WHERE THEY ARE. Each source answers a different question and is checked a different way: ",
    fn_name("reply_names_bible"),
    " is derived and can be rebuilt from the book at any time, ",
    fn_name("reply_names_authored"),
    " is a judgement somebody made and can be argued with. Pouring them into one written-down list would lose which is which, and the next person to add a name would have nowhere to put it.");
  ("A name that both sources hold is kept once, and measured on 2026-09-08 that was four names out of two thousand one hundred and sixty five - felix, jose, omar and salma. The overlap is that small for a reason worth knowing: the hand-written list was filled in precisely where the book falls silent, so ibrahim and yusuf and maryam do not collide with Abraham and Joseph and Mary, they stand beside them. Anyone expecting the two lists to be largely the same list twice would be reading this join as waste, and it is not.");
  ("The sorting is not for the parser, which does not care what order it is offered alternatives in. It is so that a person reading the list, or reading a change to it, sees names next to the names they would look for.");
  let bible = reply_names_bible();
  let authored = reply_names_authored();
  let sources = [bible, authored];
  let all = list_concat_multiple(sources);
  let unique = list_unique(all);
  let sorted = list_sort_text(unique);
  return sorted;
}
