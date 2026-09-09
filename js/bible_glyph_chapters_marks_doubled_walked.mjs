import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_overdrawn_walked } from "./bible_glyph_chapters_marks_overdrawn_walked.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_marks_doubled_walked() {
  arguments_assert(arguments, 0);
  ("Every mark an authored picture Bible chapter draws at least twice as often as the root table seats it, in a chapter that seats it at all - which is the other unambiguous half of drawing more than the table allows.");
  ("IT TAKES THE LINE ITS SIBLING ALREADY DREW AND GATES THE FAR SIDE OF IT. The unseated reading narrows the same sweep to marks the table seats nought times, and its reason for stopping there is that a mark drawn nine times where the table seats eight is an author writing one more and than the Greek had, so gating it would gate a writing style. That reason is right and it does not reach this far. One extra is a sentence; twice as many is not a sentence anybody writes by accident.");
  ("THE FAULT IT FINDS IS ONE ENGLISH WORD SITTING ON TWO ORIGINAL ROOTS. English gives one word to several roots and the table seats the mark on one of them, so an author drawing every occurrence of the word hands the second root the first one's picture. Nothing in the draft shows it: a mark whose name is its own English word renders in the glossed line as that word, so the drawn one and the plain one look identical and only the count disagrees.");
  ("IT WAS CONFIRMED ON REAL CHAPTERS BEFORE IT WAS WRITTEN, which is the whole of why the doubling line is drawn where it is rather than at a fixed number of extras. The twenty second of Exodus draws the sheep four times where the table seats two, because sheep glosses both seh and the flock word beside it in the same verse; the fortieth of Genesis draws the hand four times where the table seats two, because hand glosses both yad and the palm word. Neither is off by one and neither is a style.");
  ("TWO OF WHAT IT FINDS ARE NOT FAULTS AND WERE READ BEFORE THEY WERE LEFT IN THE RECORD. The sixteenth of Judges draws the sun twice where the table seats one because the Hebrew says all the days once and the English says day after day - both pictures stand on the same root, so the rule about one sequence and one root is not broken. The fourth of first John writes the mark inside a longer word, anti joined to the oil mark, and the Greek there is the anointed one with anti in front of it, which is the alphabet composing rather than failing. A reader who finds these two in the record should not decide them a second time.");
  ("The count of how much was reached is carried through untouched. Narrowing the answer does not narrow the walk, so a number worked out on this side would say the sweep had shrunk each time the repo got healthier.");
  let told = await bible_glyph_chapters_marks_overdrawn_walked();
  let walked = property_get(told, "walked");
  let overdrawn = property_get(told, "offenders");
  let doubled = [];
  for (let entry of overdrawn) {
    let seats = entry.seats;
    let none = equal(seats, 0);
    if (none) {
      continue;
    }
    let twice = add(seats, seats);
    let b = less_than(entry.drew, twice);
    let far = not(b);
    if (far) {
      list_add(doubled, entry);
    }
  }
  let r = {
    walked,
    offenders: doubled,
  };
  return r;
}
