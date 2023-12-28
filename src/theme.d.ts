import "styled-components";
import { Theme } from "./ui/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
