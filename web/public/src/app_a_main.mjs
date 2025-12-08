import { http_generic } from "../../../love/public/src/http_generic.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_main() {
  marker("1");
  let v = await http_generic("/api", {
    method: "POST",
    body: {
      test: 123,
    },
  });
  log({
    v,
  });
  alert(v);
}
