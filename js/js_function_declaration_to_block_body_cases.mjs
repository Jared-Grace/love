import { text_frozen } from "./text_frozen.mjs";
export function js_function_declaration_to_block_body_cases() {
  "Written-out functions beside the kinds of statement standing in each one's body, in the order they are written, and the word for having stopped where what was given is not a function.";
  "This is the step almost every reading over a function body starts with: take the declaration, reach the block, hand back what stands in it. It is two moves - reach for what the node calls its body, then insist that what was found is a block - and the two stop for different reasons. A class is refused by the second, since a class does have a body and that body is not a block. A declaration naming a value is refused by the first, since there is nothing standing where a body would be at all.";
  "The corpus says only that both stop, not where. That is deliberate: which of the two moves complains is an implementation detail, and a caller has the same problem either way.";
  "A function with an empty body answers with no statements, which is not the same as not being a function - the pair of refusals is what holds those apart.";
  "An awaiting function is the same shape as a plain one here. Waiting changes what may be written inside the body and changes nothing about how the body is reached, and the case says so rather than leaving a reader to assume it.";
  "Each function is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a body holding one statement",
      code: text_frozen("function g() {\n  h();\n}"),
      statements: ["ExpressionStatement"],
    },
    {
      name: "a body holding several, in the order they are written",
      code: text_frozen("function g() {\n  let a = 1;\n  return a;\n}"),
      statements: ["VariableDeclaration", "ReturnStatement"],
    },
    {
      name: "an empty body, which is a body and answers with no statements",
      code: text_frozen("function g() {}"),
      statements: [],
    },
    {
      name: "an awaiting function, reached exactly as a plain one is",
      code: text_frozen("async function g() {\n  await h();\n}"),
      statements: ["ExpressionStatement"],
    },
    {
      name: "a class, which has a body that is not a block",
      code: text_frozen("class C {}"),
      statements: "refused",
    },
    {
      name: "a declaration naming a value, which has nothing standing where a body would",
      code: text_frozen("let a = 1;"),
      statements: "refused",
    },
  ];
  return cases;
}
