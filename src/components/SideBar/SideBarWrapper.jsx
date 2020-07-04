import React, { useEffect, useState, createRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PropTypes from 'prop-types';
import SideBarUser from './SideBarUser';
import SideBarLinks from './SideBarLinks';
import avatar from '../../assets/images/avatar.jpg';

let ps;

function SideBarWrapper(props) {
  const { className, ...rest } = props;
  const [isWin] = useState(() => navigator.platform.indexOf('Win') > -1);
  const sideBarWrapper = createRef();

  useEffect(() => {
    if (isWin) {
      ps = new PerfectScrollbar(sideBarWrapper.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return () => {
      if (isWin) {
        ps.destroy();
      }
    };
  });

  return (
    <div className={className} ref={sideBarWrapper}>
      <SideBarUser avatar={avatar} {...rest} />
      <SideBarLinks {...rest} />
    </div>
  );
}

SideBarWrapper.propTypes = {
  className: PropTypes.string,
};

export default SideBarWrapper;
