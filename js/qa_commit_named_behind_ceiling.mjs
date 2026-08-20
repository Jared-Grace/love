export function qa_commit_named_behind_ceiling() {
  "How far behind the folder the newest judged commit may fall before the judging daemon stops taking no for an answer.";
  "Fifty commits, which is the same intent an hour was chosen for, said in the unit that actually decides. The hour was reasoned about as being some tens of commits back on a repo this busy - so the tens were always the real measure and the hour was a way of guessing at them, which stops being a guess the moment the distance is asked for directly.";
  "Counted in commits and not in time because a judgement ages by what has been committed on top of it, not by the clock. Ten of us commit to the one branch all day, so an hour on a busy afternoon and an hour overnight are the same hour and nothing like the same distance.";
  "Small enough that a deploy asking now finds something close to the work somebody is trying to ship, and large enough that the escape stays an escape: a ceiling near zero would hold it open on every commit, which is not an exception but a machine judging without pause.";
  let commits = 50;
  return commits;
}
