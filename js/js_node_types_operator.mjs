export function js_node_types_operator() {
  "The kinds of parsed code that stand for an operator being worked out: the two-sided ones (+ - * / % === < &&-free), the and/or ones, the one-sided ones (! and a leading minus), giving a name a value, and the three-part question.";
  "Counting operators is asked by anything that wants to know how much working out a line calls for, and the list is here rather than inside the counting because a caller measuring depth wants the same list a caller measuring width does. Two copies of it would drift the day a kind was added to one.";
  "A call is deliberately not one of these. A call is one thing being handed to another, and a learner meeting Math.floor(3.6) is being asked to read a name rather than to work an operator out.";
  let types = [
    "BinaryExpression",
    "LogicalExpression",
    "UnaryExpression",
    "AssignmentExpression",
    "ConditionalExpression",
  ];
  return types;
}
