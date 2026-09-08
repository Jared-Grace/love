import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn } from "./bible_glyph_chapters_verse_marks_underdrawn.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_roots() {
  arguments_assert(arguments, 0);
  ("Every underdrawn verse next door, told apart by whether the words behind the mark are ONE root or SEVERAL - which is the difference between a word an author left behind by mistake and a seating decision nobody has made.");
  ("THE READING NEXT DOOR ASSUMES A PREMISE THAT IS ONLY SOMETIMES TRUE. Its own prose says the author drew the mark right there, so they did not decide the mark was wrong for that word. That holds when both words are the same Hebrew root. It does not hold when the mark is seated on two different roots, because then the author drew one root and deliberately left the other in letters, and the mark being present says nothing at all about the word beside it.");
  ("SO THE SAME LIST HOLDS TWO DIFFERENT KINDS OF WORK. One root and a word left behind is an authoring repair anybody can make. Several roots is the collisions list arriving a second time, once per sighting instead of once per decision, and repairing those to satisfy the count would print two identical pictures side by side.");
  ("THE TWO WORST CASES ARE ALREADY KNOWN. The name tag is seated on the covenant name and on the ordinary word for a name, so in the name of the LORD asks for two name tags in a row, and the animal whose name Adam chose asks for the LORD name tag on a beast. The speech mark is seated on the verb for said and on the noun for word, and Hebrew uses that noun for a thing, so why are you doing these things asks for a speech mark on things.");
  ("IT READS THE INTERLINEAR RATHER THAN THE ENGLISH, because the English is a translation and the roots are only in the original. The rows already carry the glyph each number is seated as, so what this adds is only the grouping the reading next door threw away.");
  let offenders = await bible_glyph_chapters_verse_marks_underdrawn();
  let told = [];
  for (let offender of offenders) {
    let chapter_code = property_get(offender, "chapter_code");
    let verse_number = property_get(offender, "verse_number");
    let glyph = property_get(offender, "glyph");
    let filed_rows = await bible_glyph_chapter_rows_filed(chapter_code);
    let filed = property_get(filed_rows, "filed");
    let rows = property_get(filed_rows, "rows");
    let roots = [];
    for (let row of rows) {
      let number = property_get(row, "verse_number");
      let same = equal(number, verse_number);
      if (not(same)) {
        continue;
      }
      let words = property_get(row, "words");
      for (let word of words) {
        let word_glyph = property_get(word, "glyph");
        let drawn = equal(word_glyph, glyph);
        if (not(drawn)) {
          continue;
        }
        let strong = property_get(word, "strong");
        let root = property_get_or_null(filed, strong);
        let known = list_includes(roots, root);
        if (known) {
          continue;
        }
        list_add(roots, root);
      }
    }
    let count = roots.length;
    let one_root = equal(count, 1);
    list_add(told, {
      chapter_code,
      verse_number,
      glyph,
      roots,
      one_root,
    });
  }
  return told;
}
