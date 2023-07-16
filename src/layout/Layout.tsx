// Layout.js
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }:any) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
