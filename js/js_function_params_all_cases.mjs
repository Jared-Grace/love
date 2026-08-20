import { text_frozen } from "./text_frozen.mjs";
export function js_function_params_all_cases() {
  "Small written-out files, each beside every parameter name bound anywhere inside it, in alphabetical order.";
  "This is one of the four readings the free-name question is built from, and that question decides which imports the canonicalizing pass adds to a file it has just edited. Every caller reads this to SUBTRACT - to drop the names the file binds for itself before treating what is left as the repo's. So a parameter this stops reporting is not a missing entry in a report, it is a parameter that goes on looking like the repo function of the same name, and whatever the repo said about that function gets acted on against something that is not it.";
  "The kinds are written out one at a time because a parameter is written down in more ways than any other binding: bare, unpacked out of a list or an object, given something to fall back on, gathering whatever is left over, and belonging to a function that has no name of its own. Every one of those is the same thing to a reader and a different shape to a walk, so covering one is no evidence at all about the next.";
  "The cases that answer with nothing are the ones that say where this reading stops. A name a file declares and a name a catch clause binds are both bound, and neither is a parameter - other readings supply those, and this one reporting them would be a different kind of wrong that no other case here could catch.";
  "The answers are alphabetical rather than in the order the walk gathers them. No caller reads the order, since all of them subtract, so gathering the same names in another order stays a refactor rather than a red gate. The order that gathering actually gives is worth knowing and is not obvious - a function inside a function hands its parameters over BEFORE the one it sits in - which is exactly why it is left out of the answer rather than accidentally frozen into it.";
  "Each file is held as fixed text, since the names inside are ordinary repo names and the canonicalizing pass would otherwise rewrite them into references and change what the case says.";
  let cases = [
    {
      name: "every parameter a declared function takes",
      code: text_frozen("function f(a, b) {}"),
      params: ["a", "b"],
    },
    {
      name: "the name the function itself carries is not one of its parameters",
      code: text_frozen("function f(c) {}"),
      params: ["c"],
    },
    {
      name: "a function written as a value hands its parameters over too, and its own name is not one of them",
      code: text_frozen("let h = function inner(d) {};"),
      params: ["d"],
    },
    {
      name: "an arrow written without brackets round its one parameter",
      code: text_frozen("let g = e => e;"),
      params: ["e"],
    },
    {
      name: "a function sitting inside another one gives up both sets",
      code: text_frozen("let f = (p) => (q) => p;"),
      params: ["p", "q"],
    },
    {
      name: "a method written the short way inside an object",
      code: text_frozen("let o = {\n  m(k) {},\n};"),
      params: ["k"],
    },
    {
      name: "a method on a class",
      code: text_frozen("class C {\n  m(v) {}\n}"),
      params: ["v"],
    },
    {
      name: "parameters unpacked, given something to fall back on, and gathering the rest",
      code: text_frozen("let f = ({ a, b }, [c], d = 1, ...rest) => 1;"),
      params: ["a", "b", "c", "d", "rest"],
    },
    {
      name: "a function that takes nothing gives nothing, and what it declares inside is not a parameter",
      code: text_frozen("function f() {\n  let x = 1;\n}"),
      params: [],
    },
    {
      name: "a name a catch clause binds is bound and is not a parameter - the caught-names reading is what supplies it",
      code: text_frozen("let x = 1;\ntry {\n  g();\n} catch (oops) {}"),
      params: [],
    },
  ];
  return cases;
}
