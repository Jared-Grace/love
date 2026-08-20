import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_description_letters_most } from "./youtube_description_letters_most.mjs";
export function youtube_description_verses(opening, verses, closing) {
  "A run of Bible verses written out under a heading, ready to sit under a video or a playlist, cut where a verse ends if the whole of it would be more than youtube keeps.";
  "The words themselves are put there rather than a sentence about them, because a person looking for a passage searches for a line of it they remember, and only the words can answer that search.";
  "Youtube throws away a description over its length instead of shortening it, so the cutting has to happen before the writing rather than after, and a silently refused description leaves the video with nothing under it at all.";
  "The closing line is only added when something was left out, and the room is measured with that line already subtracted, so the sentence saying how much was cut can never itself be the thing that pushes it over.";
  arguments_assert(arguments, 3);
  let letters_most = youtube_description_letters_most();
  let left = subtract(letters_most, closing.length);
  let room = subtract(left, 2);
  let lines = [opening];
  let letters = opening.length;
  let cut = false;
  for (let verse of verses) {
    let line = verse.verse_number + " " + verse.text;
    if (greater_than(letters + line.length + 1, room)) {
      cut = true;
      break;
    }
    lines.push(line);
    letters = letters + line.length + 1;
  }
  if (cut) {
    lines.push(closing);
  }
  let description = lines.join("\n");
  return description;
}
