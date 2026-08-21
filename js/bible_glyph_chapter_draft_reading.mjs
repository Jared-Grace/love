import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_glyph_draft_gap } from "./bible_glyph_draft_gap.mjs";
export async function bible_glyph_chapter_draft_reading(
  chapter_code,
  testament_name,
  traditions,
) {
  "Everything a draft of one chapter has to read before it can draw a single line: which glyph each root number is seated under, which characters each glyph group is spelled with, the chapter word by word, and the mark that stands where nothing is drawn.";
  "$plain chapter_code";
  "$plain testament_name";
  "$plain traditions";
  "IT IS THE OPENING THE TWO DRAFTS SHARED, and they shared it word for word. The dotted draft and the glossed draft ask different questions of the same chapter and so differ entirely in their loops, but neither can begin until these four things are in hand, and each was fetching all four itself. Two copies of a reading drift rather than break: improving one - a cache, a testament that resolves differently, a gap mark that changes - leaves the other drawing from the old reading with nothing anywhere to say so.";
  "THE ROOT TABLE IS READ AND NOT HANDED BACK, because nothing downstream of here wants it. Both drafts asked the table only to build the seated lookup out of it and never looked at it again, so returning it would offer a caller a second, rawer way to ask the same question and invite the two to be used interchangeably when only one of them has been through the seating.";
  "It fetches rather than decides. There is no judgment anywhere in here about a word, a verse or a picture - those belong to whichever draft called it, and that is why one helper can serve two drafts that disagree about almost everything else.";
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let lookup = bible_glyph_characters_lookup(traditions);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let gap = bible_glyph_draft_gap();
  let r = {
    drawn,
    lookup,
    verses,
    gap,
  };
  return r;
}
