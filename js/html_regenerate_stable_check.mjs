import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { property_get } from "./property_get.mjs";
import { html_regenerate_stable_check_offenders } from "./html_regenerate_stable_check_offenders.mjs";
import { html_regenerate_paths } from "./html_regenerate_paths.mjs";
import { html_regenerate_stable_page } from "./html_regenerate_stable_page.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export async function html_regenerate_stable_check() {
  "Which pages here settle when they are written out again, and which turn into something that would change again on the next pass.";
  "What is asked of each one is that reading a page back gives what building it was given: parse, build, parse again, and the second answer is the first. A page with that property settles after one pass, which is what makes running the whole set safe to do at any time. A page without it drifts a little further every pass, and the drift is invisible in the moment because each single pass looks like a page.";
  "This is asked rather than assumed because the answer went wrong once and nothing said so. Measured 2026-08-23: every page failed it. Reading a page back handed the wrapped body over as though the app had written it, so building it wrapped it again - one pass turned 47 lines into 80, the next turned those into 113 - and it handed the title over as though it were the app's name, so six apps looked up their description under a sentence, found nothing, and lost every social tag they had.";
  "The ones that settled are named as well as the ones that did not, because an empty list of failures reads the same whether every page passed or no page was read. Every way this stops early - a folder renamed, a page shape no longer recognised, a refusal that grew to cover everything - empties the failures without touching them, so the ones that settled are what tell the two apart.";
  "And the ones no question could be asked of are named too, for the half of that same argument the first version missed. Naming what settled tells you the check ran; it does not tell you what it ran OVER. A page that falls out of the shape this can read leaves quietly, the settled list shrinks by one, and nothing distinguishes that from a page that was deleted - so coverage can drain away a page at a time under a report that says nothing but good news.";
  let paths = await html_regenerate_paths();
  let judged = await list_map_unordered_async(
    paths,
    html_regenerate_stable_page,
  );
  let asked = list_filter_property(judged, "skipped", null);
  let skipped = list_filter_property_not(judged, "skipped", null);
  let kept = list_filter_property(asked, "settled", true);
  let r = html_regenerate_stable_check_offenders(kept, asked);
  let offenders = property_get(r, "offenders");
  let settled = property_get(r, "settled");
  let report = {
    settled,
    offenders,
    skipped,
  };
  return report;
}
