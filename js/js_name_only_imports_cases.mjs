import { text_frozen } from "./text_frozen.mjs";
export function js_name_only_imports_cases() {
  "Written-out files pinning which imports count as kept only for their own spelling";
  "The live sweep answers nothing at all once the repo is clean, and an empty answer is exactly what a reader that says no to everything would give - so the cases carry the must-answer-yes ones as firmly as the must-answer-no ones";
  "Every file here is frozen text. The names inside are ordinary repo names, and the pass that turns a mentioned name into a reference would quietly rewrite them into something the case no longer tests";
  let t = text_frozen("app_calendar");
  let t2 = text_frozen("app_calendar");
  let t3 = text_frozen("app_calendar");
  let t4 = text_frozen("app_bible");
  let t5 = text_frozen("app_calendar");
  let cases = [
    {
      name: "spelled once, nothing else",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f() {\n  return app_calendar.name;\n}\n',
      ),
      only: [t],
    },
    {
      name: "called as well as spelled",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f() {\n  let a = app_calendar.name;\n  let b = app_calendar();\n  return [a, b];\n}\n',
      ),
      only: [],
    },
    {
      name: "called only, never spelled",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f() {\n  return app_calendar();\n}\n',
      ),
      only: [],
    },
    {
      name: "another field of the same import is not its spelling",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f() {\n  return app_calendar.length;\n}\n',
      ),
      only: [],
    },
    {
      name: "somebody else's field happens to be called name",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f(record) {\n  let a = record.name;\n  return app_calendar(a);\n}\n',
      ),
      only: [],
    },
    {
      name: "standing on the right of the dot is not its own spelling",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f(record) {\n  return record[app_calendar.name];\n}\n',
      ),
      only: [t2],
    },
    {
      name: "two spelled, one called",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nimport { app_bible } from "./app_bible.mjs";\nimport { app_search } from "./app_search.mjs";\nexport function f() {\n  return [app_calendar.name, app_bible.name, app_search()];\n}\n',
      ),
      only: [t3, t4],
    },
    {
      name: "imported and never mentioned again",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f() {\n  return 1;\n}\n',
      ),
      only: [],
    },
    {
      name: "spelled twice and never called",
      code: text_frozen(
        'import { app_calendar } from "./app_calendar.mjs";\nexport function f() {\n  return [app_calendar.name, app_calendar.name];\n}\n',
      ),
      only: [t5],
    },
    {
      name: "nothing imported at all",
      code: text_frozen(
        "export function f(record) {\n  return record.name;\n}\n",
      ),
      only: [],
    },
  ];
  return cases;
}
