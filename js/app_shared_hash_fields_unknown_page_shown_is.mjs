import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_hash_fields_unknown_findings } from "./app_shared_hash_fields_unknown_findings.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { app_shared_hash_fields_unknown_screen } from "./app_shared_hash_fields_unknown_screen.mjs";
export function app_shared_hash_fields_unknown_page_shown_is(
  context,
  hash,
  fields,
) {
  "The same question as the one next door, asked by a page that has not built anything yet: did the link say something none of these fields can make sense of, and has the reader been shown so?";
  "The difference is who prepares the page. A page that already has a body to draw into hands that body over; a page checking its link before it does any work of its own has nothing yet, and drawing into a bare root gave the reader the browser's own unstyled default - small serif text against the left edge, which reads as a page that broke rather than as a page speaking to them. So this one lays down the plain reading defaults and the reading column first.";
  "It lays down the defaults every page shares rather than the size this particular reader chose, because the size is remembered under the name of the app whose page this is, and a page stopped this early may not have said yet which app it is. A wrong link is answered in the ordinary size and the answer is short; the alternative was the answering itself throwing, which left the reader with the page that never arrives.";
  "It lays them down only when there is something to say, so a good link is not charged an empty column above whatever the page builds next.";
  let findings = app_shared_hash_fields_unknown_findings(hash, fields);
  let all_known = list_empty_is(findings);
  if (all_known) {
    return false;
  }
  let root = html_mobile_default(context);
  let column = html_div(root);
  app_shared_content_column_pad(column);
  app_shared_hash_fields_unknown_screen(column, findings);
  return true;
}
