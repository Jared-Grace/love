import { property_or_null } from "./property_or_null.mjs";
export function process_env_or_null(env_var_name) {
  ("For a name the environment may or may not carry. Absent is an ordinary answer");
  ("here, not a mistake, so it comes back as nothing rather than as an error.");
  let value = property_or_null(process.env, env_var_name);
  return value;
}
