import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';

declare module '@mui/material/styles' {
  interface Palette {
    appbar: Palette['background'];
  }
  interface PaletteOptions {
    appbar: PaletteOptions['background'];
  }
}

export default {
  Light: LightTheme,
  Dark: DarkTheme
};
