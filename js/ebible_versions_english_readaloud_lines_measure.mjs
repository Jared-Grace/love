import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function ebible_versions_english_readaloud_lines_measure() {
  "Every English bible the search index walks, measured for whether its chapters are read aloud in as many lines as its pages mark verses.";
  "A chapter whose two counts disagree cannot be cut into verses, so the index passes over it and says nothing. That is the same silence twenty-seven whole bibles were sitting in until they were fetched, only one chapter at a time, and nothing anywhere counts it for the bibles the search actually rests on.";
  "The measuring that already existed walks the bibles this repo ships, and exactly one of those is English, so it watches one of these fifty-three. The other fifty-two are the ones a reader searches. Which bibles to walk is the whole difference, so it is handed to the measuring rather than chosen inside it.";
  "Answers with counts per bible rather than the chapters themselves, because the question this is asked for is how much is being lost, and a bible worth opening after that is opened by name with the measuring for one bible.";
  "Reads every chapter of every one of them off the disk, so it takes about an hour and belongs nowhere near a gate.";
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let measured = await ebible_bibles_measure_generic(
    bible_folders,
    ebible_readaloud_lines_differ,
  );
  let bibles = [];
  let differ_total = 0;
  let unread_total = 0;
  let chapters_total = 0;
  function lambda(one) {
    let differ_count = list_size(one.differ);
    let unread_count = list_size(one.unread);
    differ_total = differ_total + differ_count;
    unread_total = unread_total + unread_count;
    chapters_total = chapters_total + one.chapters;
    let counted = {
      bible_folder: one.bible_folder,
      chapters: one.chapters,
      same: one.same,
      differ: differ_count,
      unread: unread_count,
    };
    list_add(bibles, counted);
  }
  each(measured.bibles, lambda);
  let r = {
    offered: list_size(bible_folders),
    chapters_total: chapters_total,
    differ_total: differ_total,
    unread_total: unread_total,
    unmeasured: measured.unmeasured,
    bibles: bibles,
  };
  return r;
}
