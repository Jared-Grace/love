import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function html_navigation_back_forward_is() {
  "Whether this page was loaded by the back or forward button rather than by a link, a typed address or a reload. BESPOKE (performance) - do NOT auto-canonicalize.";
  "A page restored whole from the browser's back cache runs nothing again, so it never asks; this answers for the page that was loaded fresh onto an old step.";
  let entries = performance.getEntriesByType("navigation");
  let entry = entries[0];
  if (not(entry)) {
    return false;
  }
  let back_forward = equal(entry.type, "back_forward");
  return back_forward;
}
