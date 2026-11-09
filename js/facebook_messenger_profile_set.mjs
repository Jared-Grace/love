import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { file_json_transform_initialize_default } from "./file_json_transform_initialize_default.mjs";
export async function facebook_messenger_profile_set(thread_id, profile_url) {
  "$plain thread_id";
  "$plain profile_url";
  "Keeps, in the private file, that messenger conversation number thread_id is with the person whose facebook profile is profile_url. Setting it again replaces it; what else is kept about the person stays.";
  "★ ONE ADDRESS PER PERSON: a '#' and what follows it name a place on the page, not the person, so they are dropped; the query is kept, because 'profile.php?id=' names the person in it.";
  let profile = profile_url.split("#")[0];
  let file = facebook_messenger_profiles_file();
  function lambda(data) {
    let kept = data[thread_id] || {};
    data[thread_id] = {
      ...kept,
      profile,
    };
  }
  await file_json_transform_initialize_default(file, lambda);
  let r = {
    thread_id,
    profile,
    file,
  };
  return r;
}
