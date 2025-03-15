import {DynamicScheme, Hct, hexFromArgb, TonalPalette} from '@material/material-color-utilities';

import type {Brightness, ContrastLevel, MaterialScheme} from './generator';

export function generate_material_scheme(
    primary: number, contrast: ContrastLevel, brightness: Brightness, options: {
      secondary?: number,
      tertiary?: number,
    }): MaterialScheme {
  //   JSON.parse(ColorTheme())

  let hue = Hct.fromInt(primary).hue;

  let rotatedHue = hue + 60.0 % 360;

  if (rotatedHue > 0) {
    rotatedHue += 360;
  }

  let scheme = new DynamicScheme({
    sourceColorArgb: primary,
    // @ts-ignore
    variant: 'TONAL_SPOT',
    isDark: brightness == 'dark',
    contrastLevel: {'high': 1, 'low': -1, 'system': 0, 'standard': 0}[contrast],
    primaryPalette: TonalPalette.fromHueAndChroma(hue, 36.0),
    secondaryPalette: options.secondary ?
        TonalPalette.fromHueAndChroma(options.secondary, 16.0) :
        TonalPalette.fromHueAndChroma(hue, 16.0),
    tertiaryPalette: options.tertiary ? TonalPalette.fromHueAndChroma(
                                            Hct.fromInt(options.tertiary).hue,
                                            24.0,
                                            ) :
                                        TonalPalette.fromHueAndChroma(
                                            rotatedHue,
                                            24.0,
                                            ),
    neutralPalette: TonalPalette.fromHueAndChroma(hue, 6.0),
    neutralVariantPalette: TonalPalette.fromHueAndChroma(hue, 8.0),
  });

  return {
    background: hexFromArgb(scheme.background),
    onBackground: hexFromArgb(scheme.onBackground),
    surface: hexFromArgb(scheme.surface),
    surfaceDim: hexFromArgb(scheme.surfaceDim),
    surfaceBright: hexFromArgb(scheme.surfaceBright),
    surfaceContainerLowest: hexFromArgb(scheme.surfaceContainerLowest),
    surfaceContainerLow: hexFromArgb(scheme.surfaceContainerLow),
    surfaceContainer: hexFromArgb(scheme.surfaceContainer),
    surfaceContainerHigh: hexFromArgb(scheme.surfaceContainerHigh),
    surfaceContainerHighest: hexFromArgb(scheme.surfaceContainerHighest),
    onSurface: hexFromArgb(scheme.onSurface),
    surfaceVariant: hexFromArgb(scheme.surfaceVariant),
    onSurfaceVariant: hexFromArgb(scheme.onSurfaceVariant),
    inverseSurface: hexFromArgb(scheme.inverseSurface),
    inverseOnSurface: hexFromArgb(scheme.inverseOnSurface),
    outline: hexFromArgb(scheme.outline),
    outlineVariant: hexFromArgb(scheme.outlineVariant),
    shadow: hexFromArgb(scheme.shadow),
    scrim: hexFromArgb(scheme.scrim),
    surfaceTint: hexFromArgb(scheme.surfaceTint),
    primary: hexFromArgb(scheme.primary),
    onPrimary: hexFromArgb(scheme.onPrimary),
    primaryContainer: hexFromArgb(scheme.primaryContainer),
    onPrimaryContainer: hexFromArgb(scheme.onPrimaryContainer),
    inversePrimary: hexFromArgb(scheme.inversePrimary),
    secondary: hexFromArgb(scheme.secondary),
    onSecondary: hexFromArgb(scheme.onSecondary),
    secondaryContainer: hexFromArgb(scheme.secondaryContainer),
    onSecondaryContainer: hexFromArgb(scheme.onSecondaryContainer),
    tertiary: hexFromArgb(scheme.tertiary),
    onTertiary: hexFromArgb(scheme.onTertiary),
    tertiaryContainer: hexFromArgb(scheme.tertiaryContainer),
    onTertiaryContainer: hexFromArgb(scheme.onTertiaryContainer),
    error: hexFromArgb(scheme.error),
    onError: hexFromArgb(scheme.onError),
    errorContainer: hexFromArgb(scheme.errorContainer),
    onErrorContainer: hexFromArgb(scheme.onErrorContainer),
    primaryFixed: hexFromArgb(scheme.primaryFixed),
    primaryFixedDim: hexFromArgb(scheme.primaryFixedDim),
    onPrimaryFixed: hexFromArgb(scheme.onPrimaryFixed),
    onPrimaryFixedVariant: hexFromArgb(scheme.onPrimaryFixedVariant),
    secondaryFixed: hexFromArgb(scheme.secondaryFixed),
    secondaryFixedDim: hexFromArgb(scheme.secondaryFixedDim),
    onSecondaryFixed: hexFromArgb(scheme.onSecondaryFixed),
    onSecondaryFixedVariant: hexFromArgb(scheme.onSecondaryFixedVariant),
    tertiaryFixed: hexFromArgb(scheme.tertiaryFixed),
    tertiaryFixedDim: hexFromArgb(scheme.tertiaryFixedDim),
    onTertiaryFixed: hexFromArgb(scheme.onTertiaryFixed),
    onTertiaryFixedVariant: hexFromArgb(scheme.onTertiaryFixedVariant),
  };
}