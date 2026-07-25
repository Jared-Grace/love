import { process_env_exists } from "./process_env_exists.mjs";
import { not } from "./not.mjs";
import { process_env } from "./process_env.mjs";
export function process_env_or_null(env_var_name) {
  "For a name the environment may or may not carry. Absent is an ordinary answer";
  "here, not a mistake, so it comes back as nothing rather than as an error.";
  let exists = process_env_exists(env_var_name);
  let missing = not(exists);
  if (missing) {
    return null;
  }
  let value = process_env(env_var_name);
  return value;
}
