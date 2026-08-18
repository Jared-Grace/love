export function permission_rows_unsolved(rows) {
  "The ranked rows that today's rules would still stop somebody on — everything except the ones a verdict of allow has already answered.";
  "The record of interruptions is a record of the past, and a week of it holds prompts that were paid once and then granted away. Ranking those alongside the standing ones puts the loudest solved thing at the top of a list meant to say what to work on next: measured on the week to 2026-08-18, 305 of 656 proved prompts had already stopped happening.";
  "A row with no verdict is kept rather than dropped. Nothing looked at it - it was past the count that was checked, or it was a tool the guard is never asked about - and unanswered is not the same as answered no.";
  function unsolved_is(row) {
    let verdict = property_get(row, "verdict");
    let solved = equal(verdict, "allow");
    let b = not(solved);
    return b;
  }
  let unsolved = list_filter(rows, unsolved_is);
  return unsolved;
}
