import { function_param_rename } from "../../js/function_param_rename.mjs";
export const example = {
  fn: function_param_rename.name,
  args: ["chapter_file_name", "name", "label"],
  kind: "files",
  refuses: true,
  title: "Refuse to rename a word that is not a parameter",
  note: [
    { code: "name" },
    " is written twice in this function, so the rename underneath would find it and move it — and report a clean run. But it is a local the body opened, not a parameter the caller fills, and ",
    { fn: function_param_rename.name },
    " is the command for parameters. So it refuses, and names the parameters there actually are. The refusal is the whole reason this command exists beside the plain identifier rename: that one treats a word it cannot find as nothing to do, so a mistyped parameter comes back looking exactly like a rename that worked, and a word that is there but is the wrong kind of thing gets moved without anyone asking.",
  ],
  expectText: "refused — chapter_file_name has no parameter called name",
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
};
