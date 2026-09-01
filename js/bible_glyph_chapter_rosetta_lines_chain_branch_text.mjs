import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function bible_glyph_chapter_rosetta_lines_chain_branch_text(
  chapter_code,
) {
  "One chapter's branch of the chain that sends for its two Rosetta bands on its own, as the text it is spelled with.";
  "IT IS A SECOND RENDERER AND NOT A PARAMETER OF THE FIRST because the two branches differ in every word that is not punctuation: a different function name, a different local, a different variable being set, and an address long enough that it is written over three lines rather than one. A single renderer taking four words to fill in would be longer to read than both of these and would still have to be read twice to check either.";
  arguments_assert(arguments, 1);
  let lower = text_lower_to(chapter_code);
  let f_name = "bible_glyph_chapter_rosetta_lines_" + lower;
  let branch =
    '  if (equal(chapter_code, "' +
    chapter_code +
    '")) {\n    let lines_module = await import(\n      "./' +
    f_name +
    '.mjs"\n    );\n    found = lines_module.' +
    f_name +
    "();\n  }\n";
  return branch;
}
