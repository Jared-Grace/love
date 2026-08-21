import { g_arc_review_text } from "./g_arc_review_text.mjs";
import { g_arc_review_text_parse } from "./g_arc_review_text_parse.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
import { text_size } from "./text_size.mjs";
export function g_arc_review_round_trip_assert(arc, passages) {
  "Prove that an arc laid out to be read comes back as the same arc when the page is read again.";
  "THIS IS WHAT MAKES THE PAGE A FORM OF THE ARC rather than a picture of it. A reviewer edits the page and the edited page is read back in, so anything the laying out drops or the reading back cannot recognise is content lost between two steps that both looked like they worked. Rendered and read here in one breath, the two halves are checked against each other rather than against a description of the layout.";
  "The comparison is by JSON, so a field that arrived as the wrong shape fails as loudly as one that arrived with the wrong words.";
  let text = g_arc_review_text(arc, passages);
  let parsed = g_arc_review_text_parse(text);
  json_equal_assert_json(parsed, arc, {
    hint: "a review page and the arc it was laid out from have to hold the same thing, so either the laying out is dropping something or the reading back does not recognise a line it wrote itself",
  });
  let r = {
    characters: text_size(text),
  };
  return r;
}
