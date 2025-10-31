import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout({ loggedIn, isAdmin, setLoggedIn }) {
  return (
    <>
      <div>
        <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} isAdmin={isAdmin} />
      </div>
      <main>
        
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
