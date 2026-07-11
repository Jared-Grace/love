import { server_port } from "../../../love/public/src/server_port.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function server_url() {
  let port = server_port();
  let url = text_combine("http://localhost:", port);
  return url;
}
