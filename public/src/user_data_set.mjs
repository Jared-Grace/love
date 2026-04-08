import { user_data_set_fn } from "../../../love/public/src/user_data_set_fn.mjs";
export async function user_data_set(property_name, repo_name) {
  async function lambda(previous) {
    return repo_name;
  }
  await user_data_set_fn(property_name, lambda);
}
