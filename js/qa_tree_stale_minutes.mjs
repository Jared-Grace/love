export function qa_tree_stale_minutes() {
  "How long a conversation may go unheard from before its frozen copy is treated as abandoned.";
  "An hour is generous on purpose, and it can afford to be. Somebody in the middle of asking the gate its questions wrote to their conversation seconds ago, so no plausible number puts them at risk; the cost of being generous is only that an abandoned copy waits a little longer to go.";
  "Being wrong here is cheap in the one direction that matters: the copy is made again from nothing every single time it is asked for, so taking one away too early costs its owner the length of one copy and can never cost them a wrong answer.";
  let minutes = 60;
  return minutes;
}
