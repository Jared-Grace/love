export async function ebible_version_chapters_numbering(bible_folder) {
  "$plain bible_folder";
  "Which of one bible's chapters number their verses the way the English bible everything is read in does, and which do not.";
  "A search result is an address - a chapter and a verse number - and the words it promises are then shown from whichever bible the reader is in. So a bible numbering differently, as the Septuagint and the Vulgate do through the Psalms, hands the reader an address pointing at somebody else's verse, and the words searched for are not in it.";
  "A chapter matches when the two name exactly the same verse numbers in it, in the same order. That is asked chapter by chapter rather than of a whole bible, because the disagreement is never a whole bible: the Douay-Rheims numbers a hundred and thirty-nine of the Psalms differently and the other eleven the same way, and those eleven are the ones both begin without a title.";
  "What this cannot see is a chapter that is renumbered and happens to end up with the same count of verses. Measured against the Douay-Rheims, the worst case there is, it saw every one: the eleven Psalms it let through are the eleven that genuinely line up.";
  "Chapters only one of the two carries say nothing either way, so they are left out of both answers - the search already drops a result whose book the reader's bible has not got.";
  let english = ebible_folder_english();
  let mine = await ebible_version_verse_numbers(bible_folder);
  let reference = await ebible_version_verse_numbers(english);
  let mine_codes = properties_get(mine);
  let reference_codes = properties_get(reference);
  let shared = list_intersect(mine_codes, reference_codes);
  function chapter_matches(chapter_code) {
    let ours = property_get(mine, chapter_code);
    let theirs = property_get(reference, chapter_code);
    let same_is = equal_by_json_lambda(theirs);
    let same = same_is(ours);
    return same;
  }
  let matching = list_filter(shared, chapter_matches);
  let differing = list_filter_not(shared, chapter_matches);
  let r = {
    bible_folder,
    shared,
    matching,
    differing,
  };
  return r;
}
