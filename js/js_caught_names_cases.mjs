import { text_frozen } from "./text_frozen.mjs";
export function js_caught_names_cases() {
  "Small written-out files, each beside every name a catch clause binds in it, in alphabetical order.";
  "This is one of the four readings the free-name question is built from, and that question decides which imports the canonicalizing pass adds to a file it has just edited. A caught name was missing from that question for as long as the question was built out of declarations and parameters alone, because a caught name is written like a parameter and belongs to no function - so nothing that looked for either of those ever found it. Eighty-three such names were bound across the repo at the time it was added.";
  "The direction that does harm is a name going missing. A caught name that stops being reported looks bound by nothing, so it looks like the repo function of that name, and the pass adds an import for something that was the caught error all along.";
  "A catch may be written with no name at all, and it may take its name apart the way a parameter can. Both are here, because a reading that handled the plain shape and nothing else would pass every case that only ever asked about the plain shape.";
  "The answers are alphabetical rather than in the order the walk gathers them. No caller reads the order, since all of them subtract, so gathering the same names in another order stays a refactor rather than a red gate. What gathering actually gives is a catch inside a catch handing over the inner one first.";
  "Each file is held as fixed text, since the names inside are ordinary repo names and the canonicalizing pass would otherwise rewrite them into references and change what the case says.";
  let cases = [
    {
      name: "the name a catch clause gives the error",
      code: text_frozen("try {\n  g();\n} catch (oops) {}"),
      caught: ["oops"],
    },
    {
      name: "a catch written with no name at all binds nothing",
      code: text_frozen("try {\n  g();\n} catch {}"),
      caught: [],
    },
    {
      name: "a catch inside a catch gives up both names",
      code: text_frozen(
        "try {\n  g();\n} catch (oops) {\n  try {\n    h();\n  } catch (again) {}\n}",
      ),
      caught: ["again", "oops"],
    },
    {
      name: "a catch that takes the error apart binds what it takes out, not the property",
      code: text_frozen("try {\n  g();\n} catch ({ message }) {}"),
      caught: ["message"],
    },
    {
      name: "a catch that takes the error apart as a list binds what it takes out",
      code: text_frozen("try {\n  g();\n} catch ([first]) {}"),
      caught: ["first"],
    },
    {
      name: "a parameter and a declared name are both bound and neither is caught - other readings supply those",
      code: text_frozen("function f(a) {\n  let x = 1;\n}"),
      caught: [],
    },
  ];
  return cases;
}
