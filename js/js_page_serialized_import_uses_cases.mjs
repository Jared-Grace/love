import { text_frozen } from "./text_frozen.mjs";
export function js_page_serialized_import_uses_cases() {
  "Small files written out, each one saying which of the functions it sends to a";
  "browser read a name from the top of the file.";
  "Two gates ratchet against zero off this one reader, and both pass by finding";
  "nothing. So a reader that had quietly stopped finding anything would turn them";
  "both green while checking nothing at all, and green is exactly what a repo with";
  "nothing wrong looks like. The one case that must be answered with a borrowed";
  "name is what tells those apart - it is the whole reason this corpus exists.";
  "The false cases carry the edges the reader is meant to hold. A function that is";
  "called rather than sent keeps its imports, because the import line is right";
  "there when it runs. A function sent by a method that does not serialize is not";
  "at risk either. And a sent function reading only what the browser itself gives";
  "it is the healthy shape the repo is full of.";
  "Every name written inside a case is held as fixed text, because the pass that";
  "canonicalizes this file would otherwise read a real one as a reference and";
  "change what the case says.";
  let cases = [
    {
      code: text_frozen(
        'import { equal } from "./equal.mjs";\nexport async function reader(page) {\n  function extract() {\n    let same = equal(document.title, "here");\n    return same;\n  }\n  let r = await page.evaluate(extract);\n  return r;\n}\n',
      ),
      uses: [
        {
          fn: "extract",
          borrowed: ["equal"],
        },
      ],
      why: "the case the whole reader exists for - a sent function reading an imported name, which is undefined by the time it runs in the page",
    },
    {
      code: text_frozen(
        'import { equal } from "./equal.mjs";\nexport async function reader(page) {\n  function extract() {\n    let same = document.title === "here";\n    return same;\n  }\n  let r = await page.evaluate(extract);\n  return r;\n}\n',
      ),
      uses: [],
      why: "the same file written the safe way - the sent function reaches only what the browser gives it, so nothing is borrowed even though the import is still there",
    },
    {
      code: text_frozen(
        'import { equal } from "./equal.mjs";\nexport function reader(title) {\n  function extract() {\n    let same = equal(title, "here");\n    return same;\n  }\n  let r = extract();\n  return r;\n}\n',
      ),
      uses: [],
      why: "called rather than sent, so the import line is right there when it runs - reporting this would empty the answer of its meaning",
    },
    {
      code: text_frozen(
        'import { equal } from "./equal.mjs";\nexport async function reader(page) {\n  function extract() {\n    let same = equal(document.title, "here");\n    return same;\n  }\n  let r = await page.click(extract);\n  return r;\n}\n',
      ),
      uses: [],
      why: "handed to a method that does not run what it is given inside the page, so nothing crosses over and nothing is at risk",
    },
  ];
  return cases;
}
