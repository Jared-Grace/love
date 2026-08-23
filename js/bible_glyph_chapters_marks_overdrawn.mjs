import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_overdrawn_walked } from "./bible_glyph_chapters_marks_overdrawn_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_glyph_chapters_marks_overdrawn() {
  arguments_assert(arguments, 0);
  ("Every place an authored picture Bible chapter draws a mark MORE often than the root table seats it in that chapter, which is a mark standing on a word the table never gave it.");
  ("DRAWING FEWER IS ALLOWED AND DRAWING MORE IS NOT. An author may always leave a seated word in plain English - the twenty third psalm did exactly that with its second turn-back, on purpose and with the reason written down - so a chapter under the table's count has made a judgment. A chapter OVER the table's count has drawn a picture on something the numbers underneath it do not support, and there is no judgment that produces that.");
  ("The reading itself is next door, and this is the same answer with the count of how much was reached left behind. A person opening this wants the list of places to look; the count exists for a gate, which has to be able to tell a clean run from a run that opened nothing, and nothing here writes a record or reports a verdict.");
  let told = await bible_glyph_chapters_marks_overdrawn_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
