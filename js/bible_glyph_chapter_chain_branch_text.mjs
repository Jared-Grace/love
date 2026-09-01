import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function bible_glyph_chapter_chain_branch_text(chapter_code) {
  "One chapter's branch of the chain that sends for a picture Bible chapter on its own, as the text it is spelled with.";
  "THE ADDRESS IS BUILT HERE AND STILL ARRIVES SPELLED OUT, which is the whole trick. A bundler reads the source file, not this function: by the time it looks, the address is a plain run of letters in the file like any other, so the chapter still gets its own separately sendable piece. What is generated is the writing, not the reading.";
  "It is one chapter rather than the whole chain because the chain has no shape of its own - it is thirty copies of this and nothing else - and a renderer for one branch can be read against one branch of the file it writes.";
  arguments_assert(arguments, 1);
  let lower = text_lower_to(chapter_code);
  let f_name = "bible_glyph_chapter_" + lower;
  let branch =
    '  if (equal(chapter_code, "' +
    chapter_code +
    '")) {\n    let chapter_module = await import("./' +
    f_name +
    '.mjs");\n    stored = chapter_module.' +
    f_name +
    "();\n  }\n";
  return branch;
}
