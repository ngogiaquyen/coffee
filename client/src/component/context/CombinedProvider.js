import { NavBarProvider } from './NavBarProvider';
import { WheelProvider } from './WheelProvider';

function CombinedProvider({ children }) {
  return (
    <NavBarProvider>
      <WheelProvider>{children}</WheelProvider>
    </NavBarProvider>
  );
}

export default CombinedProvider;
