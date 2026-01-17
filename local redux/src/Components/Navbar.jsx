import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const routes = [
    { path: '/', element: 'Home' },
    { path: '/Login', element: 'Login' },
    { path: '/Signup', element: 'Signup' },
    { path: '/Counter', element: 'Counter' },
    { path: '/todo', element: 'Todo' }
  ];

  return (
    <>
      {routes.map((el, i) => (
        <NavLink
          to={el.path}
          key={i}
          style={{
            display: 'inline-flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100px',
            margin: '20px',
          }}
        >
          {el.element}
        </NavLink>
      ))}
    </>
  );
};