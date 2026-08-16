import { arguments_assert } from "./arguments_assert.mjs";
export function text_lines_ends_kept_cases() {
  "Worked examples of both ends of a text being kept and the middle counted, each saying what it is there to hold.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      text: "a\nb\nc",
      count: 40,
      kept: "a\nb\nc",
      why: "a text already shorter than what was asked for comes back the same text, so a caller can tell nothing happened by comparing them",
    },
    {
      text: "a\nb\nc\nd",
      count: 4,
      kept: "a\nb\nc\nd",
      why: "exactly as many lines as were asked for is not too many, so nothing is taken out",
    },
    {
      text: "a\nb\nc\nd\ne",
      count: 4,
      kept: "a\nb\n... 1 lines left out, both ends kept ...\nd\ne",
      why: "one line over, and the two ends are kept while the middle is said aloud rather than dropped",
    },
    {
      text: "a\nb\nc\nd\ne\nf\ng",
      count: 4,
      kept: "a\nb\n... 3 lines left out, both ends kept ...\nf\ng",
      why: "the count is split evenly between the two ends, so half comes from the top and half from the bottom",
    },
    {
      text: "a\nb\nc\nd\ne\nf\ng",
      count: 5,
      kept: "a\nb\n... 3 lines left out, both ends kept ...\nf\ng",
      why: "an odd count keeps one fewer than asked rather than one more, because going over is the failure that costs a reader something",
    },
    {
      text: "a\nb\nc\nd",
      count: 1,
      kept: "a\nb\nc\nd",
      why: "there is no pair of ends to keep below two, so the whole text comes back rather than a shortening nobody could read",
    },
    {
      text: "only one line",
      count: 40,
      kept: "only one line",
      why: "the shape almost every answer already has - one line - is never touched",
    },
  ];
  return cases;
}
