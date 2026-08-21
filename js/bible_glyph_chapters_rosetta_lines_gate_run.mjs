import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapters_rosetta_lines } from "./bible_glyph_chapters_rosetta_lines.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function bible_glyph_chapters_rosetta_lines_gate_run() {
  "Checks that every picture Bible chapter has its Rosetta bands named beside it, and that no bands are named for a chapter the pictures have dropped.";
  "IT EXISTS BECAUSE TWO HAND-KEPT LISTS OF THE SAME FIFTEEN THINGS DRIFTED APART AND NOTHING SAID SO. The pictures are written out in one list and the bands in another, and adding a chapter means adding it to both. Twelve chapters reached the first and never the second, so the key band on the page came up empty for four fifths of what had been authored - and nothing threw, because a list that is short is a perfectly good list. The symptom was a reader being told less than the repo knew, which is the quietest kind of wrong there is.";
  "IT COMPARES CHAPTER CODES AND NOT COUNTS. Two lists of fifteen can be the wrong fifteen, and a count would call that clean; the code is what a page looks a chapter up by, so the code is what has to agree.";
  "IT FAILS IN BOTH DIRECTIONS ON PURPOSE. Bands missing for a chapter is the fault that was found, and it is the one a reader meets. Bands named for a chapter that no longer has pictures is the opposite fault - a file left behind by a rename or a drop - and that one never surfaces at all, because nothing reads it and nothing misses it.";
  "IT PASSES AT ZERO AND WANTS NO BASELINE. The two lists were made to agree in the same commit that added this, so there is no queue of old offenders to ratchet past, and a gate that starts at zero is the only kind that can refuse the very next one.";
  let drawn = bible_glyph_chapters();
  let banded = bible_glyph_chapters_rosetta_lines();
  let drawn_codes = [];
  for (let chapter of drawn) {
    let item = property_get(chapter, "chapter_code");
    list_add(drawn_codes, item);
  }
  let banded_codes = [];
  for (let chapter of banded) {
    let item2 = property_get(chapter, "chapter_code");
    list_add(banded_codes, item2);
  }
  let bandless = [];
  for (let code of drawn_codes) {
    if (list_includes_not(banded_codes, code)) {
      list_add(bandless, code);
    }
  }
  let pictureless = [];
  for (let code of banded_codes) {
    if (list_includes_not(drawn_codes, code)) {
      list_add(pictureless, code);
    }
  }
  let agreed = list_empty_is(bandless) && list_empty_is(pictureless);
  assert_json(agreed, {
    bandless,
    pictureless,
    hint: text_combine_multiple([
      "bandless chapters draw pictures and have no Rosetta bands to open, so the key band on the page comes up empty for them - run the writer next door for each code and name the file it leaves in ",
      fn_name("bible_glyph_chapters_rosetta_lines"),
      "; pictureless codes are band files left behind after a chapter was renamed or dropped, so stop naming them there",
    ]),
  });
  let r = {
    drawn: drawn_codes.length,
    banded: banded_codes.length,
  };
  return r;
}
