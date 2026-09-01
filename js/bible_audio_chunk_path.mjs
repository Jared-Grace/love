import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { bible_audio_folder_mp3_path } from "./bible_audio_folder_mp3_path.mjs";
export function bible_audio_chunk_path(bible_folder, chapter_code, chunk) {
  "$plain bible_folder";
  "$plain chapter_code";
  "$plain chunk";
  "Where the sound of one piece of a recorded chapter is kept.";
  "★ THE ADDRESS IS ASKED FOR IN ONE PLACE BECAUSE TWO READERS OF THE SAME PIECES MUST NEVER DISAGREE ABOUT WHERE THEY ARE. One of them measures how long each piece lasts and the other hands the pieces over to be joined end to end. Were they to spell the name apart, a change to how a piece is named would move one and not the other, and the video would then be timed against sound it was not made from - which is a fault nobody can see in the code and everybody can hear in the video.";
  "WHAT IS LEFT HERE IS THE ONE THING A PIECE DECIDES, WHICH IS THAT IT IS NAMED FOR ITS NUMBER. The folder and the ending are the same for every sound file of a chapter and are asked for by name now, so they cannot drift away from the joined whole that sits beside these pieces.";
  arguments_assert(arguments, 3);
  let t = text_to(chunk);
  let p = bible_audio_folder_mp3_path(bible_folder, chapter_code, t);
  return p;
}
