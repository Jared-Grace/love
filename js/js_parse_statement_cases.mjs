import { text_frozen } from "./text_frozen.mjs";
export function js_parse_statement_cases() {
  "Written-out statements beside the kind of statement each one is read in as, and the answer for text that holds no statement at all.";
  "The reading writes the given text inside a function declaration of its own and hands back the first statement standing in that function's body. That is an implementation detail from the outside, and two of its consequences are things a caller would otherwise get wrong.";
  "The first: a return and an await are read here without complaint, and neither is a thing a file may hold at its top level. The function written round the text is a function, and it is written as an awaiting one, so both are legal in the only place this reading ever looks. Anything treating what comes back as a statement a file could hold is treating it as something it is not, and these two cases are what say so.";
  "The second: where the text holds more than one statement, only the first comes back and the rest is dropped without a word. That case is written with the two statements of different kinds on purpose - with two of the same kind, taking the first and taking the last answer identically and the case would prove nothing.";
  "Text holding no statement is refused rather than answered with nothing, from the reading further down that is asked for the first thing in an empty list. It is written as a refusal rather than as a word so that it cannot be read as the name of a kind.";
  "Each piece of text is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a declaration",
      code: text_frozen("let a = 1;"),
      told: {
        kind: "VariableDeclaration",
      },
    },
    {
      name: "a bare value, which is a statement holding an expression",
      code: text_frozen("1;"),
      told: {
        kind: "ExpressionStatement",
      },
    },
    {
      name: "two statements of different kinds, of which only the first comes back",
      code: text_frozen("let a = 1;\nb;"),
      told: {
        kind: "VariableDeclaration",
      },
    },
    {
      name: "a return, which a file may not hold but the function written round it may",
      code: text_frozen("return 1;"),
      told: {
        kind: "ReturnStatement",
      },
    },
    {
      name: "an await, legal here because the function written round it is an awaiting one",
      code: text_frozen("await g();"),
      told: {
        kind: "ExpressionStatement",
      },
    },
    {
      name: "a block, which is itself one statement",
      code: text_frozen("{}"),
      told: {
        kind: "BlockStatement",
      },
    },
    {
      name: "a class, which is a declaration and not only an expression",
      code: text_frozen("class C {}"),
      told: {
        kind: "ClassDeclaration",
      },
    },
    {
      name: "text holding no statement at all",
      code: text_frozen(""),
      told: {
        refused: true,
      },
    },
  ];
  return cases;
}
