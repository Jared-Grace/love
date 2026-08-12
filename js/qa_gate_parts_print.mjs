import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_gate_parts_print(asked_ms, blamed_ms) {
  "Prints how long each part of the whole-repo run took: asking the gates, and working out who last touched what they named";
  "The whole number on its own is misleading in a way that costs real work. Nineteen minutes reads as nineteen minutes of gates, so whoever wants it faster goes looking for the slowest gate - and on the run that prompted this, the gates were four and a half minutes and the three parts after them were the other fourteen. Every plan made from the whole number was aimed at a quarter of the cost";
  "They are printed side by side rather than one being returned, because which of them is larger is the whole of what the reader wants and a single number cannot say it. They are also printed on the failing path, which is the only path a slow run ever takes";
  "There were three of these and the third was asking every red gate a second time out in the living folder. It was there for one fault only - a file caught half written by the copier - and the run stopped copying the living folder at all, so there is no longer anything for a second ask to tell apart. It was measured at two minutes of a nine minute run before it went";
  let line = text_combine_multiple([
    "\n=== how long each part took ===",
    "\n  asking the gates            ",
    asked_ms,
    " ms",
    "\n  who last touched what       ",
    blamed_ms,
    " ms",
  ]);
  console.log(line);
}
