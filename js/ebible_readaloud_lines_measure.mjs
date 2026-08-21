import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { ebible_readaloud_bible_folders } from "./ebible_readaloud_bible_folders.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
export async function ebible_readaloud_lines_measure() {
  "Every bible whose verses eBible's read-aloud edition cuts apart, measured for whether its chapters are written for reading aloud in as many lines as its pages mark verses.";
  "Each verse of a bible is now read as the line the reading-aloud text gives it, numbered by the mark its page carries. That only holds while the two counts agree. Where the lines outnumber the marks the reading falls off the end and says so; where the marks outnumber the lines the last verses of the chapter are quietly dropped instead, and nothing anywhere says a chapter came back short.";
  "A bible whose pages are not on this machine is named apart rather than counted as agreeing. Answering nothing for it would leave the record reading as though every bible had been looked at.";
  "Two sets of bibles are walked, not one, because two different things rest on this rule and they do not read the same bibles. What this repo ships is one set, and exactly one bible in it is English; what the search index walks is the other, fifty-three English bibles, and it cuts their verses out of the reading-aloud text by this very rule. Walking only the first left fifty-two of those unmeasured, so a chapter dropped out of the search went unnoticed by the one measuring that would have named it. The overlap is a single bible, so joining the two costs almost nothing and closes the whole gap.";
  let shipped = ebible_readaloud_bible_folders();
  let english = await ebible_versions_english_downloadable_cache();
  let bible_folders = list_concat_unique(shipped, english);
  let r = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_readaloud_lines_differ,
  );
  return r;
}
