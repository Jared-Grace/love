import { ebible_text_to_speech_chapter_generic } from "./ebible_text_to_speech_chapter_generic.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
export async function ebible_text_to_speech_chapter(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Reads one chapter and speaks it, returning the note of which recorded piece holds which verse - the whole of generating a chapter's audio, asked for by its code and nothing else.";
  "★ IT HANDS BACK THE MANIFEST RATHER THAN SWALLOWING IT, WHICH IS THE ONLY WAY TO FIND OUT WHETHER THE GENERATION LINED UP. The pieces the engine returns are supposed to be one per verse, and when they are not, nothing throws and nothing is missing from the disk - there is simply a folder of audio nobody can point a verse at. The manifest says ALIGNED or does not, so returning it is what makes the run checkable instead of merely finished.";
  let verses = await ebible_verses(bible_folder, chapter_code);
  let manifest = await ebible_text_to_speech_chapter_generic(
    bible_folder,
    verses,
    chapter_code,
  );
  return manifest;
}
