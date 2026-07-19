import { html_a } from "./html_a.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_chip_style } from "./example_chip_style.mjs";
import { function_github_url } from "./function_github_url.mjs";
// The FUNCTION chip, as a link to the fn's source file on GitHub. The fn name is
// the strong, click-through reference this repo anchors examples on — so make it
// actually clickable. Same dark chip look as the plain chip.
export function example_function_chip_dom(parent, fn_name) {
  let chip = html_a(parent);
  html_text_content_set(chip, fn_name);
  html_attribute_set(chip, "href", function_github_url(fn_name));
  html_attribute_set(chip, "target", "_blank");
  example_chip_style(chip);
  html_style_set(chip, "text-decoration", "none");
  html_style_set(chip, "cursor", "pointer");
  html_style_set(chip, "display", "inline-block");
  return chip;
}
