import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { literal_duplicates_unambiguous } from "./literal_duplicates_unambiguous.mjs";
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
  "The per-family detail still travels and still lets a reader check the narrowing was right before letting anything run - it is carried inside what the gate throws instead of printed beside it, which loses a reader nothing and is the whole difference between a reader and a reading. Whatever is printed or thrown outside the hint is read back as an accusation by whoever asks which app a red gate holds, and every line here named two innocents: the getter, which is the name to route TO, and the routing command itself.";
  "The files spelling the value out are the record, because they are the only thing here at fault.";
  let offenders = await literal_duplicates_unambiguous();
  let repair = fn_name("literal_duplicates_repair");
  let spelling = [];
  for (let offender of offenders) {
    let files = property_get(offender, "files");
    list_add_multiple(spelling, files);
  }
  let advice = text_combine_multiple([
    "these spell out a value a getter in their own family already holds - ",
    repair,
    " routes every one of them and commits each under its own name, and the families below say which file each one touches",
  ]);
  let hint = {
    advice,
    offenders,
  };
  let result = qa_gate_clean_assert(spelling, hint);
  return result;
}
