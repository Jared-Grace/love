import { literal_duplicates_unambiguous } from "./literal_duplicates_unambiguous.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { greater_than } from "./greater_than.mjs";
import { fn_name } from "./fn_name.mjs";
export async function literal_duplicates_gate_run() {
  "QA gate: no file spells out a value that a getter in its own family already";
  "holds. The repo has a finder for that shape, a narrower that drops the ones";
  "only looking repeated, and a verb that routes a site through the name - and";
  "until now nothing that noticed the set refilling, so each reader ran the finder";
  "and read the report again to learn there was nothing to do.";
  "The narrowed set is what this asks about, never the wide one. The wide report is";
  "correctly never empty: two roles that happen to share a size give two files";
  "spelling one word, and routing either through the other invents agreement";
  "nobody wrote. A gate over that would be red forever with no honest way to clear";
  "it, which is a gate that has stopped being evidence.";
  "The per-family lines below say which files are involved, and the one command at the end does the whole set. They are not two ways of saying the same thing: reading the lines is how a reader checks the narrowing was right before letting anything run, and copying them was only ever the way to act on it because nothing else could.";
  let offenders = await literal_duplicates_unambiguous();
  let verb = fn_name("functions_literal_route");
  let repair = fn_name("literal_duplicates_repair");
  for (let offender of offenders) {
    let joined = list_join_comma(offender.files);
    console.log("SPELLED OUT  " + JSON.stringify(offender.literal));
    console.log("  named by   " + offender.f_name);
    console.log("  spelled in " + joined);
    console.log(
      "  to route   node scripts/ai.mjs " +
        verb +
        " " +
        joined +
        " " +
        offender.f_name,
    );
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "duplicated constant gate: " +
      offenders.length +
      " values are named by a getter and still spelled out inside that getter's own family - node scripts/ai.mjs " +
      repair +
      " routes every one of them and commits each under its own name; the lines above say which files each one touches";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
  };
  return result;
}
