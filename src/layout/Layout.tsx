// Layout.js
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }:any) => {
  return (
    <div>
      <div>
      <Header />
      </div>
<div className="min-h-screen">{children}</div>

      <Footer/>
    </div>
  );
};

export default Layout;
