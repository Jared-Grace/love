import { text_column_right } from "./text_column_right.mjs";
import { json_to } from "./json_to.mjs";
import { literal_duplicates } from "./literal_duplicates.mjs";
("Human-readable listing of duplicated constants, widest first, so the next");
("cleanup is the top line. Reports only — migrating a literal to its getter");
("is a judgement call per constant (a shared property key is not debt).");
export async function literal_duplicates_report() {
  let found = await literal_duplicates();
  for (let f of found) {
    let s = String(f.files.length);
    console.log(
      text_column_right(s, 4) +
        "  " +
        f.f_name +
        " = " +
        json_to(f.literal) +
        "  |  " +
        f.files.slice(0, 4).join(" "),
    );
  }
  console.log("\n" + found.length + " duplicated constants");
  let r = found.length;
  return r;
}
