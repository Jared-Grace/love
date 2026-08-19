import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_licence_marks } from "./ebible_licence_marks.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_unique } from "./list_unique.mjs";
export function ebible_text_licences(copyright_page) {
  "Every set of terms a licence page names, strictest first, rather than only the one that binds.";
  "Its plainer twin answers which terms the text is offered on and stops at the first mark it finds, because that is the one that binds and the rest change nothing. This one keeps going, because how many a page names is a different question from which of them wins.";
  "A page naming two is not wrong and not rare - the copyright holder's own terms sit near the top and a friendlier summary from whoever hosts them sits near the bottom. The reason to count them is that the choosing between two human statements is being made by a machine, and nobody has looked at how often it has to.";
  let lowered = text_lower_to(copyright_page);
  let marks = ebible_licence_marks();
  function marked_licence_or_null(entry) {
    let mark = property_get(entry, "mark");
    let marked = text_includes(lowered, mark);
    if (marked) {
      let licence = property_get(entry, "licence");
      return licence;
    }
    return null;
  }
  let found = list_map_filter_null_not_is(marks, marked_licence_or_null);
  let licences = list_unique(found);
  return licences;
}
