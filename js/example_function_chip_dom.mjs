import { example_source_link_dom } from "./example_source_link_dom.mjs";
import { example_chip_style } from "./example_chip_style.mjs";
import { function_github_url } from "./function_github_url.mjs";
// The FUNCTION chip, as a link to the fn's source file on GitHub. The fn name is
// the strong, click-through reference this repo anchors examples on — so make it
// actually clickable. Dark chip look; same source-link behavior as the inline
// note fn links.
export function example_function_chip_dom(parent, fn_name) {
  let chip = example_source_link_dom(parent, fn_name, function_github_url(fn_name));
  example_chip_style(chip);
  return chip;
}
