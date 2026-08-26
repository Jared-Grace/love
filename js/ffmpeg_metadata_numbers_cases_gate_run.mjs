import { property_get } from "./property_get.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
import { ffmpeg_metadata_numbers_cases } from "./ffmpeg_metadata_numbers_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function ffmpeg_metadata_numbers_cases_gate_run() {
  "QA gate: the readings ffmpeg prints while it is measuring are still being got out of what it prints, with the right number filed at the right second.";
  "THIS ONE IS HELD BECAUSE IT FAILS BY ANSWERING NOTHING. A parser that stops recognising the print format does not throw and does not complain - it hands back an empty list, and everything standing on it then works out a correction of nothing from a lean of nothing and writes a file that sounds exactly like the one it was asked to repair. There is no red anywhere in that, which is why the format has to be pinned here rather than trusted to show up in a result.";
  "Throws so the dispatcher seam exits nonzero.";
  function answer(one_case) {
    let printed_text = property_get(one_case, "printed_text");
    let metadata_key = property_get(one_case, "metadata_key");
    let readings = ffmpeg_metadata_numbers(printed_text, metadata_key);
    return readings;
  }
  let cases = ffmpeg_metadata_numbers_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "readings",
    "why",
    "readings got out of what ffmpeg printed while measuring",
  );
  return r;
}
