import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_from } from "./json_from.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_roots_drafted_glyph_set } from "./bible_glyph_roots_drafted_glyph_set.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_roots_drafted_names_mark(language, strongs) {
  arguments_assert(arguments, 2);
  ("Marks each named word in a drafted table as a name: proper_name is added to the end of its picture sequence, one commit per word. Hands back the rows as they were written.");
  ("$plain language");
  ("hebrew or greek, the word that picks the drafted table.");
  ("$plain strongs");
  ("the Strong's numbers of the names, joined by commas.");
  ("A NAME BUILT FROM TWO ROOTS READS AS A SENTENCE WITHOUT ITS MARK. Samuel drawn as ear and God is also God hears, and two neighbouring words that happen to end in ear and begin with God spell Samuel across the gap. The mark is what a single-root name already wears, so a compound name wearing it too is the same rule, not a new one.");
  ("THE NAMES ARE LISTED, NOT FOUND. Whether a gloss names a person is read by a person: a capital letter also starts God, Most High and Selah, none of them a name for this purpose.");
  ("A word already wearing the mark is refused rather than skipped, because a list that names it is a list somebody wrote wrong.");
  let names = {
    hebrew: fn_name("bible_glyph_roots_hebrew_drafted"),
    greek: fn_name("bible_glyph_roots_greek_drafted"),
  };
  let name = property_get_or_null(names, language);
  if (equal(name, null)) {
    assert_json(false, {
      language,
      hint: "say hebrew or greek",
    });
  }
  let path = function_name_to_path_absolute(name);
  let text = await file_read(path);
  let glyphs = {};
  for (let line of text_split_newline(text)) {
    let trimmed = line.trim();
    if (trimmed.startsWith('["') && trimmed.endsWith("],")) {
      let json = trimmed.slice(0, -1);
      let row = json_from(json);
      glyphs[row[0]] = row[2];
    }
  }
  let wanted = text_split_comma(strongs);
  for (let strong of wanted) {
    let glyph = property_get_or_null(glyphs, strong);
    if (equal(glyph, null)) {
      assert_json(false, {
        language,
        strong,
        hint: "no row has this number",
      });
    }
    let list = text_split_plus(glyph);
    if (list_includes(list, "proper_name")) {
      assert_json(false, {
        language,
        strong,
        glyph,
        hint: "this word is already marked as a name",
      });
    }
  }
  await ai_git_noted();
  let written = [];
  for (let strong of wanted) {
    let glyph = glyphs[strong];
    let row = await function_call_commit(bible_glyph_roots_drafted_glyph_set, [
      language,
      strong,
      glyph,
      glyph + "+proper_name",
    ]);
    list_add(written, row);
  }
  return written;
}
