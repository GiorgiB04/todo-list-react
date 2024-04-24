import { AppName } from "./styled";

const Header = ({ title }) => (
  <AppName>
    <header>
      <h1>{title}</h1>
    </header>
  </AppName>
);

export default Header;
