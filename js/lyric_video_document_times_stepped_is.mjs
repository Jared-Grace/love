import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { number_is } from "./number_is.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_document_times_stepped_is(document) {
  arguments_assert(arguments, 1);
  ("$plain document");
  ("Whether every line of a timing document begins the same distance after the line before it, which is a length divided out rather than anybody listening, so that writing times into it can take nothing away from anybody.");
  ("★ IT IS THE SAME DRAFTING ARITHMETIC THE FLUSH READING LOOKS FOR, READ OFF THE OTHER FIELD, AND IT EXISTS BECAUSE THE FLUSH READING LET TWO DRAFTS THROUGH. Giving every line an equal share of a song makes each line end on the moment the next begins and also makes every line begin the same distance after the last. Those are two consequences of one sum, so either one is evidence, but they do not survive equally. The ends are two numbers that have to match each other exactly, and bsb_PSA_106_1-12_take1 was drafted with starts rounded from a step of 4.3625 seconds, so 25 of its 27 ends landed on the next start and 2 landed a hundredth of a second away. That was enough for the flush reading to answer no, and the document was defended as a person's work for as long as it existed. Reading the step instead asks one question of the whole document rather than 27 separate questions any one of which can fail it.");
  ("★ THE HUNDREDTH OF A SECOND ALLOWED HERE IS NOT A TOLERANCE CHOSEN, IT IS THE GRAIN THE FIELD IS STORED IN. Starts are kept to the hundredth, so a constant step of 4.3625 reaches the file as 4.36 and 4.37 alternating, and two gaps measured off rounded numbers can differ by one hundredth and no more. Allowing exactly that admits every document the arithmetic can produce and nothing else. Measured across all 211 documents on 2026-10-02 the two drafts stand at a span of 0.010 seconds and the nearest document somebody really tapped at 1.400 seconds, a hundred and forty times further out, so there is no edge here to sit near and nothing to move.");
  ("★ A WRONG YES HERE DESTROYS AN AFTERNOON NOTHING CAN REDO, WHICH IS WHY IT ASKS FOR FOUR LINES AND NOT TWO. Three gaps agreeing to the hundredth is already beyond what a hand on a key produces, and a document of two or three lines has too little arithmetic in it to tell a sum from a coincidence. Refusing those costs a minute of a machine's listening done twice, which is the cheap side of the trade the guard above this one is built on.");
  ("A line with no start says the document is part timed and part not, which is somebody's afternoon interrupted rather than a draft, so it answers no - the same reading the flush test makes of the same shape. Only the starts are looked at: the step is the thing being read, and the ends are what the flush test already has.");
  let lines = document.lines;
  let listed = list_is(lines);
  if (not(listed)) {
    return false;
  }
  if (less_than(lines.length, 4)) {
    return false;
  }
  for (let line of lines) {
    let started = number_is(line.start);
    if (not(started)) {
      return false;
    }
  }
  let grain = 0.01;
  let least = null;
  let greatest = null;
  for (let number = 1; less_than(number, lines.length); number++) {
    let away = subtract(lines[number].start, lines[subtract(number, 1)].start);
    let gap = number_round_places(away, 2);
    let first = equal(least, null);
    if (first) {
      least = gap;
      greatest = gap;
    }
    if (less_than(gap, least)) {
      least = gap;
    }
    if (greater_than(gap, greatest)) {
      greatest = gap;
    }
  }
  let strayed = subtract(greatest, least);
  let span = number_round_places(strayed, 3);
  let stepped = less_than_equal(span, grain);
  return stepped;
}
