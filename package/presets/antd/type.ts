import type { Theme } from 'unocss/preset-mini'
import type { PresetThemeOptions } from 'unocss-preset-theme'
import type { Preset } from '@unocss/core'

/**
 * Antd预设配置
 */
export interface PresetAntdOptions extends Omit<PresetThemeOptions<Theme>, 'theme'> {
  /**
   * Used to generate light colors
   * 亮主题背景色
   * @default #ffffff
   */
  lightBackgroundColor?: string

  /**
   * Used to generate dark theme colors
   * 暗主题背景色
   * @default #141414
   */
  darkBackgroundColor?: string

  /**
   * Base primary color
   * 主色
   * @default #1677ff
   */
  primary?: string

  /**
   * Base success color
   * 成功色
   * @default #52c41a
   */
  success?: string

  /**
   * Base warning color
   * 警告色
   * @default #faad14
   */
  warning?: string

  /**
   * Base error color
   * 异常色
   * @default #ff4d4f
   */
  error?: string

  /**
   * Base info color
   * 信息色
   * @default #1677ff
   */
  info?: string
}

export type PresetAntdReturn = Preset<Theme>

/**
 * Antd亮色主题配置
 */
export interface PresetAntdLightOptions {
  /**
   * Used to generate light theme colors
   * 背景色
   * @default #ffffff
   */
  backgroundColor?: string

  /**
   * Base primary color
   * 主色
   * @default #1677ff
   */
  primary?: string

  /**
   * Base success color
   * 成功色
   * @default #52c41a
   */
  success?: string

  /**
   * Base warning color
   * 警告色
   * @default #faad14
   */
  warning?: string

  /**
   * Base error color
   * 异常色
   * @default #ff4d4f
   */
  error?: string

  /**
   * Base info color
   * 信息色
   * @default #1677ff
   */
  info?: string
}

/**
 * Antd暗色主题配置
 */
export interface PresetAntdDarkOptions {
  /**
   * Used to generate dark theme colors
   * 背景颜色
   * @default #141414
   */
  backgroundColor?: string

  /**
   * Base primary color
   * 主色
   * @default #1677ff
   */
  primary?: string

  /**
   * Base success color
   * 成功色
   * @default #52c41a
   */
  success?: string

  /**
   * Base warning color
   * 警告色
   * @default #faad14
   */
  warning?: string

  /**
   * Base error color
   * 异常色
   * @default #ff4d4f
   */
  error?: string

  /**
   * Base info color
   * 信息色
   * @default #1677ff
   */
  info?: string
}
