export async function bible_sentence_gaps_languages_measure() {
  "Runs the measurement for a reader of every bible at once: how far a passage is carried on when the sentence has to have finished in all of them.";
  "Every bible rather than a chosen few, because a chosen few is a guess about which languages disagree and that guess is the thing being tested. Reading all of them at once is nobody's actual setting - it is the worst any setting could be, since adding a bible can only ever hold the sentence open longer. So this answers a bound on every reader rather than a story about one.";
  "The bibles that mark no sentence ends are left out here for the same reason the page leaves them out: they can only ever answer no, and a reader of one of them is given what they asked for with nothing added.";
  arguments_assert(arguments, 0);
  let all = ebible_bible_folders_sorted();
  let bible_folders = bible_folders_sentence_end_marked(all);
  let chapter_codes = bible_sentence_gaps_sample_chapters();
  let count = bible_sentence_gaps_sample_count();
  let measured = await bible_folders_chapters_sentence_gaps(
    bible_folders,
    chapter_codes,
    count,
  );
  return measured;
}
