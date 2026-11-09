import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { file_json_transform_initialize_default } from "./file_json_transform_initialize_default.mjs";
export async function facebook_messenger_profile_languages_set(
  thread_id,
  languages,
) {
  "$plain thread_id";
  "$plain languages";
  "Keeps, in the private file, the languages the person in messenger conversation number thread_id reads their passages in. Setting them again replaces them; what else is kept about the person stays.";
  let file = facebook_messenger_profiles_file();
  function lambda(data) {
    let kept = data[thread_id] || {};
    data[thread_id] = {
      ...kept,
      languages,
    };
  }
  await file_json_transform_initialize_default(file, lambda);
  let r = {
    thread_id,
    languages,
    file,
  };
  return r;
}
