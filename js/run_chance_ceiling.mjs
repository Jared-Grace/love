export function run_chance_ceiling(positions, choices) {
  "The longest run of matching items two sequences can share before chance stops being an explanation - given how many places a run could start and how many different items there were to pick from.";
  "A SHARED RUN IS NOT EVIDENCE UNTIL IT IS LONGER THAN CHANCE PRODUCES. Two sequences drawn from the same small set of items will share short runs whatever wrote them, and how short depends on both numbers: many places to start makes a coincidence likelier, many items to choose from makes it rarer. So a fixed number typed into a check is right for one pair of sequences and silently wrong for every other size, which is exactly the case where it reads as a working check.";
  "A run of a given length is expected about as often as there are starting places divided by the choices raised to that length, if every item were equally likely. The answer is the longest length still expected often enough to be believable as chance, so a run past it is what the check is looking for.";
  "THE BAR IS SET FAR BELOW WHERE CHANCE RUNS OUT, on purpose, and that is the whole reason the number is a thousandth rather than a half. Real items are not equally likely - some answer is the obvious one and gets picked again and again - so real coincidences are far commoner than this arithmetic says. Left at the point where chance formally runs out, the answer would call ordinary agreement a finding. Set here, it only speaks when a run is well past anything the arithmetic can account for even generously.";
  "$plain positions";
  "$plain choices";
  "both are counts, and nothing here reads a file or runs anything.";
  let bar = 0.001;
  let ceiling = 0;
  let expected = positions;
  for (let length = 1; less_than(length, 64); length++) {
    expected = divide(expected, choices);
    let believable = greater_than_or_equal(expected, bar);
    if (not(believable)) {
      break;
    }
    ceiling = length;
  }
  return ceiling;
}
