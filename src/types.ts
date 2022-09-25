import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

interface BaseProps {
  color?: ResponsiveValue<CSSProperties['color']>;
  backgroundColor?: ResponsiveValue<CSSProperties['backgroundColor']>;
  opacity?: ResponsiveValue<CSSProperties['opacity']>;
}

interface OtherProps {
  bg?: BaseProps['backgroundColor'];
}

export type ColorProps = BaseProps & OtherProps;
