import NavbarLayout from "./NavbarLayout";
import FooterLayout from "./FooterLayout";
import PropTypes from 'prop-types';
import Footer from "../components/Footer";
import Header from "../components/Header";

const PageContent = ({ children }) => {
    console.log("PageContent children:", children);

  return (
    <div><NavbarLayout>
      {/* Header (Navbar) */}<Header/>
      </NavbarLayout>

      {/* Sayfa İçeriği */}
      <main>{}</main>

        <FooterLayout>
      {/* Footer */} <Footer />
      </FooterLayout>
    </div>
  );
};
PageContent.propTypes = {
  children: PropTypes.node,
};

export default PageContent;