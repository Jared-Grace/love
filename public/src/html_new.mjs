import { file_overwrite } from "./file_overwrite.mjs";
export async function html_new(name) {
  await file_overwrite(
    name,
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
</head>
<body>

</body>
</html>`,
  );
}
