import { word_pictures_drawn_known_write } from "./word_pictures_drawn_known_write.mjs";
import { word_picture_wording } from "./word_picture_wording.mjs";
import { word_picture_folder } from "./word_picture_folder.mjs";
import { folder_attempt_next } from "./folder_attempt_next.mjs";
import { word_picture_path } from "./word_picture_path.mjs";
import { bfl_draw_write } from "./bfl_draw_write.mjs";
import { word_picture_note_path } from "./word_picture_note_path.mjs";
import { file_write_json } from "./file_write_json.mjs";
export async function word_picture_draw(word) {
  "$plain word";
  "Draw one more picture for one taught word with Black Forest Labs, using the wording that word already has written down, and save it as that word's next numbered attempt.";
  "IT TAKES THE WORD AND NOTHING ELSE, so it is one word to run and the same word twice asks for the same thing. The wording is not passed in: a wording typed at a command line is a wording nothing else can see, and the picture would then show something no reader of the code could account for.";
  "IT IS WIDE AND NOT SQUARE. The picture sits above the sentence explaining the word, in a column of text on a phone, so what it has to fit is the width of that column and as little height as will carry the drawing. Half as tall as it is wide is also the shape a strip of three panels wants, and a word that names work is drawn as a strip - so one shape serves both kinds and the game never has to ask which kind a word is.";
  "NOTHING ALREADY DRAWN IS WRITTEN OVER. Every draw is the next numbered attempt in that word's own folder, with the wording that made it written down beside it, because a wording is settled by drawing it several ways and looking at them together - and while each draw replaced the last there was never anything to look at together.";
  "IT WRITES THE TABLE OUT AGAIN BEFORE IT RETURNS, so the review screen can never be looking at a shorter list than the folders hold. The screen cannot count files itself, and a table refreshed by a separate command is a table somebody forgets - the picture is on disk, the screen does not show it, and nothing anywhere says why.";
  "IT COSTS MONEY EVERY TIME IT IS RUN. That is why it draws one word rather than sweeping the list: a sweep that is cheap to type is a sweep that gets typed twice.";
  let wording = word_picture_wording(word);
  let folder = word_picture_folder(word);
  let attempt = await folder_attempt_next(folder, ".png");
  let path = word_picture_path(word, attempt);
  let model = "flux-2-pro-preview";
  let width = 1024;
  let height = 512;
  await bfl_draw_write(model, wording, width, height, path);
  let drawn = {
    word,
    attempt,
    wording,
    path,
    width,
    height,
  };
  let file_path = word_picture_note_path(word, attempt);
  await file_write_json(file_path, drawn);
  await word_pictures_drawn_known_write();
  return drawn;
}
