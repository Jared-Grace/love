import { bible_glyph_chapters_language_write } from "./bible_glyph_chapters_language_write.mjs";
import { fn_name } from "./fn_name.mjs";
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
  "ALL OF THE DOING MOVED NEXT DOOR AND ONLY THE THREE CHOICES STAYED HERE. This was written for one language with the code, the file name and the wording fixed inside it, which is right for one language and a rewrite for the second - and a stranger test is worth as much as the number of strangers it can be run on. What is left here is the answer to which language, and it is kept as a name of its own rather than folded away so that the Tagalog reveal has one place to be asked about and one command to rebuild it.";
  let language_code = "tgl";
  let written_name = fn_name("bible_glyph_chapters_tagalog");
  let language_word = "Tagalog";
  let report = await bible_glyph_chapters_language_write(
    language_code,
    written_name,
    language_word,
  );
  return report;
}
