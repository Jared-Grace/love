import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { bible_speech_spans } from "./bible_speech_spans.mjs";
export async function bible_speech_spans_chapter(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "One named chapter of one named bible, read off the disk and cut into runs of one voice.";
  "It exists so the cutting can be asked for by name from a command line, which is what makes it checkable against a chapter somebody can open and read. A parser whose only caller passes it a list built in code is a parser nobody has compared to a printed page.";
  arguments_assert(arguments, 2);
  let verses = await ebible_verses(bible_folder, chapter_code);
  let spans = bible_speech_spans(verses);
  return spans;
}
