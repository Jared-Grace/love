import { memory_frontmatter_defects } from "./memory_frontmatter_defects.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
export async function memory_frontmatter_name_mismatches() {
  "Every memory file whose header names it something other than its own file name. The two are supposed to be one identity: the instructions say a double-bracket link names another note's header name, while the checks that resolve those links match them against file names, so where the two disagree the written instruction points at nothing. Read-only.";
  "One view of the wider header sweep next door rather than a second reading of the same files, so the repair that acts on these and the gate that reports them cannot come to disagree about what counts as a wrong name.";
  let defects = await memory_frontmatter_defects();
  function is_name(defect) {
    let kind = property_get(defect, "kind");
    let b = equal(kind, "name");
    return b;
  }
  let mismatches = list_filter(defects, is_name);
  return mismatches;
}
