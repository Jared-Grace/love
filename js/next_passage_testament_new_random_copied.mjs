import { bible_book_testament_new_random } from "./bible_book_testament_new_random.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { next_link_book_start } from "./next_link_book_start.mjs";
import { next_passage_copied } from "./next_passage_copied.mjs";
export async function next_passage_testament_new_random_copied(languages_plus) {
  "$plain languages_plus";
  "The words to send someone as their next passage: a New Testament book picked at random, from its first verse, four verses at a time, in languages_plus - the languages joined by + the way a next-passage link spells them, like en+original. Answers the link and the words its page copies, which end with the link on to the next verses.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ LANGUAGES ARE ONE WORD JOINED BY +: a command line hands a comma list over as one string, so the link's own spelling is the one that survives it.";
  let book_code = bible_book_testament_new_random();
  let languages = text_split_plus(languages_plus);
  let url = next_link_book_start(book_code, "4", languages);
  let text = await next_passage_copied(url);
  let r = {
    book_code,
    url,
    text,
  };
  return r;
}
