import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_complete_messages(noun) {
  arguments_assert(arguments, 1);
  ("the loving lines shown when the whole of something is done, noun naming what was done: review, or milestone - asked for by the human 2026-10-23, since a finished milestone was told it had finished a review");
  let r = [
    "You passed every quiz in this " + noun + " — beautiful work",
    "You finished the whole " + noun + " — wonderful job",
    "Every question complete — you did it",
    "All the way through — you should be proud",
    "You made it through the whole " + noun + " — amazing",
  ];
  return r;
}
