import { list_random_item } from "./list_random_item.mjs";
export function g_name_jesus() {
  "a random name/title for Jesus, for user-facing text that NAMES Him — so His many names are honored and the wording varies (Phil 2:9-11 'the name above every name'). all of these read interchangeably in the prayer/gratitude contexts (in the name of X, saving me through X, X died / returns)";
  let names = [
    "Jesus",
    "Christ",
    "Jesus Christ",
    "the Lord Jesus",
    "the Savior",
    "the Son of God",
    "the Messiah",
  ];
  let name = list_random_item(names);
  return name;
}
