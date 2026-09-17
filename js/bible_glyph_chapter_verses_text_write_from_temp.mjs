import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { error } from "./error.mjs";
import { bible_glyph_chapter_verse_text_write } from "./bible_glyph_chapter_verse_text_write.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_verses_text_write_from_temp(
  chapter_code,
  name,
) {
  "Rewrites many whole verses of one written picture Bible chapter in a single command, reading the verses from a drafted file in the throwaway folder.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It is handed straight to the single-verse writer, which uses it to name a file to read. It names nothing that runs.";
  "$plain name";
  "the bare name of a drafted file in the throwaway folder, without its folder and without its ending. It names a file to read and nothing that runs.";
  "REPAIRING A WHOLE CHAPTER IS ONE CHANGE, AND ASKING FOR IT ONE VERSE AT A TIME LEAVES NOTHING BEHIND. Eight chapters had already been rewritten a verse at a time before this existed, at one invocation each for fifty verses, and the repo's own rule is that a loop of invocations is the specification of a command nobody built yet. The single-verse writer beside this one stays exactly as it is and does all the work; this only decides which verses, in what order, and reports what it did.";
  "THE VERSES COME FROM A FILE BECAUSE A VERSE CANNOT SURVIVE A COMMAND LINE. The splitter that hands arguments over breaks on commas and on full stops, and scripture is made of both, so a verse passed as an argument arrives in pieces. A drafted file is the same door the repo already opens for a function too big to type as an argument, and the throwaway folder is writable when nothing else is.";
  "IT WRITES IN THE ORDER THE FILE GIVES AND STOPS AT THE FIRST REFUSAL, because the single-verse writer edits the chapter file in place and a later verse is found by searching the text a previous one has already changed. Carrying on past a refusal would write good verses into a file that is already wrong, and the report would then name a chapter that is half repaired without saying where it stopped.";
  arguments_assert(arguments, 2);
  let f_path = text_combine_3("scripts/temp/", name, ".json");
  let verses = await file_read_json(f_path);
  let none = list_size_equal(verses, 0);
  if (none) {
    error({
      hint: "the drafted file holds no verses, so there is nothing to write",
      f_path,
      chapter_code,
    });
  }
  let written = [];
  for (let verse of verses) {
    let one = await bible_glyph_chapter_verse_text_write(
      chapter_code,
      verse.verse_number,
      verse.text,
    );
    list_add(written, one.verse_number);
  }
  let r = {
    chapter_code,
    f_path,
    written,
  };
  return r;
}
