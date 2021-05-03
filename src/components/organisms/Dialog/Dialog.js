import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from 'components/molecules/Overlay/Overlay';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dialog = ({ children, visible = false }) => {
  return visible ? (
    <Overlay>
      <ViewWrapper>{children}</ViewWrapper>
    </Overlay>
  ) : null;
};

Dialog.propTypes = {
  visible: PropTypes.bool,
};

export default Dialog;
