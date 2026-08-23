import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { location_pathname_part_first_starts_with } from "./location_pathname_part_first_starts_with.mjs";
import { not } from "./not.mjs";
export function app_shared_page_stage_latest_is() {
  arguments_assert(arguments, 0);
  ("Whether the page being read right now is the staged copy that gets handed to somebody, rather than the built site or the working copy kept for reading a change through.");
  ("The three stages are three folders, so this is asked the same way its sibling asks about the built one - by which folder the page is sitting in. Asked as whether the address is localhost it would answer wrongly for a phone on the home network, which has no localhost of its own and reaches these copies by the machine's name.");
  ("It exists because latest is not a working copy. The learner is pointed at it whenever the built site cannot be released, so anything a reader is deliberately shown less of on the built site has to be cut here too - and the one question that existed asked only whether a page was the built one, which put latest on the same side of the line as the folder nobody but the writer opens.");
  ("Asked where there is no page at all - a gate, a sweep, anything running here rather than in a browser - the answer is no, because a question about which folder the reader is sitting in has no reader to be about. That is also the answer those callers want: the repo holds everything that was written, and only somebody reading a page is handed less than that.");
  let b = browser_is();
  if (not(b)) {
    return false;
  }
  let latest = app_shared_name_latest_text();
  let r = location_pathname_part_first_starts_with(latest);
  return r;
}
