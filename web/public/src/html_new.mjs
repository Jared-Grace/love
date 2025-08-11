import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { marker } from "./marker.mjs";
import { file_write } from "./file_write.mjs";
import { file_open } from "./file_open.mjs";
import { folder_public_combine } from "./folder_public_combine.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function html_new(name) {
  marker("1");
  const file_name = file_name_html(name);
  const file_path = folder_public_combine(file_name);
  const body = `<script type="module">
    import { sayHello } from './greetings.js';
    sayHello('World');
  </script>`;
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
  await assert_file_exists_not(file_path);
  await file_overwrite(file_path, contents);
  await file_open(file_path);
}
