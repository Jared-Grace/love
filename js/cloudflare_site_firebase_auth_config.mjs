import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_config_get } from "./firebase_config_get.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
export async function cloudflare_site_firebase_auth_config() {
  arguments_assert(arguments, 0);
  ("Asks the sign-in service the question a page opened at christarose.org would ask, and says whether it answers and which addresses it lists as allowed. It only reads, and the key it sends is the public one every page already carries.");
  ("A key limited to certain addresses answers a page from any other address with a refusal, which no check on the files can see, so the site's own address is sent as the one asking.");
  let config = firebase_config_get();
  let site = cloudflare_site_url();
  let url =
    "https://identitytoolkit.googleapis.com/v1/projects?key=" + config.apiKey;
  let response = await fetch(url, {
    headers: {
      Referer: site + "/",
    },
    signal: AbortSignal.timeout(60000),
  });
  let answer = await response.json();
  let r = {
    status: response.status,
    authorized_domains: answer.authorizedDomains,
    error: answer.error,
  };
  return r;
}
