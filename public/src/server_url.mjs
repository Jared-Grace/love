import { server_port } from "../../../love/public/src/server_port.mjs";
export function server_url() {
  const port = server_port();
  let url = "http://localhost:" + port;
  return url;
}
