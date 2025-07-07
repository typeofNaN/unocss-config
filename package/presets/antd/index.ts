import { presetTheme } from 'unocss-preset-theme'

import { dark } from './dark'
import { light } from './light'
import type { PresetAntdOptions, PresetAntdReturn } from './type'

/**
 * Antd 预设
 */
export function presetAntd(options: PresetAntdOptions = {}): PresetAntdReturn {
  const {
    prefix = '--un-preset-antd',
    selectors,
    lightBackgroundColor = '#ffffff',
    darkBackgroundColor = '#141414',
    primary = '#1677ff',
    success = '#52c41a',
    warning = '#faad14',
    error = '#ff4d4f',
    info = '#1677ff'
  } = options

  return presetTheme({
    prefix,
    selectors,
    theme: {
      light: light({
        backgroundColor: lightBackgroundColor,
        primary,
        success,
        warning,
        error,
        info
      }),
      dark: dark({
        backgroundColor: darkBackgroundColor,
        primary,
        success,
        warning,
        error,
        info
      })
    }
  })
}
