import { text_frozen } from "./text_frozen.mjs";
export function js_block_body_get_cases() {
  "Small written-out statements beside the kinds of statement standing inside each one, where it is a block, and the word for having stopped where it is not.";
  "This is the half that does the stopping. The readings above it find a block somewhere - inside a function, inside whatever a module hands out - and hand it here, and everything they refuse is refused by these few lines. Writing the cases here rather than only above says which half is speaking when one of those readings stops, which is the difference between fixing the finding and fixing the taking.";
  "The empty block is the case that matters most. It answers with an empty list, and an empty list is easy to mistake for a failure to find anything - so a reading that had started refusing empty blocks would look, from above, exactly like a reading that could not find them. The two are told apart here and nowhere else.";
  "The two that stop are chosen to be things a block could plausibly be confused with rather than nonsense: a statement that is not a block, and a declaration that holds a body of its own which is not a block either.";
  "A stop is written down as a word rather than as a list, so that it cannot be read as a list of no statements.";
  "Each statement is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a block with two statements standing in it, in the order they stand",
      code: text_frozen("{\n  let a = 1;\n  a = 2;\n}"),
      statements: ["VariableDeclaration", "ExpressionStatement"],
    },
    {
      name: "an empty block, which is a block and answers with no statements",
      code: text_frozen("{}"),
      statements: [],
    },
    {
      name: "a statement that is not a block",
      code: text_frozen("1;"),
      statements: "refused",
    },
    {
      name: "a declaration whose own body is not a block",
      code: text_frozen("class C {}"),
      statements: "refused",
    },
  ];
  return cases;
}
