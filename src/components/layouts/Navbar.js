import classes from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h3>API Encyclopedia</h3>
      </div>
      <ul className={classes.links}>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Browse</a>
        </li>
      </ul>
      <div className={classes.burger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
