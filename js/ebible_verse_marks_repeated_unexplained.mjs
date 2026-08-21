import { ebible_verse_marks_repeated_measure } from "./ebible_verse_marks_repeated_measure.mjs";
import { property_get } from "./property_get.mjs";
import { list_all } from "./list_all.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export async function ebible_verse_marks_repeated_unexplained() {
  "Every repeated verse id in every translation that the one known publishing fault does not already explain.";
  "A repeated id is always wrong - two marks wearing one address make a link land on whichever the browser reaches first and leave the other verse with no address at all - but every repeat in the corpus today comes from one fault in the publishing, and that fault has been written to them about as a whole. Reporting its instances again one at a time would waste the reader we are asking to fix it.";
  "The known fault is an id taken from the marker before rather than from the label the marker prints: a label that is not a plain number - a part-verse such as 3b, or a merged range such as 3-9 - is given the previous id plus one, and the next plain-numbered marker resyncs to its own number, so the invented ids land on real verses further down. So a repeat is explained exactly when one of its colliding marks prints something other than a plain number.";
  "What is left is a repeat whose marks all print plain numbers, which no part-verse and no range can account for. That is a different fault and nobody has looked at it. The answer is empty across all 399 translations as this is written, which is what makes it worth asking rather than counting.";
  let measured = await ebible_verse_marks_repeated_measure();
  let bibles = property_get(measured, "bibles");
  let unexplained = [];
  function lambda(bible) {
    let bible_folder = property_get(bible, "bible_folder");
    let chapters = property_get(bible, "found");
    function lambda2(chapter) {
      let chapter_code = property_get(chapter, "chapter_code");
      let repeats = property_get(chapter, "found");
      function lambda3(repeat) {
        let names = property_get(repeat, "names");
        let numbers_all = list_all(names, text_digits_is);
        let explained = not(numbers_all);
        if (explained) {
          return;
        }
        let number = property_get(repeat, "number");
        let row = {
          bible_folder,
          chapter_code,
          number,
          names,
        };
        list_add(unexplained, row);
      }
      each(repeats, lambda3);
    }
    each(chapters, lambda2);
  }
  each(bibles, lambda);
  return unexplained;
}
