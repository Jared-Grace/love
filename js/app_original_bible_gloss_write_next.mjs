import { app_original_bible_gloss_write_passage } from "./app_original_bible_gloss_write_passage.mjs";
import { objects_merge } from "./objects_merge.mjs";
import { app_original_bible_gloss_write_coverage } from "./app_original_bible_gloss_write_coverage.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_original_bible_gloss_write_next(chapter_code) {
  "Everything needed to author the next passage of a chapter that has no word explanations yet: its English wording, and each of its verses with every original-language word already parsed.";
  "The parsing, the transliteration and the Strong's number are handed over rather than worked out, so an explanation says what a form is doing in its clause and never has to decide what the form is. The rubric for what an explanation owes the reader is notes/gloss_method.md.";
  "A word rare enough to be worth remarking on also arrives carrying the sentence that says so, already written out of the counts. That claim used to be the author's to make and was the one kind they could not check: nobody remembers how many times a word stands in a testament, and a sentence saying it stands only here reads exactly the same whether or not it is true. Handing it over puts it in the same class as the parsing - given, not generated - so the author is left with the part no dataset holds.";
  "It also answers with the file to write the explanations into, because that name is a convention and a convention nobody can see is a convention nobody can follow.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  "Each word also arrives with its parsing already said as a plain English sentence, and with what the lexicon holds under its Strong's number - the dictionary form, where the word comes from, and its range of meaning. Both belong to the same class as the parsing and the rarity: worked out for the author rather than by them. Where a word comes from was the last part being produced from memory, and it is the one part nothing downstream can check, because a wrong origin reads exactly like a right one and is the sentence a reader is most likely to carry away.";
  let coverage = await app_original_bible_gloss_write_coverage(chapter_code);
  let missing = property_get(coverage, "missing");
  if (list_empty_is(missing)) {
    let finished = {
      chapter_code,
      remaining: 0,
      verse_key: null,
    };
    return finished;
  }
  let verse_key = list_first(missing);
  ("Which passage is next is the whole of this function's own work. Everything the author is handed for it is the same whether the passage has been written before or not, so it is read by the one that takes a passage by name.");
  let handed = await app_original_bible_gloss_write_passage(
    chapter_code,
    verse_key,
  );
  let left = {
    remaining: list_size(missing),
  };
  let r = objects_merge([handed, left]);
  return r;
}
