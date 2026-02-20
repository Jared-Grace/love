import { npm_install_generic } from "../../../love/public/src/npm_install_generic.mjs";
export async function npm_install(package_name) {
  let before = "";
  await npm_install_generic(package_name, before);
}
