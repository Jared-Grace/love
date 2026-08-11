import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_gate_parts_print(asked_ms, blamed_ms, again_ms) {
  "Prints how long each part of the whole-repo run took: asking the gates, working out who last touched what they named, and asking the red ones again";
  "The whole number on its own is misleading in a way that costs real work. Nineteen minutes reads as nineteen minutes of gates, so whoever wants it faster goes looking for the slowest gate - and on the run that prompted this, the gates were four and a half minutes and the three parts after them were the other fourteen. Every plan made from the whole number was aimed at a quarter of the cost";
  "The three are printed side by side rather than one being returned, because which of them is largest is the whole of what the reader wants and a single number cannot say it. They are also printed on the failing path, which is the only path a slow run ever takes - a run with nothing to complain about never asks anything twice";
  let line = text_combine_multiple([
    "\n=== how long each part took ===",
    "\n  asking the gates            ",
    asked_ms,
    " ms",
    "\n  who last touched what       ",
    blamed_ms,
    " ms",
    "\n  asking the red ones again   ",
    again_ms,
    " ms",
  ]);
  console.log(line);
}
