import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_given_accepted_folder } from "./data_given_accepted_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function words_early_reader() {
  "The ordinary English words a child at the settled reading age is taken to have already, kept as accepted data rather than written into any code.";
  "IT IS ACCEPTED AND NOT DERIVED, which is why it lives where a person's agreement is kept. Nothing in this repo can work out what a six-year-old knows - that is a fact about English and about children, and the only honest sources for it are the early-reader word lists teachers have used for a century. This is a list of that kind rather than a copy of a particular one, so a human is free to add a word they know a child of theirs has and to take out one they know it does not.";
  "IT CARRIES NO WORD FROM THE FAITH. Sin, grace, holy, forgive and the rest are the game's own subject, and a subject word is not an accident to be caught - it is said by nearly everybody in the corpus, so the reports that read this list drop it on frequency without needing an opinion here. Putting one in would be this file quietly ruling that a child knows it.";
  "BASE FORMS ONLY, and the reader beside it is what takes the endings off. Listing covered next to cover, and asked next to ask, would treble the file and still miss the next ending; one crude stripper misses less and can be read in a minute.";
  "It is a filter over a REPORT and never a gate's ratchet, and that is what lets it be rough. A word it wrongly leaves out costs one more line for somebody to read past; a word it wrongly holds costs one line unread. Neither can fail a build, so the list does not have to be right to be worth having - it has to be short enough that a human will actually correct it.";
  let folder = data_given_accepted_folder();
  let path = path_join([
    folder,
    text_combine_multiple([fn_name("words_early_reader"), ".json"]),
  ]);
  let words = await file_read_json(path);
  return words;
}
