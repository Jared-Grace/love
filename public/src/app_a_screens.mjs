import { app_karate_name_sign_up } from "../../../karate_code/public/src/app_karate_name_sign_up.mjs";
import { app_karate_email_verify } from "../../../karate_code/public/src/app_karate_email_verify.mjs";
import { app_karate_settings_computer_save } from "../../../karate_code/public/src/app_karate_settings_computer_save.mjs";
import { app_karate_settings } from "../../../karate_code/public/src/app_karate_settings.mjs";
import { app_karate_computer_save } from "../../../karate_code/public/src/app_karate_computer_save.mjs";
import { app_karate_email } from "../../../karate_code/public/src/app_karate_email.mjs";
import { app_karate_home } from "../../../karate_code/public/src/app_karate_home.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_screens() {
  marker("screens");
  let v = {
    home: app_karate_home,
    email: app_karate_email,
    computer_save: app_karate_computer_save,
    settings: app_karate_settings,
    settings_computer_save: app_karate_settings_computer_save,
    email_verify: app_karate_email_verify,
    name_sign_up: app_karate_name_sign_up,
  };
  return v;
}
