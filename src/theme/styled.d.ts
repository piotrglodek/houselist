import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
        primary: string,
        white: string,
        black: string,
        gray:string
      },
  }
}