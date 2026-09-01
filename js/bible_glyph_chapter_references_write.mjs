import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapters_canon_order } from "./bible_glyph_chapters_canon_order.mjs";
import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { bible_glyph_chapter_reference_entry_text } from "./bible_glyph_chapter_reference_entry_text.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_chain_spliced } from "./bible_glyph_chapter_chain_spliced.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapter_references_write() {
  arguments_assert(arguments, 0);
  ("Writes the light list of picture Bible chapters out of the chapters themselves, so landing a chapter stops being a hand edit in a second file.");
  ("NOTHING IN THAT LIST IS AUTHORED - every code and every reference is already spelled in a chapter file - so there was never anything for a person to decide there, only something for a person to forget. The gate beside it has always known the correct answer and printed it to paste; this is that same answer written down instead of read out.");
  ("IT SPLICES THE LIST AND LEAVES THE WORDS ALONE. Everything the file says about why a second copy of the chapter list exists at all is authored and is the reason the picture Bible page is affordable, so what gets replaced is exactly the run of entries between the line that opens the list and the line that hands it back.");
  ("THE ORDER IS SCRIPTURE'S AND NOT THE ORDER THE CHAPTERS WERE WRITTEN IN, because that is the order a reader meets them in: the arrows either side of a chapter and the rows of the index both read this list, and a build log would send a reader from Mark to Exodus.");
  ("It reports whether the file moved, because a run that agreed with what was already there and a run that did nothing leave the same file behind. Landing a chapter says true and running it again straight away says false, and that second answer is what proves the first wrote everything it had.");
  let chapters = bible_glyph_chapters();
  let ordered = bible_glyph_chapters_canon_order(chapters);
  let entries = list_map_join_empty(
    ordered,
    bible_glyph_chapter_reference_entry_text,
  );
  let f_name = fn_name("bible_glyph_chapter_references");
  let written = await bible_glyph_chapter_chain_spliced(
    f_name,
    "  let references = [\n",
    "  ];\n  return references;",
    entries,
  );
  let r = {
    chapters: list_size(ordered),
    written,
  };
  return r;
}
