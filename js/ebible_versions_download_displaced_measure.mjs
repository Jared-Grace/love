import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_download } from "./ebible_versions_download.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_verse_marks_displaced_bible } from "./ebible_verse_marks_displaced_bible.mjs";
export async function ebible_versions_download_displaced_measure() {
  "Every translation downloaded again from eBible, and then measured, on the spot, for verse marks whose id names a different verse from the one it prints.";
  arguments_assert(arguments, 0);
  ("The download and the measurement in one command because they were never joined and so the measurement was never repeated. The pages arrive months apart, and the only thing that could say a fault had been fixed - or that a new one had arrived - is measuring them again afterwards; nobody was going to remember to, and nothing asked them to.");
  ("Only what actually arrived is measured. A download that failed leaves the previous copy of the pages on disk, so measuring it would report last month's faults as this month's, and a corpus-wide sweep cannot tell those apart because it only sees files. Handing the arrived folders in is what makes the answer about the download that just happened.");
  ("The displaced marks are the one thing measured, out of the three checks over these pages. Every repeated id is a displaced one that happened to collide, so a sweep for repeats afterwards would find nothing this had not already named. Gaps are a separate question and deliberately not asked here - most of them are the translation's own text rather than the publishing, so a gap is a candidate for a person to judge, and re-judging the same few thousand candidates after every download is the opposite of what this is for.");
  let refreshed = await ebible_versions_download();
  let downloaded = property_get(refreshed, "downloaded");
  let failed = property_get(refreshed, "failed");
  let measured = await ebible_bibles_measure_generic(
    downloaded,
    ebible_verse_marks_displaced_bible,
  );
  let r = {
    failed,
    measured,
  };
  return r;
}
