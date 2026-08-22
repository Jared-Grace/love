import { image_black_trim } from "./image_black_trim.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { song_image_drawn_note_path } from "./song_image_drawn_note_path.mjs";
import { song_image_drawn_attempts_known_write } from "./song_image_drawn_attempts_known_write.mjs";
export async function song_image_draw_finish(
  number,
  symbol,
  prompt,
  attempt,
  drawn_by,
) {
  "everything a couplet's picture needs after its bytes are on disk - cut the black away from the edges, write down what produced it, and say so";
  "it is its own function because there are two ways for the bytes to arrive. One draws a picture from nothing and one collects a picture that was already paid for, and both end here, so what is reported about a picture cannot depend on which road it came by.";
  "the record is written after the trim rather than before, so that the size it reports is the size the picture actually ended up";
  "WHO DREW IT IS WRITTEN DOWN because there is now more than one answer and the picture does not carry it. The same model is reachable through two companies, and the attempts sit together in one folder in the order they were made, so a folder holding both is a folder nobody can sort afterwards - the comparison the second road was opened for would be lost inside the very evidence it was gathering.";
  "a record with no such line was written before there was a second road, and every one of those is Black Forest Labs. That is a fact about when the line was added rather than a rule about what an absence means, so nothing needs to guess.";
  let path = song_image_drawn_path(number, attempt);
  let trimmed = await image_black_trim(path);
  let drawn = {
    number,
    attempt,
    symbol,
    prompt,
    path,
    drawn_by,
    box: trimmed.box,
  };
  let note_path = song_image_drawn_note_path(number, attempt);
  await file_write_json(note_path, drawn);
  await song_image_drawn_attempts_known_write();
  return drawn;
}
