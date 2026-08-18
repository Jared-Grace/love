export function bless_depth_start() {
  "How many tiles ahead a face can be made out when the game begins.";
  "A rule of the game rather than a setting of the drawing, which is why it lives with the";
  "brain: it says how far a person can SEE, and every renderer owes the same answer or the";
  "same rung would cost different work on a phone and on a desktop.";
  "Three, because a cone three deep is seven tiles wide at its far edge - room for a small";
  "crowd without the near rungs being handed over for standing still. It is a guess to be";
  "settled by playing, and the number to move first if the opening minutes feel empty.";
  let depth = 3;
  return depth;
}
