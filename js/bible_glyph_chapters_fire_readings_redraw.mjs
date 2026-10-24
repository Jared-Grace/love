import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_verse_fire_redraw } from "./bible_glyph_chapter_verse_fire_redraw.mjs";
export async function bible_glyph_chapters_fire_readings_redraw() {
  arguments_assert(arguments, 0);
  ("Redraws every bare fire picture that a reader has read and decided, from the readings filed in data/bible_glyph_fire_readings.json, each verse as its own commit.");
  ("THE READINGS ARE DATA, NOT CODE, because each is a judgment about one sentence and the next reader should be able to see and correct it without touching how it is applied. A verse whose fires no longer match its reading stops the run and says which, rather than drawing the wrong picture.");
  await ai_git_noted();
  let readings = await file_read_json("data/bible_glyph_fire_readings.json");
  let redrawn = 0;
  for (let reading of readings) {
    let v = String(reading.verse_number);
    let one = await function_call_commit(
      bible_glyph_chapter_verse_fire_redraw,
      [reading.chapter_code, v, reading.glyphs],
    );
    redrawn = redrawn + one.redrawn;
  }
  let r = {
    verses: readings.length,
    redrawn,
  };
  return r;
}
