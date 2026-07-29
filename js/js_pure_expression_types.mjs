export function js_pure_expression_types() {
  "The kinds of expression part that can only read";
  "A name, a written-out value, the arithmetic and comparison shapes, and a choice";
  "between two of them - each of these gives back an answer settled entirely by the";
  "parts inside it, so an expression built only from these reads and does nothing";
  "else.";
  "Calling is on the list because this repo writes its operators as calls, so an";
  "ordinary comparison arrives here wearing a call's shape. The list therefore only";
  "says a call is allowed to appear; which calls are actually harmless is a separate";
  "question, asked of the name in front of the bracket.";
  "Reaching through a dot is deliberately absent. The word after the dot can be a";
  "question with an answer of its own, so the same reach can give a different value";
  "each time it is made without any name having changed.";
  let types = [
    "Identifier",
    "Literal",
    "CallExpression",
    "UnaryExpression",
    "BinaryExpression",
    "LogicalExpression",
    "ConditionalExpression",
  ];
  return types;
}
