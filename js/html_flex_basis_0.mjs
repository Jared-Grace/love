import { html_style_set } from "./html_style_set.mjs";
export function html_flex_basis_0(component) {
  "Make what is inside this part of a row count for nothing when the row decides how wide to make it.";
  "Growing by the same share is not the same as ending up the same width. A row hands out only the space left over after each part has been given room for what is written in it, so two buttons growing equally still differ by exactly as much as their words differ - and words differ most in the language a reader did not write in.";
  html_style_set(component, "flex-basis", "0");
}
