import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';

function SideBarBrand(props) {
  const {
    imageClass,
    logoMini,
    logoNormal,
    link,
    logo,
    logoText,
    logoClasses,
  } = props;

  return (
    <div className={logoClasses}>
      <Link href={link} target="_blank" className={logoMini}>
        <img src={logo} alt="logo" className={imageClass} />
      </Link>
      <Link href={link} target="_blank" className={logoNormal}>
        {logoText}
      </Link>
    </div>
  );
}

SideBarBrand.defaultProps = {
  logoText: 'Donald Whitely',
};

SideBarBrand.propTypes = {
  logoText: PropTypes.string,
  logoClasses: PropTypes.string,
  link: PropTypes.string,
  imageClass: PropTypes.string,
  logo: PropTypes.string,
  logoMini: PropTypes.string,
  logoNormal: PropTypes.string,
};

export default SideBarBrand;
