import { colors_near_miss_findings } from "./colors_near_miss_findings.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function colors_near_miss_pairs() {
  "just the pair names out of the near miss findings, which is all the ratchet file needs to hold. The files a pair lives in move about as code moves about, so recording them would make the baseline go red on a rename; the pair of spellings is the finding itself and stays put until one of them is collapsed.";
  let findings = await colors_near_miss_findings();
  function pair_of(finding) {
    let pair = property_get(finding, "pair");
    return pair;
  }
  let pairs = list_map(findings, pair_of);
  return pairs;
}
