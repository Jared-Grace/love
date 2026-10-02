import { lyric_video_flags_ranked_cases } from "./lyric_video_flags_ranked_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_flags_ranked } from "./lyric_video_flags_ranked.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_flags_ranked_cases_gate_run() {
  "QA gate: each pile of flagged lines written down in the corpus comes back in the order the corpus says it should.";
  "★ WHAT IT GUARDS IS A READING ORDER, SO NOTHING IT GUARDS CAN EVER BREAK LOUDLY. Put the wrong order back and every line is still there, every number on every line is still right, every other gate stays green, and the only loss is that the person given two thousand of these looks at the wrong ones first and stops. An ordering has no error state at all - it has a good one and a useless one, and they are the same shape - which is the whole reason it needs a corpus rather than a check.";
  "The decision most at risk is the one the corpus spells out in its own words: that the distance ranks these and the direction does not. That was measured once against the only lines whose right answers are known, and it reads as counter-intuitive next to the reasoning it replaced, so it is exactly the kind of thing a later reader puts back.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = lyric_video_flags_ranked_cases();
  function answer(c) {
    let flagged = property_get(c, "flagged");
    let ranked = lyric_video_flags_ranked(flagged);
    let lines = list_map_property(ranked, "line");
    return lines;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "ranked",
    "name",
    "lyric video flags ranked",
  );
  return r;
}
