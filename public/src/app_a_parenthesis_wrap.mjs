import { app_a_parenthesis_right } from "../../../love/public/src/app_a_parenthesis_right.mjs";
import { app_a_parenthesis_left } from "../../../love/public/src/app_a_parenthesis_left.mjs";
export function app_a_parenthesis_wrap(parent, lambda) {
  app_a_parenthesis_left(parent);
  lambda();
  app_a_parenthesis_right(parent);
}
