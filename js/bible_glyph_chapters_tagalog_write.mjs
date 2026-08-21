import { fn_name } from "./fn_name.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { not } from "./not.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_source_new } from "./function_source_new.mjs";
import { function_source_overwrite } from "./function_source_overwrite.mjs";
import { json_to } from "./json_to.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_glyph_chapters_tagalog_write() {
  "Fetches the Tagalog of every picture Bible chapter and writes it out as a committed function, so the key band can print a plain translation the reader already speaks.";
  "IT IS FOR THE READER AND NOT FOR THE PICTURES. A picture Bible verse is marks interleaved with the words no mark covers, in ENGLISH word order, and Tagalog does not use that order - it puts the verb first and marks the subject with ang. So a Tagalog line of pictures has to be AUTHORED, one chapter at a time, exactly as the English ones were. What this fetches is a different thing and a cheaper one: the ordinary Tagalog verse, to be shown AFTER the reader has guessed, so somebody who does not read English can check themselves against their own language rather than against ours.";
  "THAT IS THE WHOLE TEST THIS PROJECT HAS BEEN WAITING ON. The claim is that a stranger with no shared language can follow the marks; the claim cannot be tested by an English speaker, and until now the reveal band answered in English, so the only people who could check the answer were the people who did not need the pictures.";
  "THE TEXT IS WRITTEN DOWN RATHER THAN FETCHED WHEN THE PAGE OPENS, and that is deliberate. This Bible is meant to reach a phone with no network, so a reveal that needs one would fail in exactly the situation the pictures were chosen for. A fetch at build time costs nothing at read time.";
  "IT FINDS ITS OWN SET, so nothing has to be handed a list of chapters and no list can fall behind the one next door. Adding a sixteenth chapter and running this again is the whole of the work.";
  "IT WRITES ONE FILE HOLDING EVERY CHAPTER, and that is a deliberate difference from the Rosetta bands next door, which are a file each named in a hand-kept list. That arrangement drifted: twelve chapters were written to disk, the list still named three, nothing threw and nothing went red, and the only symptom was a reader being shown less than the repo held. One file cannot drift from a list because there is no list. The two are allowed to differ because the bands are AUTHORED and this is FETCHED - authored text must never be silently rewritten, and derived text must never be allowed to go stale, so theirs refuses to run twice and this one always replaces what it finds.";
  "THE VERSE NUMBER IS TURNED INTO A NUMBER HERE, because the bible store answers with the text \"1\" and a picture chapter says 1, and the page joins the two by that value. Left as it arrived the join would match nothing at all, throw nothing, and show every verse with its Tagalog band simply missing - which is indistinguishable from a chapter nobody has translated.";
  "THE FOLDER IS LOOKED UP BY LANGUAGE CODE rather than spelled here, because the name of a Tagalog bible on somebody's server is not a fact this function should know. The code is tgl - three letters, because Tagalog has no two-letter code in the list - and the folder it currently resolves to is a detail of the curated list.";
  "AN EMPTY CHAPTER IS REPORTED AND NEVER SILENTLY KEPT. A bible that does not hold a chapter answers with no verses and so does a fetch that never arrived, and both would write a chapter with nothing in it - which reads on the page as a reveal panel that simply has no Tagalog, indistinguishable from one nobody asked for. The names come back so a caller can see which.";
  let languages = ebible_languages_from_codes(["tgl"]);
  let bible_folder = list_first_property(languages, "bible_folder");
  let chapters = bible_glyph_chapters();
  let gathered = [];
  let empty = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let outcome = await ebible_chapter_verses_storage_outcome(
      bible_folder,
      chapter_code,
    );
    let verses = property_get(outcome, "verses");
    let nothing = list_empty_is(verses);
    if (nothing) {
      list_add(empty, chapter_code);
      continue;
    }
    let numbered = [];
    for (let verse of verses) {
      let text2 = property_get(verse, "verse_number");
      let verse_number = number_from_text(text2);
      let text = property_get(verse, "text");
      list_add(numbered, {
        verse_number,
        text,
      });
    }
    list_add(gathered, {
      chapter_code,
      verses: numbered,
    });
  }
  let f_name = fn_name("bible_glyph_chapters_tagalog");
  let json = json_to(gathered);
  let source = bible_glyph_chapters_tagalog_source(f_name, json);
  let found = await function_exists(f_name);
  let exists = property_get(found, "exists");
  if (exists) {
    await function_source_overwrite(f_name, source);
  }
  if (not(exists)) {
    await function_source_new(f_name, source);
  }
  let report = {
    bible_folder,
    written: gathered.length,
    empty,
  };
  return report;
  function bible_glyph_chapters_tagalog_source(name_written, chapters_json) {
    "the whole text of the file being written, as source a person can read.";
    let head =
      "export function " +
      name_written +
      "() {\n" +
      '  "Every picture Bible chapter in plain Tagalog, one entry a chapter, for the band a Tagalog reader checks themselves against after they have guessed.";\n' +
      '  "THIS FILE IS WRITTEN BY A COMMAND AND NOT BY HAND. It is a public-domain Tagalog bible read once, at authoring time, for the chapters the pictures have reached.";\n' +
      '  "IT IS COMMITTED RATHER THAN FETCHED because this Bible is meant to reach a phone with no network, and a reveal that needed one would fail in exactly the situation the pictures were chosen for.";\n' +
      '  "IT IS NOT A LINE OF PICTURES AND CANNOT BECOME ONE. Tagalog puts the verb first and marks the subject with ang, while a picture verse is marks interleaved into English word order, so a Tagalog picture line has to be authored a chapter at a time exactly as the English ones were.";\n';
    let body =
      "  let chapters = " + chapters_json + ";\n  return chapters;\n}\n";
    let file_text = head + body;
    return file_text;
  }
}
