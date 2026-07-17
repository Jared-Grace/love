import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_meta_viewport_content } from "./html_meta_viewport_content.mjs";
export function html_code(name, body) {
  let r = text_combine_multiple([
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="',
    html_meta_viewport_content(),
    '">\n  <title>',
    name,
    "</title>\n</head>\n<body>\n  ",
    body,
    "\n</body>\n</html>",
  ]);
  return r;
}
