import { text_frozen } from "./text_frozen.mjs";
export function js_flo_cases() {
  "Small written-out modules beside what the export finder makes of each one: the kind of thing the export declares and the name it gives it, or the word for having stopped instead of answering.";
  "The finding is done by looking along the module's own top line and nowhere else. That is sound because of the language rather than because of how this repo writes files - an export is legal only where a module says what it is, directly in its body, so nothing below the top line could ever be one and a walk that went down there would be looking where the answer cannot be. Measured over nine thousand files that walk cost fourteen hundred and eighty-five milliseconds against four for the scan, for the very same node each time, and nearly every reader of a function's shape comes through here.";
  "Two of the cases stop rather than answer, and they stop with the same word on purpose, because the reading promises to refuse a module with no export and a module with two in the same words. What is being watched is that it refuses at all: a reading that started answering about one of two exports would be picking, silently, and picking is the thing it was written not to do.";
  "The last two cases are the ones that catch the name of this reading being taken too literally. It is called the finder of the one function a module hands out, and what it actually hands back is whatever the export declares - a value or a class just the same. That is not a fault, but a caller reading only the name would not expect it, so it is written down rather than left to be discovered.";
  "Each module is held as fixed text, since the names inside are ordinary repo names and the canonicalizing pass would otherwise rewrite them into references and change what the case says.";
  let cases = [
    {
      name: "a module handing out one function",
      code: text_frozen("export function f() {\n  return 1;\n}"),
      found: "FunctionDeclaration f",
    },
    {
      name: "something declared above the export does not get in the way",
      code: text_frozen("let f = 1;\nexport function g() {}"),
      found: "FunctionDeclaration g",
    },
    {
      name: "a module handing out nothing stops rather than answering",
      code: text_frozen("function f() {\n  return 1;\n}"),
      found: "refused",
    },
    {
      name: "a module handing out two stops rather than picking one",
      code: text_frozen("export function f() {}\nexport function g() {}"),
      found: "refused",
    },
    {
      name: "a module handing out a value, which this answers about just the same",
      code: text_frozen("export const x = 1;"),
      found: "VariableDeclaration",
    },
    {
      name: "a module handing out a class, which this answers about just the same",
      code: text_frozen("export class C {}"),
      found: "ClassDeclaration C",
    },
  ];
  return cases;
}
