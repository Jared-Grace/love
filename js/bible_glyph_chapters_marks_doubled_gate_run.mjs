import { bible_glyph_chapters_marks_doubled_names_walked } from "./bible_glyph_chapters_marks_doubled_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_marks_doubled_baseline_path } from "./bible_glyph_chapters_marks_doubled_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_chapters_marks_doubled_gate_run() {
  "QA gate: no picture Bible chapter draws a mark twice as often as the root table seats it, which is one English word handed to two different original roots.";
  "NOTHING WAS WATCHING THIS AND THE DRAFT CANNOT SHOW IT. Many marks are drawn as their own English name - lion, ox, seed, tent, hand - so in a chapter's glossed draft a drawn lion and a plain English lion look identical, and the only thing that disagrees is the count. An author reconciling by eye sees nothing wrong, and the mistake lands with every gate in the repo green.";
  "IT IS THE FAR HALF OF A LINE THE SIBLING GATE ALREADY DREW. The unseated gate takes marks the table seats nought times and stops there, because a mark drawn nine times where the table seats eight is an author writing one more and than the original had, and gating that would be gating a writing style. Twice as many is not a sentence anybody writes by accident.";
  "Measured against the record rather than against nought, because ten stood when this was written and they are not all the same thing. Four of them are drawn at least twice where the table seats two or more, and two of those four were read and confirmed before this was built: the twenty second of Exodus draws the sheep four times because sheep glosses both seh and the flock word beside it, and the fortieth of Genesis draws the hand four times because hand glosses both yad and the palm word. The other six are drawn twice where the table seats once, where the extra could as easily be an English sentence repeating a word the original said once - those are held rather than judged, and the record is what stops an eleventh joining them.";
  "The number handed back is how many marks were compared, not how many were wrong. On a good day nothing is wrong, which is also what a run that opened no chapter would say, and the count is the one part of the answer that falls when the sweep stops reaching the chapters.";
  let told = await bible_glyph_chapters_marks_doubled_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_chapters_marks_doubled_baseline_path();
  let name_write = fn_name("bible_glyph_chapters_marks_doubled_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these picture Bible chapters draw a mark at least twice as often as the root table seats it, which is one English word drawn on two different original roots - read the chapter's glossed draft, find the occurrences the table does not seat, and pull those back to plain English",
    name_write,
  );
  return r;
}
