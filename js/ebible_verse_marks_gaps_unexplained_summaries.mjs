import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verse_marks_gaps_measure } from "./ebible_verse_marks_gaps_measure.mjs";
import { ebible_verse_marks_displaced_measure } from "./ebible_verse_marks_displaced_measure.mjs";
import { ebible_verse_marks_gaps_unexplained_grouped } from "./ebible_verse_marks_gaps_unexplained_grouped.mjs";
import { ebible_verse_marks_gaps_unexplained_bible_summary } from "./ebible_verse_marks_gaps_unexplained_bible_summary.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function ebible_verse_marks_gaps_unexplained_summaries() {
  arguments_assert(arguments, 0);
  let gaps_measured = await ebible_verse_marks_gaps_measure();
  let displaced_measured = await ebible_verse_marks_displaced_measure();
  let displaced_chapters = [];
  let grouped = await ebible_verse_marks_gaps_unexplained_grouped(
    displaced_chapters,
    displaced_measured,
    gaps_measured,
  );
  async function bible_summary(group) {
    let r = await ebible_verse_marks_gaps_unexplained_bible_summary(group);
    return r;
  }
  let summaries = await list_map_async(grouped, bible_summary);
  return summaries;
}
