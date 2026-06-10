import NavigBar from './NavigBar';
import {Outlet} from "react-router-dom";
import FooterComponent from './FooterComponent';

export default function Layout() {
  return (
   <div>
  <NavigBar />
  <main >
    <Outlet />
  </main>
  <FooterComponent />


    </div>
  );
}
