import { app_replace } from "./app_replace.mjs";
export function apps_frozen() {
  "these apps should not be changed in prod or deleted";
  "Emptying this list breaks the repo, which is worth knowing before anybody tries it again. A worked example in the corpus takes its subject from the first app named here, so with nothing named it throws while its own file is being read - and a file in that folder that throws as it loads takes the whole corpus with it, every gate that reads the corpus, and therefore the sending of every app. Measured 2026-08-14: five gates red at once, none of them about the app being sent";
  let r = [app_replace];
  return r;
}
