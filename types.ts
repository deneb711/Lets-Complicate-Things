export enum RoutePath {
  HOME = '/',
  GUESS = '/be-my-guess',
  WHO_AM_I = '/who-am-i',
  SANDRA = '/sandra-bothard',
  EAT = '/lets-eat-complicated'
}

export interface MenuItem {
  label: string;
  path: RoutePath;
  color: string;
  description: string;
}

export interface ThemeColors {
  primary: string;
  glow: string;
}