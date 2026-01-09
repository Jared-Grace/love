import { server_port } from "../../../love/public/src/server_port.mjs";
export function server_url() {
  const port = server_port();
  let v4 = "http://localhost:" + port;
  return v4;
}
