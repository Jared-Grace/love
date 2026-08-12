import { text_frozen } from "./text_frozen.mjs";
export function js_page_serialized_imported_names_cases() {
  "Small files written out, each one saying which of the functions it sends to a";
  "browser were written somewhere else and imported here by name.";
  "The gate above this reads it and passes by finding nothing, which is exactly what";
  "a repo with nothing wrong looks like and also exactly what a reader that had";
  "quietly stopped looking looks like. The one case that must come back with a name";
  "is what tells those two apart, and it is the whole reason this corpus exists.";
  "The false cases carry the edges. A function written in this very file is the";
  "twin reader's business and not this one's, and reporting it here would say the";
  "same thing twice. A function that is called rather than sent keeps its imports,";
  "because they are right there when it runs. A method that does not run what it is";
  "given inside the page carries nothing across. And a name the file was handed";
  "says nothing about where it was written, so there is no far file to go and read.";
  "Every name written inside a case is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference and";
  "change what the case says.";
  let cases = [
    {
      code: text_frozen(
        'import { probe } from "./probe.mjs";\nexport async function reader(page) {\n  let r = await page.evaluate(probe);\n  return r;\n}\n',
      ),
      names: ["probe"],
      why: "the case the whole reader exists for - the function sent to the page lives in a file of its own, so neither this file nor that one says anything about the danger",
    },
    {
      code: text_frozen(
        "export async function reader(page) {\n  function probe() {\n    return document.title;\n  }\n  let r = await page.evaluate(probe);\n  return r;\n}\n",
      ),
      names: [],
      why: "written in this very file, which is the twin reader's answer - saying it here as well would report one thing as two",
    },
    {
      code: text_frozen(
        'import { probe } from "./probe.mjs";\nexport async function reader(page) {\n  let r = await page.click(probe);\n  return r;\n}\n',
      ),
      names: [],
      why: "handed to a method that does not run what it is given inside the page, so nothing crosses over and nothing is at risk",
    },
    {
      code: text_frozen(
        'import { probe } from "./probe.mjs";\nexport function reader() {\n  let r = probe();\n  return r;\n}\n',
      ),
      names: [],
      why: "called rather than sent, so the import line is right there when it runs",
    },
    {
      code: text_frozen(
        "export async function reader(page, probe) {\n  let r = await page.evaluate(probe);\n  return r;\n}\n",
      ),
      names: [],
      why: "the file was handed the thing it sends, so nothing here says where it was written and there is no far file to go and read",
    },
  ];
  return cases;
}
