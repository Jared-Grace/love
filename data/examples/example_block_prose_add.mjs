import { js_block_prose_add } from "../../js/js_block_prose_add.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
export const example = {
  fn: js_block_prose_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["how many lines the passage runs to"],
  kind: "transform",
  title: "Write a function's account of itself",
  note: [
    "An explanation here is a real statement rather than a stripped comment, so ",
    "it was always writable in principle and never once by name. That gap left ",
    "every newly authored function to be finished by hand purely to say what it ",
    "is for — the one step that broke an otherwise command-only path.",
    " ",
    "It goes first because that is where an account belongs: a reader meets it ",
    "before the work it accounts for.",
    " ",
    "One sentence, no comma and no full stop. The splitter that hands a joined ",
    "list of arguments over would read either mark as the end of this argument ",
    "and the start of another, so a sentence containing one arrives torn in two ",
    "and the verb refuses on argument count.",
  ],
  before: `export function f(passage) {
  let lines = passage_lines(passage);
  return lines;
}`,
  after: `export function f(passage) {
  "how many lines the passage runs to";
  let lines = passage_lines(passage);
  return lines;
}`,
};
