import { list_random_item } from "./list_random_item.mjs";
export function g_name_jesus() {
  "a random name/title for Jesus, for user-facing text that NAMES Him — so His many names are honored and the wording varies (Phil 2:9-11 'the name above every name'); the 'God and Savior' titles affirm His deity (Titus 2:13; 2 Pet 1:1). all read interchangeably in the prayer/gratitude contexts (in the name of X, saving me through X, X died / returns)";
  let names = [
    "Jesus",
    "Christ",
    "Jesus Christ",
    "the Lord Jesus",
    "our Lord and Savior",
    "the Son of God",
    "the Messiah",
    "our God and Savior",
    "our great God and Savior",
  ];
  let name = list_random_item(names);
  return name;
}
