import { bible_glyph_roots_collisions_names_walked } from "./bible_glyph_roots_collisions_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_roots_collisions_baseline_path } from "./bible_glyph_roots_collisions_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_roots_collisions_gate_run() {
  "QA gate: no picture in a seed table stands for a second root without the sharing being written down first.";
  "THE ALPHABET ITSELF CALLS THIS ITS WORST FAULT and until now nothing held the line on it. A word with no picture yet leaves a visible gap and a reader knows something is being carried in English; a word wearing another word's picture leaves no gap at all, so the verse reads as though it says the other one and nothing anywhere says otherwise. The list was already being worked out - the survey has reported it all along - and a reading nobody is obliged to act on is not a guard.";
  "THE RULE IS ONE-WAY AND THAT IS THE WHOLE OF IT: A ROOT MAY HAVE MANY SEQUENCES, A SEQUENCE MAY NOT HAVE MANY ROOTS. A root carrying two senses is welcome to two sequences - that is how truth and amen both get drawn. The reverse is forbidden, because a reader meeting a sequence has only the sequence, and no amount of kinship between two roots gives back which was meant. A root with two sequences costs a reader nothing; a sequence with two roots costs them the verse.";
  "SO ALL NINETEEN ARE FAULTS AND THE RECORD IS EXPECTED TO REACH NOUGHT. That is worth writing down because the first reading of this list said the opposite. The Hebrew table remarks that raah is to shepherd and sits with the shepherd, and read as a standing policy that a verb may wear its noun's picture it excuses twelve of the nineteen - the two Greek swords, the two walks, anoint beside anointed one, both pairs of negations. The rule above overrules that reading: relatedness is not identity, and the page cannot show it.";
  "Measured against the record rather than against nought only because nineteen already stood when this was built, and each one is cleared by choosing a sequence rather than by an edit. A split needs a sequence that is free, which is a question for the alphabet and not for the artwork - the picture named girl is in the artwork set and is not one of the alphabet's characters. A group of two marks is a legal sequence and buys no picture, but it inherits the hazard the reserved-mark gates exist for.";
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
