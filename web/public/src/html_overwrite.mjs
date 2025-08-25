import { html_name_to_path } from "./html_name_to_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function html_overwrite(name, file_path, body) {
  let file_path = html_name_to_path(name);
  let contents = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
</head>
<body>
  ${body}
</body>
</html>`;
  await file_overwrite(file_path, contents);
}
