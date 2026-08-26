import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
export function ffmpeg_stats_numbers(printed_text, stats_key) {
  "$plain printed_text";
  "$plain stats_key";
  "read the run of statistics ffmpeg printed while comparing two pictures, and answer the number filed under one name, once per frame it compared";
  "THIS IS A SECOND PRINT FORMAT AND NOTHING THAT READS THE FIRST ONE CAN READ IT. The measurement that listens prints one name and one number per line; the measurement that compares pictures prints every name it has on one line per frame, separated by spaces. A reader written for either one hands back nothing at all when given the other, which is the failure that looks like agreement.";
  "THE NAME IS MATCHED WITH ITS COLON ATTACHED, because the names on such a line are prefixes of one another. Asked for the average and matching on the bare word, a reader also takes the error figure the average was worked out from - two unrelated measurements interleaved, in a list of the right length holding numbers of the right sort, so nothing downstream notices.";
  "IDENTICAL PICTURES PRINT A WORD RATHER THAN A NUMBER, and that word is the most important answer this ever gives. When two frames match exactly there is no difference to express as a ratio, so the figure comes out as the word for boundless - and read as an ordinary number it becomes not-a-number, which then loses every comparison it is put into and quietly reports the best possible result as the worst. It is answered here as boundlessness itself, in both directions.";
  "It answers a list rather than a total, because a comparison that is perfect for most of its length and fails for a moment is exactly the fault worth finding, and a total hides it.";
  let key_prefix = text_combine_multiple([stats_key, ":"]);
  let numbers = [];
  let lines_printed = printed_text.split("\n");
  for (let line_text of lines_printed) {
    let parts_printed = line_text.split(" ");
    for (let part_text of parts_printed) {
      if (part_text.startsWith(key_prefix)) {
        let after_key = part_text.slice(key_prefix.length);
        let reading = Number.parseFloat(after_key);
        if (equal(after_key, "inf")) {
          reading = Number.POSITIVE_INFINITY;
        }
        if (equal(after_key, "-inf")) {
          reading = Number.NEGATIVE_INFINITY;
        }
        numbers.push(reading);
      }
    }
  }
  return numbers;
}
