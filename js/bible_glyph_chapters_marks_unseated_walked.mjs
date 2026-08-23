import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_overdrawn_walked } from "./bible_glyph_chapters_marks_overdrawn_walked.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapters_marks_unseated_walked() {
  arguments_assert(arguments, 0);
  ("Every mark an authored picture Bible chapter draws in a chapter where the root table seats it NOT ONCE, which is the unambiguous half of drawing more than the table allows.");
  ("IT IS A SUBSET OF THE SIBLING NEXT DOOR AND IT IS THE HALF WORTH GATING. That reading finds every chapter drawing a mark more often than the table seats it, and most of what it finds is a mark drawn nine times where the table seats eight - which an author produces honestly, by writing an English sentence that needs one more and than the Greek had. Gating that would be gating a writing style. A mark drawn where the table seats it zero times cannot be produced that way at all: there was no word under it.");
  ("SO THE TWO NUMBERS MEAN DIFFERENT THINGS AND ONLY ONE OF THEM IS EVIDENCE. Off by one is a sentence; off by all of it is a picture chosen from the English. The first time this was run it found exactly two, and one of them was the twentieth of Exodus drawing the darkness on araphel, the thick gloom Moses walked into - a real Hebrew word for darkness that the table does not seat, drawn because the English translation said darkness. That is the mistake this exists to make impossible to keep.");
  ("The other one it found is a compound, the false prophet, whose second half is seated and whose whole is not. Whether a compound may draw its root's mark is a question about the language and not about the code, so it is reported and not decided here.");
  ("The count of how much was reached is carried through untouched. Narrowing the answer does not narrow the walk - every mark the sweep compared was compared whether or not it ended up in here - so a number worked out on this side would say the sweep had shrunk each time the repo got healthier, which is the opposite of what it is read for.");
  let told = await bible_glyph_chapters_marks_overdrawn_walked();
  let walked = property_get(told, "walked");
  let overdrawn = property_get(told, "offenders");
  let unseated = [];
  for (let entry of overdrawn) {
    let none = equal(entry.seats, 0);
    if (none) {
      list_add(unseated, entry);
    }
  }
  let r = {
    walked,
    offenders: unseated,
  };
  return r;
}
