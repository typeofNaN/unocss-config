# Unocss Config 🍰

快速配置 Unocss，内含预设，转换，命名集合等。

## Installation

``` sh
# using npm
npm install unocss-config --save

# using yarn
yarn add unocss-config

# using pnpm
pnpm add unocss-config
```

## Usage

``` ts
// unocss.config.ts

import { defineConfig } from 'unocss'
import { presetAntd, commonShortcut } from 'unocss-config'

export default defineConfig({
  // ... 其他配置
  presets: [
    // ... 其他预设
    presetAntd()
  ],
  shortcuts: {
    // ... 其他命名集合
    ...commonShortcut
  }
})

```

## Methods

### 预设

* presetAntd

### 命名集合

* commonShortcut
