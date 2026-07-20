import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
import { firebase_auth_domain_project } from "./firebase_auth_domain_project.mjs";
import { firebase_storage_url_project } from "./firebase_storage_url_project.mjs";
export function firebase_config_get() {
  let project_name = firebase_project_name_jg();
  let firebase_config = {
    apiKey: "AIzaSyABi8aveEhWeD6GyRXj9FUqu_aDWxhuBGQ",
    authDomain: firebase_auth_domain_project(project_name),
    projectId: project_name,
    storageBucket: firebase_storage_url_project(project_name),
    messagingSenderId: "879920885833",
    appId: "1:879920885833:web:2f5a3cb39a398516690f98",
    measurementId: "G-B2XTX9NJCZ",
  };
  return firebase_config;
}
