import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: { globals: globals.node },
    ignores: ['node_modules'],
    rules: {
      'prefer-const': 'error',
      eqeqeq: 'error',
      'valid-typeof': 'error', /** operasi perbandingan harus valid: https://eslint.org/docs/latest/rules/valid-typeof */
      'no-unused-expressions': 'error', /** melarang untuk tidak membuat ekspresi yang tidak terpakai: https://eslint.org/docs/latest/rules/no-unused-expressions */
      'no-var': 'error', /** melarang menggunakan var: https://eslint.org/docs/latest/rules/no-var */
      'require-await': 'error', /** mengharuskan menggunakan await ketika menggunakan async: https://eslint.org/docs/latest/rules/require-await */
      'for-direction': 'error', /** mengharuskan kondisi for-loop yang benar: https://eslint.org/docs/latest/rules/for-direction */
      'no-await-in-loop': 'error', /** memberikan pesan error jika ada Promise di dalam loop: https://eslint.org/docs/latest/rules/no-await-in-loop */
    },
    // plugins: { js },
    // extends: ["js/recommended"],
  },
]);
