import { arguments_assert } from "./arguments_assert.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function lyric_timing_lines_timed(starts, texts, duration) {
  arguments_assert(arguments, 3);
  ("$plain starts");
  ("$plain texts");
  ("$plain duration");
  ("The lines of a timing document, built from the moments somebody tapped while listening.");
  ("A LINE ENDS WHERE THE NEXT ONE BEGINS, because that is the only thing anybody actually heard. Tapping marks beginnings; there is no second tap for an ending, and asking for one would double the work of a whole song to record a number already known. The sliver taken off the end is so that two lines never stand on the same frame of the video.");
  ("The last line runs to the end of the song. Nothing follows it to lean on, and letting it stand is right anyway - the singing stops and the words stay up while the sound fades.");
  ("Times are rounded to hundredths. Nobody taps to the microsecond, so the further digits are a claim about the person's hand that the person's hand cannot support, and a document meant to be read and corrected by hand should not carry numbers nobody can check.");
  ("A LINE NOBODY HAS TAPPED YET COMES OUT WITH NO TIMES AT ALL, AND ROUNDING IT WOULD HAVE GIVEN IT ZERO. Nothing times a hundred is nothing as far as arithmetic is concerned, and nothing divided by a hundred is nothing again, so an untapped line quietly acquired the one time in the song that is never a mistake to look at: the very first moment. That happened to the closing Hallelujah of Psalm a hundred and forty-eight, which was written as beginning at second zero and running the whole length of the song, so the video carried it over every other line from the first frame to the last. The screen that collects the taps says in as many words that an untimed line stays nothing rather than becoming a zero, because zero is a real moment; this is the one place that promise was being broken, and it was broken silently, by arithmetic rather than by a decision.");
  ("A LINE ENDS WHERE THE NEXT TAPPED LINE BEGINS, WHICH IS NOT ALWAYS THE NEXT LINE. Somebody who stopped tapping partway leaves a run of untimed lines behind them, and the line before that run has to end somewhere; leaning on the line immediately after it would lean on nothing. So the search walks forward to the next line that has a beginning, and where there is none - the run reaches the end of the passage - the ordinary last-line rule applies and it runs to the end of the song.");
  let gap = 0.05;
  function seconds_rounded(seconds) {
    let hundredths = multiply_round(seconds, 100);
    let rounded = divide(hundredths, 100);
    return rounded;
  }
  function timed_is(start) {
    let r = number_is(start);
    return r;
  }
  function line_at(start, index) {
    let b = timed_is(start);
    let untimed = not(b);
    if (untimed) {
      let blank = {
        start: null,
        end: null,
        text: texts[index],
      };
      return blank;
    }
    let after = starts.slice(index + 1).find(timed_is);
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
