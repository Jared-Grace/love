import { app_replace_hash_write } from "./app_replace_hash_write.mjs";
export function app_replace_after_refresh(context) {
  "runs after each screen draws: keep the address in step with where the learner is";
  app_replace_hash_write(context);
}
