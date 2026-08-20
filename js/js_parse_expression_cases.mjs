import { text_frozen } from "./text_frozen.mjs";
export function js_parse_expression_cases() {
  "Written-out expressions beside the kind each one is read in as, and the answer for text that is not one expression.";
  "The reading does not ask for an expression directly. It puts brackets round the text, writes the result to the right of a name, reads that line as a single statement, and hands back what stood to the right. Every one of those steps decides something, and none of them is visible from the outside.";
  "The brackets are the step that matters most. Written on its own, a pair of braces with a name and a value in it is a block holding a labelled statement, not an object - and the same text read here is an object, because by the time it is read there are brackets round it. So the reading is not 'the same text, read as an expression': for that one shape it is text that means something else once wrapped.";
  "Writing it to the right of a name is what makes a function with no name legal, since a function with no name may be a value and may not be a statement. And the line is read by the single-statement reading, whose own wrapper is an awaiting function - which is why an await is accepted here too, with no file and no function in sight.";
  "An assignment is an expression and is not refused. That is worth pinning because a caller reaching for this reading is usually trying to tell an expression from a statement, and an assignment is the shape that most looks like a statement while not being one.";
  "Two statements are refused, and so is text holding nothing. Both are written as a refusal rather than as a word so that they cannot be read as the name of a kind. Which words the refusal uses is deliberately not pinned - the complaint counts a position in the built line rather than in the text given, so it names a column nobody handed in.";
  "Each expression is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a plain value",
      code: text_frozen("1"),
      told: {
        kind: "Literal",
      },
    },
    {
      name: "a name reached through another name and a dot",
      code: text_frozen("a.b"),
      told: {
        kind: "MemberExpression",
      },
    },
    {
      name: "braces with a name and a value, read as an object because of the brackets put round it",
      code: text_frozen("{ a: 1 }"),
      told: {
        kind: "ObjectExpression",
      },
    },
    {
      name: "two things with a comma between them, which is one expression",
      code: text_frozen("1, 2"),
      told: {
        kind: "SequenceExpression",
      },
    },
    {
      name: "an assignment, which is an expression and not a statement",
      code: text_frozen("a = 1"),
      told: {
        kind: "AssignmentExpression",
      },
    },
    {
      name: "a function with no name, legal only because it stands to the right of one",
      code: text_frozen("function () {}"),
      told: {
        kind: "FunctionExpression",
      },
    },
    {
      name: "an arrow",
      code: text_frozen("x => x"),
      told: {
        kind: "ArrowFunctionExpression",
      },
    },
    {
      name: "a class with no name, which is a value here rather than a declaration",
      code: text_frozen("class {}"),
      told: {
        kind: "ClassExpression",
      },
    },
    {
      name: "an await, legal because the statement reading underneath writes an awaiting function round it",
      code: text_frozen("await g()"),
      told: {
        kind: "AwaitExpression",
      },
    },
    {
      name: "two statements, which are not one expression",
      code: text_frozen("1; 2;"),
      told: {
        refused: true,
      },
    },
    {
      name: "text holding nothing",
      code: text_frozen(""),
      told: {
        refused: true,
      },
    },
  ];
  return cases;
}
