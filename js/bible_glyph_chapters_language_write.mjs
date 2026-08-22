import { bible_glyph_chapters_language_write_source } from "./bible_glyph_chapters_language_write_source.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_source_overwrite } from "./function_source_overwrite.mjs";
import { function_source_new } from "./function_source_new.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_language_write(
  language_code,
  written_name,
  language_word,
) {
  "$plain language_code";
  "$plain written_name";
  "$plain language_word";
  "the code names a bible in the curated list, the written name is the function to leave behind, and the language word is what to call that language in the prose. All three are data and none of them runs.";
  "Fetches every picture Bible chapter in one language and writes it out as a committed function, so a reveal band can print a plain translation in a language the reader already speaks.";
  "IT IS FOR THE READER AND NOT FOR THE PICTURES. A picture Bible verse is marks interleaved with the words no mark covers, in ENGLISH word order, and another language will not use that order. So a line of pictures in it has to be AUTHORED, one chapter at a time, exactly as the English ones were. What this fetches is a different thing and a cheaper one: the ordinary verse, shown AFTER the reader has guessed, so somebody who does not read English can check themselves against their own language rather than against ours.";
  "THAT IS THE WHOLE TEST THIS PROJECT HAS BEEN WAITING ON. The claim is that a stranger with no shared language can follow the marks; the claim cannot be tested by an English speaker, and while the reveal band answered only in English the only people who could check the answer were the people who did not need the pictures.";
  "IT TAKES THE LANGUAGE RATHER THAN SPELLING ONE, and that is the difference between one test and a test that can be repeated. The first of these was written for Tagalog with the code, the file name and the wording all fixed inside it, which is correct for one language and a rewrite for the second. A stranger test is worth as much as the number of strangers it can be run on, so the second language should cost a call and not an edit.";
  "THE TEXT IS WRITTEN DOWN RATHER THAN FETCHED WHEN THE PAGE OPENS, and that is deliberate. This Bible is meant to reach a phone with no network, so a reveal that needs one would fail in exactly the situation the pictures were chosen for. A fetch at build time costs nothing at read time.";
  "IT FINDS ITS OWN CHAPTERS, so nothing has to be handed a list and no list can fall behind the one next door. Adding a sixteenth chapter and running this again is the whole of the work.";
  "IT WRITES ONE FILE HOLDING EVERY CHAPTER, and that is a deliberate difference from the Rosetta bands next door, which are a file each named in a hand-kept list. That arrangement drifted: twelve chapters were written to disk, the list still named three, nothing threw and nothing went red, and the only symptom was a reader being shown less than the repo held. One file cannot drift from a list because there is no list. The two are allowed to differ because the bands are AUTHORED and this is FETCHED - authored text must never be silently rewritten, and derived text must never be allowed to go stale, so theirs refuses to run twice and this one always replaces what it finds.";
  "THE VERSE NUMBER IS TURNED INTO A NUMBER HERE, because the bible store answers with the text \"1\" and a picture chapter says 1, and the page joins the two by that value. Left as it arrived the join would match nothing at all, throw nothing, and show every verse with its band simply missing - which is indistinguishable from a chapter nobody has translated.";
  "THE FOLDER IS LOOKED UP BY LANGUAGE CODE rather than spelled by a caller, because the name of a bible on somebody's server is not a fact a caller should know. A code naming no bible in the list is dropped rather than refused, so this answers with no folder at all and writes nothing - which is why the folder comes back in the report.";
  "THE CODE IS THE ONE THIS REPO STORES AND NOT THE ONE EBIBLE PRINTS, and the two disagree for exactly the languages somebody is most likely to reach for. The curated-codes answer next door is spelled eBible's way on purpose - Urdu is urd there and ur here, Turkish is three letters there and two here - so a code copied out of that list names nothing in this one. Reaching for the wrong list is not a mistake this can prevent, and it is one it can stop pretending is an unrelated crash.";
  "A CODE NAMING NOTHING IS REPORTED AND NEVER ALLOWED TO THROW, which is what this paragraph used to claim while the code did the opposite. Looking a missing code up walked straight into taking the first of no languages, and the caller got a stack trace about an empty list four functions away rather than the one fact they needed - that the code they typed names no bible here. A function that says which folder it found is a function that has to survive finding none.";
  "THE SENTENCE SAYING THE FILE IS GENERATED IS KEPT SOMEWHERE ELSE, and it is the one line of the written file that is not spelled here. A gate finds these files by looking for that sentence rather than by reading a list of which languages exist, so the sentence is a thing two functions agree about - and two spellings of one sentence drift silently, because the file still parses, the gate still runs, and it simply finds nothing to check.";
  "AN EMPTY CHAPTER IS REPORTED AND NEVER SILENTLY KEPT. A bible that does not hold a chapter answers with no verses and so does a fetch that never arrived, and both would write a chapter with nothing in it - which reads on the page as a reveal panel that simply has no translation, indistinguishable from one nobody asked for. The names come back so a caller can see which.";
  let languages = ebible_languages_from_codes([language_code]);
  let unknown = list_empty_is(languages);
  if (unknown) {
    let missed = {
      language_code,
      written_name,
      bible_folder: null,
      written: 0,
      empty: [],
    };
    return missed;
  }
  let property_name = bible_folder_key();
  let bible_folder = list_first_property(languages, property_name);
  let chapters = bible_glyph_chapters();
  let gathered = [];
  let empty = [];
  let source = await bible_glyph_chapters_language_write_source(
    chapters,
    bible_folder,
    empty,
    gathered,
    written_name,
    language_word,
  );
  let found = await function_exists(written_name);
  let exists = property_get(found, "exists");
  if (exists) {
    await function_source_overwrite(written_name, source);
  }
  if (not(exists)) {
    await function_source_new(written_name, source);
  }
  let report = {
    language_code,
    written_name,
    bible_folder,
    written: gathered.length,
    empty,
  };
  return report;
}
