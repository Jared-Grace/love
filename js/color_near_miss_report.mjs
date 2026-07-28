import { colors_near_miss_findings } from "./colors_near_miss_findings.mjs";
import { each } from "./each.mjs";
import { log } from "./log.mjs";
import { property_get } from "./property_get.mjs";
export async function color_near_miss_report() {
  "print every near miss colour pair with the files on each side, whether the ratchet already knows about it or not. The gate says what is new; this says what there is, which is the list to work from when collapsing a colour family onto one shared value.";
  let findings = await colors_near_miss_findings();
  function print_one(finding) {
    let pair = property_get(finding, "pair");
    let files = property_get(finding, "files");
    let files_other = property_get(finding, "files_other");
    log(color_near_miss_report.name, {
      files,
      files_other,
    });
  }
  each(findings, print_one);
  let r = findings.length;
  return r;
}
