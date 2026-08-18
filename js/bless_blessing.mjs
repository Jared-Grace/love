export function bless_blessing(count, at) {
  "One blessing the player has prayed - how many people it covered, and the moment it was";
  "prayed. The moment is RECEIVED rather than read from the clock in here, so the ladder";
  "can be reasoned about and tested over a made-up run of blessings instead of only over a";
  "real one played in real time.";
  let blessing = { count: count, at: at };
  return blessing;
}
