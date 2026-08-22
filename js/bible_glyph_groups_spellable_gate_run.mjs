import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_groups_spellable_names_walked } from "./bible_glyph_roots_groups_spellable_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_groups_spellable_baseline_path } from "./bible_glyph_groups_spellable_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_groups_spellable_gate_run() {
  "Gate: no group of pictures is seated on a pair that two ordinary seated words can already put side by side.";
  "THIS IS THE SAME FAULT AS THE MISREADING GATE, ASKED A YEAR EARLIER. That one walks the written chapters and finds the misreadings that have been authored; it is the right thing to gate on and the wrong thing to author by, because it can only ever answer about wording already committed and by then the repair is a rewrite of a chapter. This one asks what the SEATING makes possible, which is knowable the day a group is seated and long before anybody writes the verse that trips it.";
  "PICTURES BESIDE PICTURES IS THE WHOLE OF THE WRITING SYSTEM, so a group has no mark of its own to tell it apart from two neighbouring words - there is no operator drawn between the halves of a group, and there never will be. What separates the two readings is a gap a shade wider, and a reader who does not catch that gap gets a word nobody wrote. That is why the pair a group is seated on has to be one that ordinary words cannot produce: it is the only defence available.";
  "IT MEASURES AGAINST WHAT THE TABLES ALREADY CARRY RATHER THAN AGAINST NOTHING. Every group seated so far can be spelled in both testaments, thirty ways between them, and two of those are wordings that Scripture is actually built out of - a Hebrew infinitive absolute putting one root beside itself, and said followed by good. None of that can be cleared by an edit here; clearing it means re-seating a group on different pictures, which is a judgement about what a reader should see. So the record holds what is true today and the gate refuses the next one.";
  "THE LIST ONLY SHRINKS, both ways. A name it does not hold fails, which is the new seating being refused. A name it holds that no longer offends fails too, because an entry left behind after a group has been moved quietly re-opens the door it was recording.";
  "IT ALSO REFUSES A BLIND RUN. The count handed back is how many group-and-testament pairs were opened, not how many were wrong - the wrong ones have stood at eight since the record was seeded, so counting only faults would print the same number on a run that read the tables and on a run that stopped reaching them.";
  arguments_assert(arguments, 0);
  let told = bible_glyph_roots_groups_spellable_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_groups_spellable_baseline_path();
  let name_write = fn_name("bible_glyph_groups_spellable_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "this group of pictures can be spelled by standing two ordinary seated words side by side, so a reader who reads the gap between those two words as narrow reads a third word nobody wrote - seat the group on a pair of pictures that no seated word ends and begins with, rather than recording this one as known",
    name_write,
  );
  return r;
}
