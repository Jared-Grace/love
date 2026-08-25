import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
export function permission_prompt_rows_print(title, rows, keep) {
  "Prints the leading rows of a grouped wait report under a heading, counts first so they line up and the eye runs down them.";
  "The last column is when it last happened, which is what turns the report into a check on a fix: a label that stops the hour a fix landed is the fix working, and one still counting today is not.";
  console.log("\n" + title);
  let v = Number(keep);
  let shown = rows.slice(0, v);
  for (let row of shown) {
    console.log(
      text_column_right(String(row.count), 6) +
        "  worst " +
        text_column_right(String(row.seconds_worst), 5) +
        "s  last " +
        row.latest.slice(5, 16) +
        "  " +
        text_column(row.verdict, 7) +
        row.label,
    );
  }
  let hidden = subtract(rows.length, shown.length);
  if (greater_than(hidden, 0)) {
    console.log("       (" + hidden + " more labels)");
  }
}
