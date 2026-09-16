import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function lyric_video_document_piece(path_audio, document) {
  "$plain path_audio";
  "$plain document";
  "A song's recording paired with all its lines' words joined into one text, the shape the aligner is handed to lay the words onto the sound.";
  "★ THE LINES ARE JOINED INTO ONE TEXT AND NOT HANDED OVER ONE BY ONE, BECAUSE THE RECORDING IS ONE PIECE. Where each line begins is exactly what is not known yet, so there is nothing to cut the sound at; the aligner places the whole run of words, and the lines are counted back out of its answer afterwards.";
  arguments_assert(arguments, 2);
  function line_text(line) {
    let text = line.text;
    return text;
  }
  let texts = list_map(document.lines, line_text);
  let piece = {
    audio: path_audio,
    text: list_join_space(texts),
  };
  return piece;
}
