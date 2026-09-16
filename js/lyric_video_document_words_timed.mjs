import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_piece } from "./lyric_video_document_piece.mjs";
import { audio_pieces_words_timed } from "./audio_pieces_words_timed.mjs";
export async function lyric_video_document_words_timed(
  path_audio,
  path_document,
) {
  "$plain path_audio";
  "$plain path_document";
  "Every word of a song's lines with the second it begins and the second it ends in the recording, placed by the aligner that is handed the song's own words, together with how well those words matched the sound.";
  "★ IT IS THE ALIGNER'S ANSWER WHOLE, BECAUSE A LINE'S START IS ONLY ITS FIRST WORD. Placing lines already asks for every word and keeps one per line; a video that marks the word being sung needs the rest, and asking again for the part that was thrown away costs the same reading over.";
  "Nothing is written anywhere by this. The confidence comes back with the words, because an aligner handed the wrong song still answers with times that look right.";
  arguments_assert(arguments, 2);
  let document = await file_read_json(path_document);
  let piece = lyric_video_document_piece(path_audio, document);
  let pieces = await audio_pieces_words_timed([piece]);
  let aligned = pieces[0];
  return aligned;
}
