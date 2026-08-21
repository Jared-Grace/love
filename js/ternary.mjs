export function ternary(condition, on_true, on_false) {
  "Answers one of two values according to whether something is so.";
  "Both values are worked out before the choosing happens, because that is what being a function means: everything handed over is settled first, and only then is any of it looked at. An if does not work that way - it works out one branch and never touches the other. So this writes down a choice between two things already sitting there, and it is not a shorter way of writing an if.";
  "Where that difference bites is where a branch would have done something: thrown, written something down, or taken a long time. Reading a name out of a record that is not there throws, and it throws whether or not that was the branch wanted. Every use of this in the repo was written by somebody who looked at both values first, which is what makes those uses safe.";
  "Something once existed to rewrite an if and its else into a call to this, and on 2026-08-21 it was taken out rather than mended. Nothing called it. Two of its faults were its own and were mendable: it fetched the two branches through a helper that hands nothing back, so it stopped on the first if it met, and it built the pair else-branch first while this reads its second argument as the value for a true test, so every rewrite it managed swapped the branches over. The third was not mendable, because it was not in the writing: a rewrite turns one branch being worked out into both being worked out, and no care inside the rewriting changes that.";
  "So what has to exist before that shape is reached for again is a way of saying that an expression does nothing but answer - writes nothing down, cannot throw, and is cheap. Nearly every expression here is a call to a function by name, so saying it of one means saying it of everything that one reaches. Nothing marks that today, and waiting does not bring it nearer; building it does.";
  let result = null;
  if (condition) {
    result = on_true;
  } else {
    result = on_false;
  }
  return result;
}
