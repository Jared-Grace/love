import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { equal } from "./equal.mjs";
export function lyric_timing_lines_timed(starts, texts, duration) {
  arguments_assert(arguments, 3);
  ("$plain starts");
  ("$plain texts");
  ("$plain duration");
  ("The lines of a timing document, built from the moments somebody tapped while listening.");
  ("A LINE ENDS WHERE THE NEXT ONE BEGINS, because that is the only thing anybody actually heard. Tapping marks beginnings; there is no second tap for an ending, and asking for one would double the work of a whole song to record a number already known. The sliver taken off the end is so that two lines never stand on the same frame of the video.");
  ("The last line runs to the end of the song. Nothing follows it to lean on, and letting it stand is right anyway - the singing stops and the words stay up while the sound fades.");
  ("Times are rounded to hundredths. Nobody taps to the microsecond, so the further digits are a claim about the person's hand that the person's hand cannot support, and a document meant to be read and corrected by hand should not carry numbers nobody can check.");
  let gap = 0.05;
  function seconds_rounded(seconds) {
    let hundredths = multiply_round(seconds, 100);
    let rounded = divide(hundredths, 100);
    return rounded;
  }
  function line_at(start, index) {
    let after = starts[index + 1];
    let last = equal(after, undefined);
    let end = last ? duration : subtract(after, gap);
    let line = {
      start: seconds_rounded(start),
      end: seconds_rounded(end),
      text: texts[index],
    };
    return line;
  }
  let lines = starts.map(line_at);
  return lines;
}
