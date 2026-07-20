import { text_combine } from "./text_combine.mjs";

// Firebase generates this host from the project id when the project is
// created, so it is derived rather than configured - same as
// firebase_storage_url_project.
export function firebase_auth_domain_project(project_name) {
  let domain = text_combine(project_name, ".firebaseapp.com");
  return domain;
}
