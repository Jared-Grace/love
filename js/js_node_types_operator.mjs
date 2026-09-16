export function js_node_types_operator() {
  "The kinds of parsed code that stand for an operator being worked out: the two-sided ones (+ - * / % === < &&-free), the and/or ones, the one-sided ones (! and a leading minus), giving a name a value, making a name and filling it in the same breath, and the three-part question.";
  "Counting operators is asked by anything that wants to know how much working out a line calls for, and the list is here rather than inside the counting because a caller measuring depth wants the same list a caller measuring width does. Two copies of it would drift the day a kind was added to one.";
  "A call is deliberately not one of these. A call is one thing being handed to another, and a learner meeting Math.floor(3.6) is being asked to read a name rather than to work an operator out.";
  "Giving a name a value counts whether or not the name is being made at the same time. Written a = 1 it is one kind of parsed code, and written let a = 1 it is another, and only the first of those was on this list. So the whole run of the course that teaches names was priced as asking for nothing at all: name_copy hands a learner four lines, three names to hold and a copy to follow, and came out at zero, under a single 1 + 2.";
  "One step for it is the floor rather than the whole of it. let a = 1 both makes the name and fills it, so it can fairly be read as two, and a bare let a with nothing in it is still something to take in. One is what is counted here because it is the least the line can be worth, and the least is enough to stop a lesson full of them reading as empty.";
  let types = [
    "BinaryExpression",
    "LogicalExpression",
    "UnaryExpression",
    "AssignmentExpression",
    "VariableDeclarator",
    "ConditionalExpression",
  ];
  return types;
}
