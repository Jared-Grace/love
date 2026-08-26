import { property_get } from "./property_get.mjs";
import { ffmpeg_stats_numbers } from "./ffmpeg_stats_numbers.mjs";
import { list_map } from "./list_map.mjs";
import { ffmpeg_stats_numbers_cases } from "./ffmpeg_stats_numbers_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function ffmpeg_stats_numbers_cases_gate_run() {
  "QA gate: the statistics ffmpeg prints while comparing two pictures are still being got out of what it prints, boundlessness included.";
  "THIS ONE IS HELD BECAUSE IT FAILS BY ANSWERING NOTHING OR BY ANSWERING NOT-A-NUMBER, and both of those are quiet. An empty answer means every check standing on it concludes that a redrawn film matched its source, having compared no frames at all. A not-a-number answer means two frames that matched exactly are reported as the furthest apart anything has ever been. Neither throws, neither is red, and both arrive as a verdict somebody then acts on.";
  "THE ANSWERS ARE TURNED INTO WRITING BEFORE THEY ARE JUDGED, because boundlessness cannot survive being written out for comparison and would otherwise agree with its own absence.";
  "Throws so the dispatcher seam exits nonzero.";
  function answer(one_case) {
    let printed_text = property_get(one_case, "printed_text");
    let stats_key = property_get(one_case, "stats_key");
    let numbers = ffmpeg_stats_numbers(printed_text, stats_key);
    function written(one_number) {
      let r2 = String(one_number);
      return r2;
    }
    let numbers_written = list_map(numbers, written);
    return numbers_written;
  }
  let cases = ffmpeg_stats_numbers_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "numbers_written",
    "why",
    "numbers got out of what ffmpeg printed while comparing two pictures",
  );
  return r;
}
