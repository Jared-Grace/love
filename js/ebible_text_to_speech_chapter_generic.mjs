import { bible_verses_reading_units } from "./bible_verses_reading_units.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { text_to_speech } from "./text_to_speech.mjs";
import { bible_audio_verses_manifest_write } from "./bible_audio_verses_manifest_write.mjs";
export async function ebible_text_to_speech_chapter_generic(
  bible_folder,
  verses,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain verses";
  "$plain chapter_code";
  "Reads one chapter aloud into a folder of sound files, cut where a reader may stop rather than at every verse, and leaves beside them a note saying which file holds which verses.";
  "★ THE PIECES ARE JOINED WITH A LINE BREAK AND NOT WITH A SPACE, AND THAT ONE CHARACTER IS THE WHOLE REPAIR. The engine cuts what it is given into pieces at line breaks, so joining with spaces handed it a chapter with no seams in it, let it choose its own, and threw away every boundary in the process. Thousands of files on this disk were made that way and none of them can say where a verse begins. Joining at the boundary makes the engine's cut and this repo's cut the same cut.";
  "★ THE SEAM IS A VERSE BOUNDARY ONLY WHERE A VERSE ENDS THE THOUGHT, WHICH IS WHY THE PIECES ARE GATHERED FIRST. Cutting at every verse stops the reader in the middle of a clause wherever a sentence runs across a verse, and a genealogy read that way is thirty separate half-sentences. Gathering forward to the next full stop, question mark, exclamation mark, semicolon or colon leaves nine pieces in ten a single verse standing exactly where it stood, and repairs the tenth.";
  "★ IT IS THE ENGINE'S OWN RULE BEING USED RATHER THAN A MARK OF THIS REPO'S. The unit separator this repo splits pages on would have been the tidier choice and would not have worked, because the engine has never heard of it and would have read straight past it. Where the cutting is done by somebody else's code, the seam has to be spelled in their alphabet.";
  "★ THE NOTE IS WRITTEN AFTERWARDS AND FROM THE FILES, NOT BEFOREHAND AND FROM THE PLAN, WHICH IS WHY IT CAN BE BELIEVED. It compares the words each piece actually says to the words the piece was meant to say, so a chapter the engine cut some other way says so on the disk instead of quietly claiming verses it does not hold.";
  let units = bible_verses_reading_units(verses);
  let texts = list_map_property(units, "text");
  let text = texts.join("\n");
  let f = bible_audio_folder(bible_folder, chapter_code);
  await text_to_speech({
    text: text,
    path_output: f,
  });
  let manifest = await bible_audio_verses_manifest_write(
    bible_folder,
    chapter_code,
    units,
  );
  return manifest;
}
