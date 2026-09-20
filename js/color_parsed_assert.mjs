import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_is } from "./object_is.mjs";
import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { and } from "./and.mjs";
import { number_is } from "./number_is.mjs";
export function color_parsed_assert(parsed, where) {
  arguments_assert(arguments, 2);
  ("Stops, saying so, when what was handed over is not a colour that has been read into its four channels - a record holding a red, a green, a blue and an alpha, every one of them a number.");
  ("IT EXISTS BECAUSE THE MISTAKE IT CATCHES IS SILENT, AND SILENT IN THE DIRECTION OF SAYING NOTHING IS WRONG. Hand a reader of parsed colours the spelling instead - the very thing a colour is normally carried around as - and every channel it asks for comes back as nothing, every sum over those comes out not a number, every comparison against a threshold comes out false, and the answer is that these colours are fine. The reading never fails. It just stops being a reading, and reports the same word it reports when there is genuinely nothing to find.");
  ("This was not reasoned about in advance. It was found by a probe reporting no near misses at all across a whole app, twice, and being believed the first time. Parsing the spellings first turned the same probe's answer from none into two.");
  ("THE CALLER SAYS WHERE IT IS, BECAUSE THE MESSAGE HAS TO NAME THE REPAIR AND THE REPAIR IS AT THE CALL. What is wrong is almost never the colour; it is that somebody a level up passed the written form on without reading it. A throw saying only that a colour was malformed sends the reader to the wrong function.");
  let record = object_is(parsed);
  if (not(record)) {
    error({
      what: "a colour that had not been read into channels",
      where,
      given: parsed,
      repair: text_combine_multiple([
        "call ",
        fn_name("color_parse"),
        " on the written colour first, and hand on what it answers - a spelling read straight is not a fault this can see, it is four channels of nothing",
      ]),
    });
  }
  let left = number_is(parsed.red);
  let right = number_is(parsed.green);
  let channels =
    and(left, right) && and(number_is(parsed.blue), number_is(parsed.alpha));
  if (not(channels)) {
    error({
      what: "a colour record missing one of its four channels, or holding something that is not a number in one",
      where,
      given: parsed,
      repair:
        "every reader here does arithmetic on all four, so one absent channel makes every sum not a number and every comparison false",
    });
  }
}
