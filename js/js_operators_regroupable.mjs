export function js_operators_regroupable() {
  "The operators a run of numbers can be regrouped and reordered under without the answer moving - adding and multiplying, and nothing else.";
  "1 + 2 + 3 is a tree that adds 1 and 2 first, but nobody writing it meant that, and 2 + 1 + 3 is the same sum said another way. Taking away and dividing look like they belong here and do not: 11 - 2 - 3 and 11 - 3 - 2 both come to six by accident of these numbers, and 10 - 4 - 2 and 10 - 2 - 4 do not agree at all.";
  "Adding is only free like this between numbers. Two pieces of writing joined with a plus keep the order they were joined in, so a caller has to know what the pieces are before it may lean on this list.";
  let operators = ["+", "*"];
  return operators;
}
