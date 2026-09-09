import { app_ceb_bible_gloss_root_omitted_wordings_word_read } from "./app_ceb_bible_gloss_root_omitted_wordings_word_read.mjs";
import { app_ceb_bible_gloss_root_omitted_wordings_walked } from "./app_ceb_bible_gloss_root_omitted_wordings_walked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_root_omitted_wordings() {
  "The sentences the Cebuano gloss store actually writes for a handful of words it names a root for most of the time and no root for the rest of the time, one rooted wording and one bare wording of each set side by side so a reader can see what the difference between them is made of.";
  "★ IT WAS BUILT TO TEST A SENTENCE THAT HAD ALREADY BEEN OFFERED AS A RECOMMENDATION, WHICH IS THAT FILLING THOSE ENTRIES IN IS MECHANICAL. The reading beside this one found the words the store roots more often than it does not, and the entries where it does not, and called filling them a codemod because the answer is already in the store. That is a claim about the shape of the writing and not about the count, and nothing measured up to then had looked at the writing.";
  "Reading the writing answered a different question four times over. Each run of this printed a first bare sentence that was not bare at all but named the same root in a wording the reader could not yet see, and each of those became a wording the reader now reads. Three came out of three rounds that way. So this is what found them, and it found them by printing sentences rather than by counting anything.";
  "★ THE FOURTH ROUND FOUND A FIFTH WORDING AND THAT IS WHERE THIS STOPS, BECAUSE THE FIFTH CANNOT BE READ FROM THE SENTENCE ALONE. Five of the six bare sentences left now open with the root instead of the word - 'Buhat' is to do. 'Gi-' tells it from the side of the deed - and the only thing that tells the root from the headword there is the headword, which the reader is not given. Adding it needs a reader taking the word too, and that is a decision about what this store owes rather than a pattern to bolt on.";
  "So the question this was built for is still open and the honest state of it is worth saying plainly. Of the six, five bare sentences are the same claim in other words and one - matarong - is genuinely rootless, spending its sentence on what the verse is doing rather than on how the word is built. If that ratio holds, most of what a coverage count calls missing is wording, and the residue is prose that would have to be authored rather than filled.";
  "The words are named here rather than found, because the question is not how many there are. Six of the clean top of that reading are enough to see the shape, and a list that finds itself would only make the answer longer without making it surer.";
  "One wording of each side is handed back and the rest counted, because the ways run to dozens for a common word and the point is made by two sentences.";
  "Nothing is asked of the site and nothing is written.";
  "The wide reader of roots is the one the shared walk here puts every sentence to, which is the reader this reading wants: a wording that names the root without ever writing the word root is exactly what it was built to find, and the narrow reader would count one of those as bare.";
  arguments_assert(arguments, 0);
  let words = [
    "gibuhat",
    "moabot",
    "matarong",
    "daotan",
    "kinabuhi",
    "atubangan",
  ];
  let r2 = await app_ceb_bible_gloss_root_omitted_wordings_walked(words);
  let walked = property_get(r2, "walked");
  let by_word = property_get(r2, "by_word");
  let rows = [];
  let word_read = app_ceb_bible_gloss_root_omitted_wordings_word_read(
    by_word,
    rows,
  );
  each(words, word_read);
  let r = {
    chapters: property_get(walked, "chapters"),
    rows: rows,
  };
  return r;
}
