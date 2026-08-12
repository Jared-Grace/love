import { add_1 } from "./add_1.mjs";
export function list_tally(list) {
  "How many times each value turns up in a list, as an object from the value to its count.";
  "A tally is what a claim about how OFTEN something happens has to be checked against. A range says a thing is possible; a tally says whether it is common, and those come apart badly - a draw widened to make sixteen reachable put over half the results at fourteen or above, and only counting them showed it.";
  "The keys come out as text, because that is what an object key is. That is wanted here rather than worked around: a tally is read, and a reading is text.";
  let r = {};
  for (let value of list) {
    let seen = r[value];
    let already = seen ? seen : 0;
    r[value] = add_1(already);
  }
  return r;
}
