import { apps_names_dev } from "./apps_names_dev.mjs";
import { each_async } from "./each_async.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
export async function apps_dev_build_all() {
  "rebuild every dev app, for a change to something they ALL bake in - the shared html shell, the boot splash, the loading spinner. rebuilding only the page in front of you leaves every other page showing the old thing, which then reads as the change not having worked. it asks for the app list itself rather than being handed one, so it cannot drift from the apps that actually exist, and each app commits as it lands under its own name";
  await ai_git_noted();
  let names = await apps_names_dev();
  async function build(name) {
    let args = [name];
    await function_call_commit(app_shared_dev_build, args);
  }
  await each_async(names, build);
  return names;
}
