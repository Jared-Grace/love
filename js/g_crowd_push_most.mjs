export function g_crowd_push_most() {
  "how many people deep a crowd may be and still open a way through it by everybody shuffling one tile sideways.";
  "It is a limit on how far the looking goes, not on how many may move: a run of people longer than this is simply left standing, and the walker passes them one at a time by trading places instead. So the number decides only how much of a crowd opens as a lane and how much of it is waded through - never whether the walk happens at all.";
  let most = 16;
  return most;
}
