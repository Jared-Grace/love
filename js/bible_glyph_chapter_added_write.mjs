import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters_rosetta_lines } from "./bible_glyph_chapters_rosetta_lines.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { assert_json } from "./assert_json.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapters_count_stated_repair } from "./bible_glyph_chapters_count_stated_repair.mjs";
import { bible_glyph_chapter_references_write } from "./bible_glyph_chapter_references_write.mjs";
import { bible_glyph_chapter_chains_write } from "./bible_glyph_chapter_chains_write.mjs";
import { bible_glyph_chapter_bands_write } from "./bible_glyph_chapter_bands_write.mjs";
export async function bible_glyph_chapter_added_write(chapter_code) {
  arguments_assert(arguments, 1);
  ("Everything a newly written picture Bible chapter owes once its name has been added to the list, written in the one order that works, and committed a step at a time.");
  ("THE FOUR STEPS WERE ALREADY COMMANDS AND THE ORDER WAS STILL A SENTENCE. The list of chapters says in prose which four to run and in which order, and prose is the part of an instruction that gets skipped: the sequence has twice been rediscovered by a gate going red rather than by anybody remembering it. A wrapper turns the last unwritten piece of the procedure into something that cannot be got wrong, which is the same reason each of the four stopped being a hand edit.");
  ("THE ORDER IS NOT A STYLE. The band writer sends for a chapter by name over the network and can only find one the list already names, so it has to go last; the count in the prose is read off the list and has to be repaired before anything else reports how many chapters there are. Handed the steps in any other order a person gets a green answer from three of them and a failure from the fourth that reads like the chapter being broken.");
  ("IT REFUSES A CHAPTER THE LIST DOES NOT NAME rather than running four commands that will each quietly do nothing about it. That is the one mistake this is likely to be handed - the hand edit to the list forgotten, or the code misspelled - and the four commands underneath cannot tell either of those from a chapter that simply has nothing to do.");
  ("IT ALSO REFUSES A CHAPTER THAT ALREADY HAS ITS BANDS, and it refuses before it starts rather than after. The band writer will not write over a file that is already there, which is right - a generator overwriting hand written lines is how work disappears - but reached at the end of the run that refusal arrives minutes late, talks about a function name rather than about the chapter, and offers to have the old file deleted. Asked here it is one sentence: this chapter has already been landed.");
  ("EACH STEP COMMITS ITSELF UNDER ITS OWN NAME, so the log records four real commands with their real arguments rather than one word covering the lot, and a step that a peer sweep reaches first has lost one step rather than the whole run.");
  let chapters = bible_glyph_chapters();
  let codes = list_map_property(chapters, "chapter_code");
  let f_name = fn_name("bible_glyph_chapters");
  list_includes_assert_json(codes, chapter_code, {
    hint: text_combine_multiple([
      "this writes what a chapter owes once it is named in the list, and that chapter is not named there yet - add the import, the numbered binding and the array entry to ",
      f_name,
      " first, then run this again",
    ]),
  });
  let banded = bible_glyph_chapters_rosetta_lines();
  let banded_codes = list_map_property(banded, "chapter_code");
  let fresh = list_includes_not(banded_codes, chapter_code);
  assert_json(fresh, {
    chapter_code,
    hint: "this chapter already has its Rosetta band, so it has been landed once already and there is nothing here left to do for it",
  });
  await ai_git_noted();
  let count = await function_call_commit(
    bible_glyph_chapters_count_stated_repair,
    [],
  );
  let references = await function_call_commit(
    bible_glyph_chapter_references_write,
    [],
  );
  let chains = await function_call_commit(bible_glyph_chapter_chains_write, []);
  let bands = await function_call_commit(bible_glyph_chapter_bands_write, [
    chapter_code,
  ]);
  let r = {
    chapter_code,
    count,
    references,
    chains,
    bands,
  };
  return r;
}
