import PropTypes from 'prop-types';

export default function HeaderLayout({ children }) {
    return (
      <header className="h-[136px] ">
        <nav>
          {children}
        </nav>
      </header>
    );
}

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};