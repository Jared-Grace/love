export function gloss_passage_entries_kept_set(passage, entries, kept) {
  "Leave one passage holding only the explanations that survived a sweep, and answer with how many did not.";
  "The count is worked out here rather than by whoever did the keeping, because it is the difference between what went in and what came out and nobody else has both. A sweep that counted its own removals would be reporting its intention, and this reports what actually happened to the passage.";
  gloss_passage_entries_set(passage, kept);
  let left = list_size(entries);
  let right = list_size(kept);
  let removed = subtract(left, right);
  return removed;
}
