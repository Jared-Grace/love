import { app_api_fn_args } from "../../../love/public/src/app_api_fn_args.mjs";
export async function app_api_fn(fn) {
  let v = await app_api_fn_args(fn, []);
  return v;
}
