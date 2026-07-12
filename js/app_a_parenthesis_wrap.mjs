import { app_a_parenthesis_right } from "./app_a_parenthesis_right.mjs";
import { app_a_parenthesis_left } from "./app_a_parenthesis_left.mjs";
export function app_a_parenthesis_wrap(parent, lambda) {
  app_a_parenthesis_left(parent);
  lambda();
  app_a_parenthesis_right(parent);
}
