import PropTypes from "prop-types";

export default function FooterLayout({ children }) {
  return (
    <footer className="h-[488px]">
      <div className="flex-col justify-center items-center">{children}</div>
    </footer>
  );
}

FooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};