import { g_objection_generate_migrate } from "../../../love/public/src/g_objection_generate_migrate.mjs";
export async function sandbox() {
  await g_objection_generate_migrate();
}
