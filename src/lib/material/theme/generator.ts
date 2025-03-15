import {argbFromHex} from '@material/material-color-utilities';

import {generate_material_scheme} from './colors';

export type MaterialScheme = {
  primary: string,
  surfaceTint: string,
  onPrimary: string,
  primaryContainer: string,
  onPrimaryContainer: string,
  secondary: string,
  onSecondary: string,
  secondaryContainer: string,
  onSecondaryContainer: string,
  tertiary: string,
  onTertiary: string,
  tertiaryContainer: string,
  onTertiaryContainer: string,
  error: string,
  onError: string,
  errorContainer: string,
  onErrorContainer: string,
  background: string,
  onBackground: string,
  surface: string,
  onSurface: string,
  surfaceVariant: string,
  onSurfaceVariant: string,
  outline: string,
  outlineVariant: string,
  shadow: string,
  scrim: string,
  inverseSurface: string,
  inverseOnSurface: string,
  inversePrimary: string,
  primaryFixed: string,
  onPrimaryFixed: string,
  primaryFixedDim: string,
  onPrimaryFixedVariant: string,
  secondaryFixed: string,
  onSecondaryFixed: string,
  secondaryFixedDim: string,
  onSecondaryFixedVariant: string,
  tertiaryFixed: string,
  onTertiaryFixed: string,
  tertiaryFixedDim: string,
  onTertiaryFixedVariant: string,
  surfaceDim: string,
  surfaceBright: string,
  surfaceContainerLowest: string,
  surfaceContainerLow: string,
  surfaceContainer: string,
  surfaceContainerHigh: string,
  surfaceContainerHighest: string,
};
export type MaterialTheme = {
  schemes: {
    light: MaterialScheme,
    'light-low-contrast': MaterialScheme,
    'light-high-contrast': MaterialScheme,
    dark: MaterialScheme,
    'dark-low-contrast': MaterialScheme,
    'dark-high-contrast': MaterialScheme,
  }
};

export type Brightness = 'light'|'dark'|'system';
export type ContrastLevel = 'standard'|'low'|'high'|'system';

export type MergedTheme = 'light'|'light-low-contrast'|'light-high-contrast'|
    'dark'|'dark-low-contrast'|'dark-high-contrast';

export function merge_theme(
    theme: Brightness, contrast: ContrastLevel): MergedTheme {
  return theme + {
    'standard': '',
    'high': '-high-contrast',
    'low': '-low-contrast',
    'system': '',
  }[contrast] as MergedTheme;
}

function camel_to_kebab(name: string): string {
  return Array.from(name)
      .flatMap(
          (char) =>
              char == char.toUpperCase() ? '-' + char.toLowerCase() : char)
      .join('');
}

export function generate_material_styles(scheme: MaterialScheme): string {
  return `:root { ${
      Object.entries(scheme)
          .map(
              (entry) =>
                  `--md-sys-color-${camel_to_kebab(entry[0])}: ${entry[1]};`)
          .join('')} }`;
}

export function generate_media_queries(
    material_theme: MaterialTheme,
    theme: Brightness,
    contrast: ContrastLevel,
    ): string {
  if (theme === 'system') {
    return `${
        generate_media_queries(
            material_theme,
            'light',
            contrast,
            )}

@media (prefers-color-scheme: dark) {
${
        generate_media_queries(
            material_theme,
            'dark',
            contrast,
            )}
}`;
  } else if (contrast === 'system') {
    return `${
        generate_media_queries(
            material_theme,
            theme,
            'standard',
            )}

@media (prefers-contrast: less) {
${
        generate_media_queries(
            material_theme,
            theme,
            'low',
            )}
}

@media (prefers-contrast: more) {
${
        generate_media_queries(
            material_theme,
            theme,
            'high',
            )}
}`;
  } else {
    return generate_material_styles(
        material_theme.schemes[merge_theme(
            theme,
            contrast,
            )],
    );
  }
}


export type Style = {
  class: string,
  variant: 'small'|'medium'|'large',
  size: number,
  tracking: number,
  line_height: number,
  weight: number,
  font: string
  prominent_weight?: number
};

  export type TypographyData = {
    styles: [Style]
  };

  const SP_TO_REM = 0.0625;

  // todo: prominent

  function format_style(style: Style): string {
    return `.md-type-${style.class}-${style.variant} { font-family: ${
               style.font}, system-ui; font-size: ${
               style.size * SP_TO_REM}rem; letter-spacing: ${
               style.tracking * SP_TO_REM}rem; line-height: ${
               style.line_height *
               SP_TO_REM}rem; font-weight: ${style.weight}; }` +
        (style.prominent_weight ?
             `.md-type-${style.class}-${
                 style.variant}-prominent { font-family: ${
                 style.font}, system-ui; font-size: ${
                 style.size * SP_TO_REM}rem; letter-spacing: ${
                 style.tracking * SP_TO_REM}rem; line-height: ${
                 style.line_height *
                 SP_TO_REM}rem; font-weight: ${style.prominent_weight}; }` :
             '');
  }

  export function generate_typography_classes(data: TypographyData): string {
    return data.styles.map(format_style).join('');
  }

  export function generate_material_theme(
      primary: string,
      secondary?: string,
      tertiary?: string,
      ): MaterialTheme {
    let primaryArgb = argbFromHex(primary);
    let options = {
      secondary: secondary ? argbFromHex(secondary) : undefined,
      tertiary: tertiary ? argbFromHex(tertiary) : undefined,
    };


    return {
      schemes: {
        'dark': generate_material_scheme(
            primaryArgb, 'standard', 'dark', options),
        'dark-high-contrast': generate_material_scheme(
            primaryArgb, 'high', 'dark', options),
        'dark-low-contrast': generate_material_scheme(
            primaryArgb, 'low', 'dark', options),
        'light': generate_material_scheme(
            primaryArgb, 'standard', 'light', options),
        'light-high-contrast': generate_material_scheme(
            primaryArgb, 'high', 'light', options),
        'light-low-contrast': generate_material_scheme(
            primaryArgb, 'low', 'light', options),
      }
    }
  }