import { bible_gathered_event_function_names } from "./bible_gathered_event_function_names.mjs";
import { function_names_run_concat } from "./function_names_run_concat.mjs";
export async function bible_gathered_events_all() {
  "Every gathered Bible event there is, from every gathered span, as one list.";
  "★ THE ORDER IS THE FUNCTION NAMES SORTED AS TEXT, WHICH IS EACH BOOK'S OWN ORDER AND IS NOT THE BIBLE'S. An earlier line here claimed the sort gave the book's order, on the strength of the zero-padded chapter numbers in the names. Those do order the spans within one book. Across books the sort is alphabetical, so Exodus comes back before Genesis, and today the whole corpus reads Exodus, Genesis, Numbers.";
  "It is said rather than fixed because callers already have this order and a silent reordering of the corpus is not a thing to do in passing. Whoever wants canonical order should take it from the chapter codes in the passages, which are real data, and not from a naming convention - a file gathered by where the story has got to rather than by whose chapter it is carries no book name to sort on at all.";
  "It exists because the corpus is split across files for the sake of whoever edits it, and a consumer should not have to know how the editing was divided up. A reading, a tally and a gate all want the same thing: all of them.";
  let f_names = await bible_gathered_event_function_names();
  let events = await function_names_run_concat(f_names);
  return events;
}
