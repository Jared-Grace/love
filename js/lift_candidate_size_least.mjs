export function lift_candidate_size_least() {
  "The fewest lines of work a function written inside another one has to hold before moving it out is worth doing. Below this the moved function is a name and a call, the one it came out of loses nothing it was carrying, and a reader now has two files to hold where one said the whole thing. Three, because two statements are a pair that reads as one step and three is where a piece starts having its own shape. Real case: a wrapper of a single line stood at the top of the work list, and it stood there because the list names the biggest piece inside each function - once the pieces worth cutting were cut, the biggest one left was one line long.";
  let v = "3";
  return v;
}
