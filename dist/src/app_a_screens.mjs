import { app_a_history } from "../../../love/public/src/app_a_history.mjs";
import { app_a_app } from "../../../love/public/src/app_a_app.mjs";
import { app_a_app_run } from "../../../love/public/src/app_a_app_run.mjs";
import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { app_a_apps } from "../../../love/public/src/app_a_apps.mjs";
import { app_a_functions } from "../../../love/public/src/app_a_functions.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
export function app_a_screens() {
  let v = [
    app_a_functions,
    app_a_function,
    app_a_apps,
    app_a_home,
    app_a_app_run,
    app_a_app,
    app_a_history,
  ];
  return v;
}
