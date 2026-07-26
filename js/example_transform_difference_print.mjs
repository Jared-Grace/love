import { text_lines_first_difference } from "./text_lines_first_difference.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function example_transform_difference_print(title, text_got, text_want) {
  "Says where an example stopped matching what it declared, on the one line that first disagrees. Without this a failing example reports only its title, and finding the cause costs a hand-run of the transform plus a guess at which name moved - which is what a rename landing on one side and not the other looks like from the outside.";
  let difference = text_lines_first_difference(text_got, text_want);
  let missing_is = null_is(difference);
  if (missing_is) {
    console.log(
      "DIFF  " +
        title +
        "  the two agree line by line, so the difference is in spacing at the end",
    );
    return;
  }
  let line_number = property_get(difference, "line_number");
  let got = property_get(difference, "got");
  let want = property_get(difference, "want");
  console.log("DIFF  " + title + "  line " + line_number);
  console.log("  got   " + got);
  console.log("  want  " + want);
}
