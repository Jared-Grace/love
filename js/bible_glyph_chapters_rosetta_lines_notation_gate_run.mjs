import { bible_glyph_chapters_rosetta_lines } from "./bible_glyph_chapters_rosetta_lines.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export function bible_glyph_chapters_rosetta_lines_notation_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no written Rosetta band prints the interlinear's own notation as though it were a word of scripture. Throws naming the chapter, the verse and the mark that leaked.");
  ("IT GUARDS A FAULT THAT SHIPPED AND WAS READ BY NOBODY FOR WEEKS. The band files were written while the reading of filler notation knew two marks and not four, so a dash the tables print where the original says a word English does not say went straight into the English line: 1 John 4 verse 1 read whether from - God they are, and two hundred and twenty-six verses across fourteen of fifteen chapters carried one. Nothing threw. The band is prose, and prose with a stray mark in it is still prose.");
  ("IT ASKS THE SHARED READING RATHER THAN LISTING THE MARKS, which is the whole reason it can be trusted. Naming the four marks here would be a third place they are written down, and this gate would then pass on exactly the mark a later widening had just learned to catch - the failure it exists to stop, wearing the gate's own colours.");
  ("IT SPLITS ON ONE SPACE AND NOT ON RUNS OF THEM, so a double space becomes an empty word and an empty word is one of the four marks. That catches the other half of the same fault: a row the table left blank contributed nothing to the line but the space beside it, and the join left two.");
  ("WHAT IT CANNOT SEE IS THE ROW OF DOTS, because that mark is three words with spaces between them and no single word of it is the mark. It is left uncaught rather than special-cased: the dots are dropped by the same reading as the rest, so a leak of them means the reading itself stopped being asked, and the two marks this does see would leak in the same breath.");
  ("IT REFUSES TO PASS ON NO BANDS AT ALL. A gate that walks whatever it finds goes green the day it finds nothing, and stays green, and says the same word it said when everything was checked.");
  ("THE EXACT CHECK WOULD BE TO BUILD EACH BAND AGAIN AND COMPARE, and it is not what this does. That walks a table of a few hundred megabytes fifteen times and would add minutes to a gate run that already takes a quarter of an hour, to answer a question this answers in no time at all. What it would catch beyond this is a band gone stale in some way that leaves no mark in the text - which is worth a command somebody runs on purpose, and is not worth taxing every run.");
  let chapters = bible_glyph_chapters_rosetta_lines();
  let asked = fn_name("bible_glyph_gloss_placeholder_is");
  list_empty_not_is_assert_json(chapters, {
    hint: "no Rosetta band was found at all, so this gate checked nothing and would have passed for that reason - the bands are named one by one next door and the list has come up empty",
    asked,
  });
  let leaked = [];
  let lines = 0;
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let verses = property_get(chapter, "verses");
    for (let verse of verses) {
      lines = add(lines, 1);
      let english = property_get(verse, "english");
      let verse_number = property_get(verse, "verse_number");
      let words = text_split(english, " ");
      for (let word of words) {
        let notation = bible_glyph_gloss_placeholder_is(word);
        if (not(notation)) {
          continue;
        }
        list_add(leaked, {
          chapter_code,
          verse_number,
          word,
          english,
        });
        break;
      }
    }
  }
  list_empty_is_assert_json(leaked, {
    hint: "these Rosetta bands print the interlinear's own notation as if it were scripture, so a reader meets a mark nobody put there and cannot tell it from a word - rebuild the bands for the chapters named here",
    asked,
    leaked,
  });
  let r = {
    chapters: list_size(chapters),
    lines,
  };
  return r;
}
