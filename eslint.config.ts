import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import vueConfigPrettier from '@vue/eslint-config-prettier'

export default defineConfigWithVueTs(
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: { globals: globals.browser }
  },
  pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  js.configs.recommended,
  vueTsConfigs.recommended,
  vueConfigPrettier,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  globalIgnores(['node_modules', 'dist', 'public'])
)
