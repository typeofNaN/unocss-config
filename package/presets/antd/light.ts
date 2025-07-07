import type { Theme } from 'unocss/preset-mini'

import type { PresetAntdLightOptions } from './type'
import { generate } from './utils'

/**
 * 亮色主题
 */
export function light(options: PresetAntdLightOptions = {}): Theme {
  const {
    backgroundColor = '#ffffff',
    primary = '#1677ff',
    success = '#52c41a',
    warning = '#faad14',
    error = '#ff4d4f',
    info = '#1677ff'
  } = options

  return {
    colors: {
      primary: generate(primary, 'default', backgroundColor),
      success: generate(success, 'default', backgroundColor),
      warning: generate(warning, 'default', backgroundColor),
      error: generate(error, 'default', backgroundColor),
      info: generate(info, 'default', backgroundColor)
    }
  }
}

export default light