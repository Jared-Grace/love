import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_verse_word_redraw } from "./bible_glyph_chapter_verse_word_redraw.mjs";
export async function bible_glyph_chapters_word_readings_redraw() {
  arguments_assert(arguments, 0);
  ("Redraws every word a reader has read and decided, from the readings filed in data/bible_glyph_word_readings.json, each reading as its own commit and in the order filed.");
  ("THE READINGS ARE DATA, NOT CODE, because each is a judgment about one sentence and the next reader should be able to see and correct it without touching how it is applied. ORDER MATTERS, because two readings of one verse may hand a word from one picture to another.");
  ("A reading that no longer fits its verse stops the run and says which, rather than drawing the wrong picture; so once a batch has landed the file is emptied for the next one rather than run again.");
  await ai_git_noted();
  let readings = await file_read_json("data/bible_glyph_word_readings.json");
  let redrawn = 0;
  for (let reading of readings) {
    let v = String(reading.verse_number);
    let one = await function_call_commit(
      bible_glyph_chapter_verse_word_redraw,
      [reading.chapter_code, v, reading.from, reading.glyphs],
    );
    redrawn = redrawn + one.redrawn;
  }
  let r = {
    readings: readings.length,
    redrawn,
  };
  return r;
}
