import { Outlet,Link } from "react-router-dom";

export const Root = ():JSX.Element => {
  return (
    <>
      {/* all the other elements */}
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
