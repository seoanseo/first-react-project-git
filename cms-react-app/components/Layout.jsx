import layoutStyles from '../styles/layout.module.css';

function Layout({ children,addClass }) {
  const combinedClassNames = addClass ? `${layoutStyles.layout} ${addClass}` : layoutStyles.layout;
  return <div className={combinedClassNames}>{children}</div>;}

export default Layout;

