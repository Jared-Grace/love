import { less_than } from "./less_than.mjs";
import { js_colors_written } from "./js_colors_written.mjs";
import { color_parse } from "./color_parse.mjs";
import { colors_near_miss_is } from "./colors_near_miss_is.mjs";
export async function colors_near_miss_findings() {
  "every pair of colours in js that read as the same colour without being it, each finding naming both spellings, how far apart they are, and the files on each side. Sorted so the answer is the same on every run, which is what lets a ratchet compare today's list against yesterday's.";
  let written = await js_colors_written();
  let spellings = Object.keys(written).sort();
  let readable = [];
  for (let spelling of spellings) {
    let parsed = color_parse(spelling);
    if (parsed) {
      readable.push({
        spelling,
        parsed,
      });
    }
  }
  let findings = [];
  for (let i = 0; less_than(i, readable.length); i++) {
    for (let j = i + 1; less_than(j, readable.length); j++) {
      let left = readable[i];
      let right = readable[j];
      let near = colors_near_miss_is(left.parsed, right.parsed);
      if (near) {
        findings.push({
          pair: left.spelling + " ~ " + right.spelling,
          files: written[left.spelling],
          files_other: written[right.spelling],
        });
      }
    }
  }
  return findings;
}
