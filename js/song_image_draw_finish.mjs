import { image_black_trim } from "./image_black_trim.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { song_image_drawn_note_path } from "./song_image_drawn_note_path.mjs";
import { song_image_drawn_attempts_known_write } from "./song_image_drawn_attempts_known_write.mjs";
export async function song_image_draw_finish(number, symbol, prompt, attempt) {
  "everything a couplet's picture needs after its bytes are on disk - cut the black away from the edges, write down what produced it, and say so";
  "it is its own function because there are two ways for the bytes to arrive. One draws a picture from nothing and one collects a picture that was already paid for, and both end here, so what is reported about a picture cannot depend on which road it came by.";
  "the record is written after the trim rather than before, so that the size it reports is the size the picture actually ended up";
  let path = song_image_drawn_path(number, attempt);
  let trimmed = await image_black_trim(path);
  let drawn = {
    number,
    attempt,
    symbol,
    prompt,
    path,
    box: trimmed.box,
  };
  let note_path = song_image_drawn_note_path(number, attempt);
  await file_write_json(note_path, drawn);
  await song_image_drawn_attempts_known_write();
  return drawn;
}
