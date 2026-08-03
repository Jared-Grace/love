export function js_statement_stopping_types() {
  "The kinds of statement that always leave the run they are in, so that nothing written under one in the same block can be reached.";
  "Handing an answer back, throwing, and the two ways out of a loop are the four. Each of them goes somewhere else unconditionally - there is no value of anything that makes the next line run - which is what separates them from a return sitting inside a condition, where the line under it is reached every time the condition is false.";
  "Spelled here rather than inside the reading that uses them, because a fifth way out is a change to what this repo counts as leaving, and that is a thing to add in one place and see named.";
  let types = [
    "ReturnStatement",
    "ThrowStatement",
    "BreakStatement",
    "ContinueStatement",
  ];
  return types;
}
