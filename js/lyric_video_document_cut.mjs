import { math_max } from "./math_max.mjs";
import { round } from "./round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import { number_is } from "./number_is.mjs";
export function lyric_video_document_cut(document, seconds) {
  "$plain document";
  "$plain seconds";
  "A copy of a lyric video's document as if its recording began the given number of seconds later: every line, word, card and picture moves earlier by that much, and the length shrinks by it. The document handed in is not changed.";
  "★ THE CUT IS MADE ON A COPY AT RENDER TIME, NEVER WRITTEN BACK. The document's times are measured against the recording as it was sung, and the hearings and the gates that check a document compare against that same recording. Written back shifted, every one of those checks would read the song as seconds out of time.";
  "A moment that lands before the new start is held at zero rather than going negative, so a picture that opened the film still opens it.";
  arguments_assert(arguments, 2);
  let json = json_to(document);
  let copy = json_from(json);
  function moved(moment) {
    let earlier = subtract(moment, seconds);
    let kept = math_max(earlier, 0);
    let n = multiply(kept, 100000);
    let top = round(n);
    let r = divide(top, 100000);
    return r;
  }
  function timed_move(timed) {
    if (number_is(timed.start)) {
      timed.start = moved(timed.start);
    }
    if (number_is(timed.end)) {
      timed.end = moved(timed.end);
    }
  }
  for (let line of copy.lines) {
    timed_move(line);
    for (let word of line.words || []) {
      timed_move(word);
    }
  }
  for (let card of copy.cards || []) {
    timed_move(card);
  }
  for (let picture of copy.pictures || []) {
    timed_move(picture);
  }
  copy.duration = moved(copy.duration);
  return copy;
}
