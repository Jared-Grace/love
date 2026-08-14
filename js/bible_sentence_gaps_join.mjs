export function bible_sentence_gaps_join(each) {
  "Several countings of how far sentences carried on, poured into one.";
  "The gaps are pooled rather than averaged because a gap is one real place someone could have stopped reading, and every one of them counts the same however few its chapter had. What could not be counted is carried along beside them - verses that never arrived, and places where the sentence had not finished by the end of what was read - so that a small pool is visibly small rather than quietly confident.";
  arguments_assert(arguments, 1);
  let gaps_each = list_map_property(each, "gaps");
  let gaps = lists_combine(gaps_each);
  let unread_each = list_map_property(each, "unread");
  let unread = list_sum(unread_each);
  let unfinished_each = list_map_property(each, "unfinished");
  let unfinished = list_sum(unfinished_each);
  let joined = { gaps, unread, unfinished };
  return joined;
}
