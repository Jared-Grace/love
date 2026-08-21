import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function bible_glyph_chapters_tagalog_write() {
  "Fetches the Tagalog of every picture Bible chapter and writes it beside the repo, so the reveal panel can print a plain translation the reader already speaks.";
  "IT IS FOR THE READER AND NOT FOR THE PICTURES. A picture Bible verse is marks interleaved with the words no mark covers, in ENGLISH word order, and Tagalog does not use that order - it puts the verb first and marks the subject with ang. So a Tagalog line of pictures has to be AUTHORED, one chapter at a time, exactly as the English ones were. What this fetches is a different thing and a cheaper one: the ordinary Tagalog verse, to be shown AFTER the reader has guessed, so somebody who does not read English can check themselves against their own language rather than against ours.";
  "THAT IS THE WHOLE TEST THIS PROJECT HAS BEEN WAITING ON. The claim is that a stranger with no shared language can follow the marks; the claim cannot be tested by an English speaker, and until now the reveal band answered in English, so the only people who could check the answer were the people who did not need the pictures.";
  "THE TEXT IS WRITTEN DOWN RATHER THAN FETCHED WHEN THE PAGE OPENS, and that is deliberate. This Bible is meant to reach a phone with no network, so a reveal that needs one would fail in exactly the situation the pictures were chosen for. A fetch at build time costs nothing at read time.";
  "IT FINDS ITS OWN SET, so nothing has to be handed a list of chapters and no list can fall behind the one next door. Adding a sixteenth chapter and running this again is the whole of the work.";
  "THE FOLDER IS LOOKED UP BY LANGUAGE CODE rather than spelled here, because the name of a Tagalog bible on somebody's server is not a fact this function should know. The code is tgl - three letters, because Tagalog has no two-letter code in the list - and the folder it currently resolves to is a detail of the curated list.";
  "AN EMPTY CHAPTER IS REPORTED AND NEVER SILENTLY KEPT. A bible that does not hold a chapter answers with no verses and so does a fetch that never arrived, and both would write a chapter with nothing in it - which reads on the page as a reveal panel that simply has no Tagalog, indistinguishable from one nobody asked for. The names come back so a caller can see which.";
  let languages = ebible_languages_from_codes(["tgl"]);
  let language = list_first(languages);
  let bible_folder = property_get(language, "bible_folder");
  let chapters = bible_glyph_chapters();
  let gathered = {};
  let empty = [];
  let written = [];
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
    property_set(gathered, chapter_code, verses);
    list_add(written, chapter_code);
  }
  await file_write_json("data/bible_glyph_tagalog.json", gathered);
  let report = {
    bible_folder,
    written: written.length,
    empty,
  };
  return report;
}
