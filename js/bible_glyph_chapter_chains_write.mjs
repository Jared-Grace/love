import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapters_canon_order } from "./bible_glyph_chapters_canon_order.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { bible_glyph_chapter_chain_branch_text } from "./bible_glyph_chapter_chain_branch_text.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bible_glyph_chapter_chain_spliced } from "./bible_glyph_chapter_chain_spliced.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { function_unalias_exists_not } from "./function_unalias_exists_not.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapter_rosetta_lines_chain_branch_text } from "./bible_glyph_chapter_rosetta_lines_chain_branch_text.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapter_chains_write() {
  "Writes both of the per chapter chains out of the chapter list, so landing a chapter stops being two hand edits in two files.";
  "LANDING A CHAPTER TOOK FOUR HAND EDITS AND TWO OF THEM WERE THE SAME LIST WRITTEN AGAIN. The chapter list already says which chapters exist; the two chains said it a second and a third time, in a shape nothing checked, and the way you found out one of them had been missed was that a reader opened a chapter and got an empty page. Two of those four are now this one command. The two that remain are the ones carrying authored words rather than a repeat of the list.";
  "THE ADDRESSES STILL ARRIVE SPELLED OUT, which is the whole reason this is safe to generate. A bundler reads the file, not this command: by the time it looks, every address is a plain run of letters sitting in the source like any other, so each chapter keeps its own separately sendable piece and nothing about what a reader downloads changes.";
  "THE ORDER IT WRITES IS SCRIPTURE'S AND THE ORDER IT FOUND WAS THE ORDER THE CHAPTERS HAPPENED TO BE AUTHORED IN, so its first run reorders both chains. That is safe by reading rather than by trying it: every branch is guarded on the chapter code being one exact word, no two branches name the same word, so at most one of them can ever run and no branch is able to see what an earlier one did. A list of independent guards has no order.";
  "THE LINES CHAIN NAMES ONLY THE CHAPTERS WHOSE LINES HAVE ACTUALLY BEEN WRITTEN, and that is what keeps a half-landed chapter from breaking everything. A chapter is drawn first and its lines are written by a later step, so between the two there is a chapter that belongs on the list and has no lines file. Naming it anyway wrote an address to a file that was not there, and an address to a file that is not there does not fail where it was written - it fails in every app that reaches this lookup, and it fails at build time, saying the app is broken. That cost nine deployments before anybody looked at the chain rather than at the app.";
  "The chapters left out are given back rather than passed over in silence, because a chapter missing from the chain looks exactly like a chapter nobody has drawn, and the difference between not yet and never is the whole of whether somebody needs to go and finish it. They come back on the next run once their lines exist, so this heals itself and needs no repair step beside it.";
  "The fetch chain is not filtered this way and does not need to be. What it names is the drawn chapters themselves, and the list it reads is built by calling each one - so a chapter in that list whose file was missing would have stopped this command from running at all, long before it wrote anything.";
  arguments_assert(arguments, 0);
  ("IT TAKES ITS CODES FROM THE CHAPTERS THEMSELVES AND NOT FROM THE LIGHT LIST, WHICH IS THE ONE ORDERING THIS COMMAND CANNOT SURVIVE OTHERWISE. The light list is written by the step that runs immediately before this one in the landing wrapper, and a module is read once per process: this command asking for it gets the copy that was loaded before that step wrote anything, so a chapter landed today is missing from both chains and the run says it succeeded. That is not a hypothesis - on 2026-09-02 Mark eight landed with its reference and its band written and neither chain naming it, the answer here said thirty six chapters while the band step beside it said thirty seven, and the chapter could not be opened at all until both chains were written again from a fresh process. The chapters are what the light list is itself derived from, so reading them instead is the same answer taken one link earlier, where nothing in the run rewrites it.");
  let chapters = bible_glyph_chapters();
  let ordered = bible_glyph_chapters_canon_order(chapters);
  let chapter_codes = list_map_property(ordered, "chapter_code");
  let fetch_chain = list_map_join_empty(
    chapter_codes,
    bible_glyph_chapter_chain_branch_text,
  );
  let f_name = fn_name("bible_glyph_chapter_fetch_found");
  let f_name3 = fn_name("not_equal");
  let before_text = text_combine_multiple([
    "  let found = ",
    f_name3,
    "(stored, null);",
  ]);
  let fetch_written = await bible_glyph_chapter_chain_spliced(
    f_name,
    "  let stored = null;\n",
    before_text,
    fetch_chain,
  );
  let rosetta_codes = [];
  let lineless = [];
  for (let chapter_code of chapter_codes) {
    let lines_name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
    let lines_missing = await function_unalias_exists_not(lines_name);
    if (not(lines_missing)) {
      list_add(rosetta_codes, chapter_code);
    }
    if (lines_missing) {
      list_add(lineless, chapter_code);
    }
  }
  let rosetta_chain = list_map_join_empty(
    rosetta_codes,
    bible_glyph_chapter_rosetta_lines_chain_branch_text,
  );
  let f_name2 = fn_name("bible_glyph_chapter_rosetta_lines_fetched_known");
  let f_name4 = fn_name("not_equal");
  let before_text2 = text_combine_multiple([
    "  let known = ",
    f_name4,
    "(found, null);",
  ]);
  let rosetta_written = await bible_glyph_chapter_chain_spliced(
    f_name2,
    "  let found = null;\n",
    before_text2,
    rosetta_chain,
  );
  let r = {
    chapters: list_size(chapter_codes),
    rosetta: list_size(rosetta_codes),
    lineless,
    fetch_written,
    rosetta_written,
  };
  return r;
}
