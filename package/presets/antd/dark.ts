import type { Theme } from 'unocss/preset-mini'

import type { PresetAntdDarkOptions } from './type'
import { generate } from './utils'

/**
 * 暗色主题
 */
export function dark(options: PresetAntdDarkOptions = {}): Theme {
  const {
    backgroundColor = '#141414',
    primary = '#1677ff',
    success = '#52c41a',
    warning = '#faad14',
    error = '#ff4d4f',
    info = '#1677ff'
  } = options

  return {
    colors: {
      primary: generate(primary, 'dark', backgroundColor),
      success: generate(success, 'dark', backgroundColor),
      warning: generate(warning, 'dark', backgroundColor),
      error: generate(error, 'dark', backgroundColor),
      info: generate(info, 'dark', backgroundColor)
    }
  }
}

export default dark