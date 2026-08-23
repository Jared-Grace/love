import { list_map_property } from "./list_map_property.mjs";
import { text_to_speech } from "./text_to_speech.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { bible_audio_verses_manifest_write } from "./bible_audio_verses_manifest_write.mjs";
export async function ebible_text_to_speech_chapter_generic(
  bible_folder,
  verses,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Reads one chapter aloud into a folder of sound files, and leaves beside them a note saying which file holds which verse.";
  "★ THE VERSES ARE JOINED WITH A LINE BREAK AND NOT WITH A SPACE, AND THAT ONE CHARACTER IS THE WHOLE REPAIR. The engine cuts what it is given into pieces at line breaks, so joining with spaces handed it a chapter with no seams in it, let it choose its own, and threw away every verse boundary in the process. Thousands of files on this disk were made that way and none of them can say where a verse begins. Joining at the boundary makes the engine's cut and the verse's cut the same cut.";
  "★ IT IS THE ENGINE'S OWN RULE BEING USED RATHER THAN A MARK OF THIS REPO'S. The unit separator this repo splits pages on would have been the tidier choice and would not have worked, because the engine has never heard of it and would have read straight past it. Where the cutting is done by somebody else's code, the seam has to be spelled in their alphabet.";
  "★ THE NOTE IS WRITTEN AFTERWARDS AND FROM THE FILES, NOT BEFOREHAND AND FROM THE PLAN, WHICH IS WHY IT CAN BE BELIEVED. It reports whether the pieces and the verses came out equal in number, so a chapter the engine cut some other way says so on the disk instead of quietly claiming a verse it does not hold.";
  let texts = list_map_property(verses, "text");
  let text = texts.join("\n");
  let f = bible_audio_folder(bible_folder, chapter_code);
  await text_to_speech({
    text: text,
    path_output: f,
  });
  let manifest = await bible_audio_verses_manifest_write(
    bible_folder,
    chapter_code,
    verses,
  );
  return manifest;
}
