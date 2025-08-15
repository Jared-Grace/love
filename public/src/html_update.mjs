import {file_open} from './file_open.mjs';
import {html_overwrite} from './html_overwrite.mjs';
import {html_name_to_path} from './html_name_to_path.mjs';
export async function html_update(name) {
  let file_path = html_name_to_path(name);
  let body = `<script type="module">
    import { sayHello } from './greetings.js';
    sayHello('World');
  </script>`;
  await html_overwrite(name, body);
  await file_open(file_path);
}
