import { function_param_rename } from "../../js/function_param_rename.mjs";
export const example = {
  fn: function_param_rename.name,
  args: ["chapter_file_name", "chapter_code", "chapter_id"],
  kind: "files",
  title: "A parameter's rename carries its plain marker with it",
  note: [
    { fn: function_param_rename.name },
    " spells one parameter differently everywhere inside its own function, and nothing outside moves — a call hands its arguments over in order and never says what the far end calls them. The line worth watching is ",
    { code: '"$plain chapter_code"' },
    ", which declares that the parameter carries ordinary data rather than a command or a path, and so decides whether this function may be auto-approved. It is written-out text, not a mention of the parameter, so a rename that moves every mention walks straight past it. Left behind, it would name a parameter the function no longer has — and the reader matches a marker against the parameter list, so a marker naming nothing reads as ",
    { code: "nothing declared" },
    " rather than as a mistake. The parameter would quietly stop being declared plain, the standing grant over it would start being refused, and no line anywhere would go red. This pins the marker moving.",
  ],
  before: [
    {
      name: "chapter_file_name.mjs",
      source: `export function chapter_file_name(chapter_code) {
  "$plain chapter_code";
  let name = text_combine(chapter_code, ".json");
  return name;
}`,
    },
  ],
  after: [
    {
      name: "chapter_file_name.mjs",
      source: `export function chapter_file_name(chapter_id) {
  "$plain chapter_id";
  let name = text_combine(chapter_id, ".json");
  return name;
}`,
    },
  ],
};
