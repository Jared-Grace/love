import { bible_glyph_chapters_verses_repeated_walked } from "./bible_glyph_chapters_verses_repeated_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_verses_repeated_baseline_path } from "./bible_glyph_chapters_verses_repeated_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_chapters_verses_repeated_gate_run() {
  "QA gate: no verse of the picture Bible draws exactly what an earlier verse of its own chapter draws, unless the record already holds that pair.";
  "A LOST VERSE IS THE ONE FAULT THAT LEAVES NOTHING TO SEE. Every other gate here asks whether what is written is right; none of them asks whether anything is written at all, so a verse whose slot was filled with its neighbour's sentence passes all of them - the sentence is good English, the marks are seated on the right roots, the spacing is correct. The only thing that disagrees is the neighbour.";
  "IT WAS BUILT BECAUSE OF WHAT IT FOUND. The ten commandments are written twice in this Bible and both copies are broken the same way: four verses running carry the commandment about false witness, so murder, adultery and stealing are missing from the twentieth of Exodus and from the fifth of Deuteronomy alike. That had been shipped, and nothing in this repo had any way of saying so.";
  "Measured against the record rather than against nought, because scripture does repeat itself. Elijah says the same thing at two verses of the nineteenth of First Kings because he says it twice, and the third of Leviticus describes the fat and the kidneys in the same words for each offering in turn. Those are real text and the record is where a person puts one after reading it; what the record must never absorb is a new pair, because a new pair is a verse that has just been lost.";
  "The number handed back is how many verses were compared, not how many were wrong. On a good day nothing is wrong, which is also what a run that opened no chapter would say, and the count is the one part of the answer that falls when the sweep stops reaching the chapters.";
  let told = bible_glyph_chapters_verses_repeated_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_chapters_verses_repeated_baseline_path();
  let name_write = fn_name(
    "bible_glyph_chapters_verses_repeated_baseline_write",
  );
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these picture Bible verses draw exactly what an earlier verse of the same chapter draws - each entry is the chapter code, the verse repeated and the verse repeating it. Usually one sentence was written into two slots and the line the first slot should have carried is gone: read the chapter's glossed draft at both numbers and write the verse that is missing",
    name_write,
  );
  return r;
}
