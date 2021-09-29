import 'styled-components';
import { Colors } from '../styles/Theme';

export type ColorsPalette = Record<keyof typeof Colors, string>;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsPalette;
  }
}
