import { literal_duplicates } from "./literal_duplicates.mjs";

// Human-readable listing of duplicated constants, widest first, so the next
// cleanup is the top line. Reports only — migrating a literal to its getter
// is a judgement call per constant (a shared property key is not debt).
export async function literal_duplicates_report() {
  let found = await literal_duplicates();
  for (let f of found) {
    console.log(
      String(f.files.length).padStart(4) +
        "  " +
        f.f_name +
        " = " +
        JSON.stringify(f.literal) +
        "  |  " +
        f.files.slice(0, 4).join(" "),
    );
  }
  console.log("\n" + found.length + " duplicated constants");
  return found.length;
}
