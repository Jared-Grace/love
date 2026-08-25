import { text_frozen } from "./text_frozen.mjs";
export function functions_search_family_or_null_cases() {
  "Six searches written down beside the names each one answered with, and beside the longer beginning those names should be reported as sharing, or nothing where they should be reported as sharing none.";
  "The two that must stay quiet are what the corpus is really for. A warning worth reading is one that hardly ever fires, and the two commonest searches in this repo - a prefix typed out in full, and a word that happens to end where the next one begins - would both fire under any rule that only asks whether the names share a beginning at all.";
  "The names are frozen text, because the pass that turns a mentioned name into a reference would otherwise rewrite them and the case would stop asking what it was written for.";
  let t = text_frozen("js_guard_statements");
  let t2 = text_frozen("js_guard_statements_cases");
  let t3 = text_frozen("js_guard_statements_cases_gate_run");
  let t4 = text_frozen("js_guard_statements_shape_assert");
  let t5 = text_frozen("app_a_app");
  let t6 = text_frozen("app_a_file_system_initialize");
  let t7 = text_frozen("app_a_list_chooser");
  let t8 = text_frozen("text_pad_left");
  let t9 = text_frozen("text_pad_right");
  let t10 = text_frozen("js_selects_guard_add_before");
  let t11 = text_frozen("js_selects_guard_add_after");
  let t12 = text_frozen("list_first");
  let t13 = text_frozen("property_list_first");
  let t14 = text_frozen("texts_start_shared");
  let cases = [
    {
      name: "the measured miss - a whole family answered a search for something none of them is, and every one of them begins with a word longer than the one asked for",
      names: [t, t2, t3, t4],
      search: text_frozen("js_guard"),
      family: text_frozen("js_guard_statements"),
    },
    {
      name: "an anchored prefix typed out in full, which is the shape somebody types when they already know what they are asking for and must never be warned about",
      names: [t5, t6, t7],
      search: text_frozen("app_a_"),
      family: null,
    },
    {
      name: "a word ending exactly where the next one begins, so the only thing shared beyond it is the underscore between them",
      names: [t8, t9],
      search: text_frozen("text_pad"),
      family: null,
    },
    {
      name: "two words asked together, and the names all reach well past both of them",
      names: [t10, t11],
      search: text_frozen("selects,guard"),
      family: text_frozen("js_selects_guard_add_"),
    },
    {
      name: "names sharing no beginning at all, which is what a search across areas of the repo looks like",
      names: [t12, t13],
      search: text_frozen("first"),
      family: null,
    },
    {
      name: "one name on its own, which shares the whole of itself with itself and so says nothing about any family",
      names: [t14],
      search: text_frozen("start"),
      family: null,
    },
  ];
  return cases;
}
