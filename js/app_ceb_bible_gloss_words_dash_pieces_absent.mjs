import { gloss_chapters_words_dash_kept_distinct } from "./gloss_chapters_words_dash_kept_distinct.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { words_dash_pieces_absent } from "./words_dash_pieces_absent.mjs";
export async function app_ceb_bible_gloss_words_dash_pieces_absent() {
  "Every Cebuano word the gloss store explains that is written with a dash inside it, and the pieces the store's own list of words turns those into that the store explains nowhere on its own.";
  "The store holds an authored explanation for panan-aw and for nag-ingon and for kabubut-on, and the reading that builds its list of words cuts every one of them in two. So the words a person is actually reading explanations of are missing from that list, and pieces stand there in their place - some of which, like ayo, are words the store explains anyway, and some of which, like panan, are not words at all.";
  "★ THIS ACCUSES A READING AND NOT THE STORE. Nothing here says an explanation is wrong; the explanations are of whole words and were authored that way. What is wrong is the list built off them, which is what an outside dictionary is asked about and what the queue of words still owed an explanation is drawn from.";
  let words = await gloss_chapters_words_dash_kept_distinct(
    app_ceb_bible_gloss_generate,
  );
  let r = words_dash_pieces_absent(words);
  return r;
}
