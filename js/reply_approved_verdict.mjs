import { equal } from "./equal.mjs";
export function reply_approved_verdict(text, approved) {
  "What a reviewer's verdict on one file amounts to right now: not looked at, passed as it stands, or passed in a wording it no longer has.";
  "★ THE THIRD ANSWER IS THE WHOLE REASON THE TEXT IS STORED. Two answers would be enough if a file never changed after being read, and the file that changes after being read is precisely the one a reviewer needs warning about. Comparing the lines makes that state say its own name, and it costs nothing to ask.";
  "Passed in a wording it no longer has is deliberately not the same as not looked at, even though neither may be acted on. They call for different things from a reader - one is a file to go and read, the other is a file to read again and a reason to wonder what moved under it.";
  "The words it answers with are for a person, not for a machine to branch on cleverly. They are three plain names because there are exactly three states, and a caller that got a fourth would be a caller reading something this never wrote.";
  let none = equal(approved, null);
  if (none) {
    let r = "none";
    return r;
  }
  let same = equal(approved, text);
  if (same) {
    let r2 = "approved";
    return r2;
  }
  let r3 = "stale";
  return r3;
}
