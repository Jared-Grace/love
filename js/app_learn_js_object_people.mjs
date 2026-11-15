import { arguments_assert } from "./arguments_assert.mjs";
export function app_learn_js_object_people() {
  arguments_assert(arguments, 0);
  ("the people the reading-a-property lessons write as objects, each with the town they lived in, so no program says something false: Mary of Nazareth, Paul of Tarsus, Martha of Bethany, Lydia of Thyatira, Zacchaeus of Jericho, Peter of Capernaum (Mark 1:21, 29)");
  let people = [
    {
      name: "Mary",
      town: "Nazareth",
    },
    {
      name: "Paul",
      town: "Tarsus",
    },
    {
      name: "Martha",
      town: "Bethany",
    },
    {
      name: "Lydia",
      town: "Thyatira",
    },
    {
      name: "Zacchaeus",
      town: "Jericho",
    },
    {
      name: "Peter",
      town: "Capernaum",
    },
  ];
  return people;
}
