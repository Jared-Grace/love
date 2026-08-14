import { arguments_assert } from "./arguments_assert.mjs";
export function bible_sentence_gaps_language_counts() {
  "How many bibles at once to ask the counting about, where every reader of that many can be asked.";
  "It stops at three because of how fast the asking grows, not because of a belief about readers. Out of thirty-eight bibles there are 38 readers of one, 703 of two and 8436 of three, and each of those is the whole sample counted again; four would be 73815, which is another order of the same work for one more point on a curve that by then has a shape.";
  "The far end is not listed here. Every bible at once is one reader, so it is read off however many there are rather than typed - a number typed here would stop meaning every bible the moment one was added.";
  arguments_assert(arguments, 0);
  let counts = [1, 2, 3];
  return counts;
}
