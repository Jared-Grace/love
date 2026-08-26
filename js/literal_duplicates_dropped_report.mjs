import { fn_name } from "./fn_name.mjs";
import { literal_duplicates_dropped } from "./literal_duplicates_dropped.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_column_right } from "./text_column_right.mjs";
import { json_to } from "./json_to.mjs";
export async function literal_duplicates_dropped_report() {
  "Human-readable listing of the repeated constants the safe list never offers, widest first, so the largest thing nobody is looking at is the top line.";
  ("Its twin ",
    fn_name("literal_duplicates_report"),
    " prints what the finder found; this prints what the finder found and the gate then set aside. Read together they say how much of the finding survives the judgment, which is the one number neither of them says alone.");
  ("Every file is printed rather than the first few. A trimmed list reads as a summary of a set somebody has already agreed to act on, and this is the opposite of that - a set nobody has looked at, where the whole question is whether the spelling means the same thing in all of them.");
  let dropped = await literal_duplicates_dropped();
  let total = 0;
  for (let entry of dropped) {
    let count = entry.files.length;
    total = add(total, count);
    let contested = "";
    let shared = greater_than(entry.claimed, 1);
    if (shared) {
      contested = "  | " + entry.claimed + " getters hold this spelling";
    }
    let size = String(count);
    let head =
      text_column_right(size, 4) +
      "  " +
      entry.f_name +
      " = " +
      json_to(entry.literal) +
      contested;
    console.log(head);
    console.log("      " + entry.files.join(" "));
  }
  console.log(
    "\n" +
      dropped.length +
      " repeated constants the safe list never offers, " +
      total +
      " sites",
  );
  let r = dropped.length;
  return r;
}
