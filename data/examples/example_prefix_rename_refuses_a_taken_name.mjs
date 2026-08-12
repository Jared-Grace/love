import { functions_rename_if_starts_with } from "../../js/functions_rename_if_starts_with.mjs";
export const example = {
  fn: functions_rename_if_starts_with.name,
  args: ["list_", "roll_"],
  kind: "files",
  refuses: true,
  title: "Refuse a whole prefix migration because one name it would land on is taken",
  note: [
    "A prefix migration renames a family in one go, so the question of a taken name is asked once for every member. ",
    { code: "list_size" },
    " has nowhere to land but ",
    { code: "roll_size" },
    ", which is free. ",
    { code: "list_first" },
    " has nowhere to land but ",
    { code: "roll_first" },
    ", which already exists. Every new name is checked before any file moves, so one taken name stops the whole migration — otherwise the family arrives split in two, half under the old prefix and half under the new, with one function destroyed on the way.",
  ],
  expectText: "refused — roll_first is already taken",
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "list_first.mjs",
      source: `export function list_first(list) {
  return list[0];
}`,
    },
    {
      name: "roll_first.mjs",
      source: `export function roll_first(sides) {
  return sides;
}`,
    },
  ],
};
