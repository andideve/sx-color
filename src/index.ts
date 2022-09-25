import { system, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { ColorProps } from './types';

const config: SystemConfig<ColorProps> = {
  color: {
    property: 'color',
    scale: ThemeKey.colors,
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: ThemeKey.colors,
  },
  opacity: true,
};
config.bg = config.backgroundColor;

export const color = system(config);

export { ColorProps };
export default color;
