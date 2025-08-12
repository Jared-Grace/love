import { file_overwrite } from "./file_overwrite.mjs";
export async function html_overwrite(name, body, file_path) {
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
