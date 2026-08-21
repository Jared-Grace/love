export function bible_dream_hand_nearness(gap_squared, tolerance_squared) {
  "Say how strongly the hand's own mark should show at a point, from how far off the stroke that point was: one when it is exactly on the line, a half at the edge of the corridor, and dwindling from there without ever quite reaching nothing.";
  "★ IT NEVER RETURNS ZERO, AND THAT IS THE WHOLE CLAIM IT MAKES. A rule that erased the mark the moment it left the corridor would be saying the wandering did not happen. It did happen, and the player did it, and something that keeps a record of it is telling the truth where an eraser would not. What the fading says instead is that the further a hand went from what it was given, the less of it there is to see - which is a different sentence, and the true one.";
  "It is a ratio of the two rather than a subtraction, so it needs no clamping and cannot go negative however far the hand wanders. Both are squared, because the gap arrives squared from bible_dream_point_gap_squared and taking a root here would only be undone by the caller.";
  return tolerance_squared / (tolerance_squared + gap_squared);
}
