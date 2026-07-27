import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_params_get } from "./function_params_get.mjs";
import { function_params_plain } from "./function_params_plain.mjs";
import { permission_grant_words_unsafe } from "./permission_grant_words_unsafe.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { text_includes } from "./text_includes.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_selects_unsafe_params() {
  "Every transform that can be handed a line of written code, and so every one";
  "that carries arbitrary text through a command already approved.";
  "A standing approval is refused to any function with a parameter reading as a";
  "code, on the ground that one approval covers every argument it will ever be";
  "handed. The command that pairs an address with a verb holds that approval and";
  "names its verb in an argument, so whatever these take, it takes.";
  "Reported rather than refused, because some of them are meant to exist and";
  "saying which is not a judgment this can make.";
  let love = await repo_functions_names("love");
  let words = permission_grant_words_unsafe();
  let offenders = [];
  for (let name of love) {
    let params = await function_params_get(name);
    let count = list_size(params);
    let two = greater_than(count, 1);
    if (two) {
      let second = list_get(params, 1);
      let second_name = second.name;
      let shaped = equal(second_name, "selects");
      if (shaped) {
        let plain = await function_params_plain(name);
        ("A parameter gathering the rest of the arguments is not a name and has");
        ("none to read, so it is passed over rather than asked for one.");
        let names = [];
        for (let param of params) {
          let named_is = js_identifier_is(param);
          if (named_is) {
            let param_name_found = property_get(param, "name");
            list_add(names, param_name_found);
          }
        }
        let unsafe = [];
        for (let param_name of names) {
          let declared = list_includes(plain, param_name);
          if (declared) {
            continue;
          }
          for (let word of words) {
            let matches = text_includes(param_name, word);
            if (matches) {
              list_add_if_not_includes(unsafe, param_name);
            }
          }
        }
        let any = list_empty_not_is(unsafe);
        if (any) {
          list_add(offenders, {
            name,
            unsafe,
          });
        }
      }
    }
  }
  return offenders;
}
