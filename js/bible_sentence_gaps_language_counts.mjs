import { arguments_assert } from "./arguments_assert.mjs";
export function bible_sentence_gaps_language_counts() {
  "How many bibles at once to ask the counting about, where every reader of that many can be asked.";
  "It stops at four because of how fast the asking grows, not because of a belief about readers. Out of thirty-eight bibles there are 38 readers of one, 703 of two, 8436 of three and 73815 of four, and each of those is the whole sample counted again.";
  "Where to stop was guessed first and then measured, and the guess was wrong by enough to matter: three looked like the affordable end and four like another order of work, when in fact all four together take under a minute. The reading is the whole cost and the counting is nearly free, so what decides this is how many points a curve needs to show its shape rather than what the counting costs.";
  "The far end is not listed here. Every bible at once is one reader, so it is read off however many there are rather than typed - a number typed here would stop meaning every bible the moment one was added.";
  arguments_assert(arguments, 0);
  let counts = [1, 2, 3, 4];
  return counts;
}
