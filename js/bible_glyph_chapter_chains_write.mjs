import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { bible_glyph_chapter_chain_branch_text } from "./bible_glyph_chapter_chain_branch_text.mjs";
import { bible_glyph_chapter_chain_spliced } from "./bible_glyph_chapter_chain_spliced.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_rosetta_lines_chain_branch_text } from "./bible_glyph_chapter_rosetta_lines_chain_branch_text.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapter_chains_write() {
  "Writes both of the per chapter chains out of the chapter list, so landing a chapter stops being two hand edits in two files.";
  "LANDING A CHAPTER TOOK FOUR HAND EDITS AND TWO OF THEM WERE THE SAME LIST WRITTEN AGAIN. The chapter list already says which chapters exist; the two chains said it a second and a third time, in a shape nothing checked, and the way you found out one of them had been missed was that a reader opened a chapter and got an empty page. Two of those four are now this one command. The two that remain are the ones carrying authored words rather than a repeat of the list.";
  "THE ADDRESSES STILL ARRIVE SPELLED OUT, which is the whole reason this is safe to generate. A bundler reads the file, not this command: by the time it looks, every address is a plain run of letters sitting in the source like any other, so each chapter keeps its own separately sendable piece and nothing about what a reader downloads changes.";
  "THE ORDER IT WRITES IS SCRIPTURE'S AND THE ORDER IT FOUND WAS THE ORDER THE CHAPTERS HAPPENED TO BE AUTHORED IN, so its first run reorders both chains. That is safe by reading rather than by trying it: every branch is guarded on the chapter code being one exact word, no two branches name the same word, so at most one of them can ever run and no branch is able to see what an earlier one did. A list of independent guards has no order.";
  arguments_assert(arguments, 0);
  let references = bible_glyph_chapter_references();
  let chapter_codes = list_map_property(references, "chapter_code");
  let fetch_chain = list_map_join_empty(
    chapter_codes,
    bible_glyph_chapter_chain_branch_text,
  );
  let f_name = fn_name("bible_glyph_chapter_fetch_found");
  let fetch_written = await bible_glyph_chapter_chain_spliced(
    f_name,
    "  let stored = null;\n",
    text_combine_multiple([
      "  let found = ",
      fn_name("not_equal"),
      "(stored, null);",
    ]),
    fetch_chain,
  );
  let rosetta_chain = list_map_join_empty(
    chapter_codes,
    bible_glyph_chapter_rosetta_lines_chain_branch_text,
  );
  let f_name2 = fn_name("bible_glyph_chapter_rosetta_lines_fetched_known");
  let rosetta_written = await bible_glyph_chapter_chain_spliced(
    f_name2,
    "  let found = null;\n",
    text_combine_multiple([
      "  let known = ",
      fn_name("not_equal"),
      "(found, null);",
    ]),
    rosetta_chain,
  );
  let r = {
    chapters: list_size(chapter_codes),
    fetch_written,
    rosetta_written,
  };
  return r;
}
