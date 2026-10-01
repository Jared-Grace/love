import { app_original_bible_gloss_passages } from "./app_original_bible_gloss_passages.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_write_file_generic } from "./gloss_write_file_generic.mjs";
import { app_original_bible_gloss_words_unicode_repair } from "./app_original_bible_gloss_words_unicode_repair.mjs";
export async function app_original_bible_gloss_write_file(
  chapter_code,
  verse_key,
) {
  "Save a passage's authored original-language word explanations from a JSON file, so the explanations - which carry braces, quote marks and apostrophes - never have to ride the command line.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  "★ THE SPELLINGS ARE PUT BACK IN THE SAME CALL, BECAUSE A PASSAGE ARRIVES DRIFTED BY DEFAULT RATHER THAN OCCASIONALLY. An accented Hebrew or Greek letter has more than one spelling of the same characters, and typed output comes back in whichever one the typing settled on - so a passage authored by hand or by agent is misaligned from the moment it is stored, and looks perfect on the screen while it is. Measured 2026-10-01: a chapter was mended to a clean reading, and a passage authored into it the same day arrived with 23 of its words drifted at once - the whole passage, not a stray letter.";
  "Doing it here rather than leaving it to the gate is what makes the difference invisible instead of merely caught. Between a store and a sweep over it the chapter is already published, and what a reader is shown in that window is explanations standing under words they do not belong to - which is the one fault this whole shape exists to prevent, happening to somebody studying scripture. A gate catching it afterwards is a message to us; the window is theirs.";
  "The mend covers the whole chapter and not only the passage just written, because it finds its own work and a chapter stored before this existed is mended by the next passage authored into it. It is the same command the gate over this store names in its complaint, so running it by hand after a red reading is still the answer and does exactly what this does.";
  "What it put back travels out beside the path, because a correction nobody is told about is indistinguishable from no correction - and the words it names are the evidence that the drift is still happening rather than a thing that once did.";
  let passages_read = app_original_bible_gloss_passages;
  let fn = app_original_bible_gloss_generate;
  let path = await gloss_write_file_generic(
    chapter_code,
    verse_key,
    passages_read,
    fn,
  );
  let repaired =
    await app_original_bible_gloss_words_unicode_repair(chapter_code);
  let r = {
    path,
    repaired,
  };
  return r;
}
