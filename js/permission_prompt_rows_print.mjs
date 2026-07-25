export function permission_prompt_rows_print(title, rows, keep) {
  "Prints the leading rows of a grouped wait report under a heading, widest column first so the counts line up and the eye runs down them.";
  console.log("\n" + title);
  let shown = rows.slice(0, Number(keep));
  for (let row of shown) {
    console.log(
      String(row.count).padStart(6) +
        "  worst " +
        String(row.seconds_worst).padStart(5) +
        "s  " +
        row.label,
    );
  }
  let hidden = rows.length - shown.length;
  if (hidden > 0) {
    console.log("       (" + hidden + " more labels)");
  }
}
