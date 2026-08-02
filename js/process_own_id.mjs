import { text_combine } from "./text_combine.mjs";
export function process_own_id() {
  "The number this very process is known by, written the way the machine lists it.";
  "It is answered as text rather than as a number because the one caller for it is comparing against the names in /proc, and those are text. Handing back a number would make every one of those comparisons quietly false, which is the worst possible way for this to be wrong: a caller ending everything working in a folder would end itself.";
  let number = process.pid;
  let id = text_combine("", number);
  return id;
}
