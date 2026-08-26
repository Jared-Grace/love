import { bible_glyph_roots_collisions_names_walked } from "./bible_glyph_roots_collisions_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_collisions_baseline_path } from "./bible_glyph_roots_collisions_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_roots_collisions_gate_run() {
  "QA gate: no picture in a seed table stands for a second root without the sharing being written down first.";
  "THE ALPHABET ITSELF CALLS THIS ITS WORST FAULT and until now nothing held the line on it. A word with no picture yet leaves a visible gap and a reader knows something is being carried in English; a word wearing another word's picture leaves no gap at all, so the verse reads as though it says the other one and nothing anywhere says otherwise. The list was already being worked out - the survey has reported it all along - and a reading nobody is obliged to act on is not a guard.";
  "Measured against the record rather than against nought, because nineteen stood when this was written and clearing one is a decision rather than an edit. Some of the nineteen are right: English has one word for the two Greek swords and one for the two Greek walks, so those pictures are honest. Others are two words a reader would want kept apart - truth wearing the tick that also means believe, the covenant name wearing the tag that also means name. The record holds all nineteen so that today's seating cannot quietly add a twentieth, and it may only ever shrink.";
  "The number handed back is how many pictures were compared, not how many were wrong. On a clean table nothing is wrong, which is also what a run that read no table would say, and the count is the one part of the answer that falls when the reading stops reaching the tables.";
  let told = bible_glyph_roots_collisions_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_roots_collisions_baseline_path();
  let name_write = fn_name("bible_glyph_roots_collisions_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these pictures each stand for two roots at once, so two different words come out of the alphabet looking identical - give the second root a picture of its own, or drop it from the table if English really does say it with the same word",
    name_write,
  );
  return r;
}
