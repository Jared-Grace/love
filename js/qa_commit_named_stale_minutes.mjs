export function qa_commit_named_stale_minutes() {
  "How long the judging record may go unwritten before the daemon stops taking no for an answer.";
  "An hour, because that is what a deploy can live with. Every commit a deploy might ship has to have been judged, so the age of the newest judged commit is the age of the freshest thing anybody can ship - and an hour-old commit on a repo this busy is some tens of commits back, which is close enough to now to carry the work somebody is trying to ship.";
  "Shorter would make the escape fire while the ordinary door is still opening by itself now and then, which turns an exception into the normal path. Longer was measured and found to be what we already have: nothing was judged for hours at a stretch, and the record grew by thirty-nine commits in its whole life while sixty-three sat unjudged in a single afternoon.";
  let minutes = 60;
  return minutes;
}
