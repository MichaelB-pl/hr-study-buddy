import React from 'react';
import { Wrapper } from './Average.styles';

const Average = ({ children }) => <Wrapper average={children}>{children}</Wrapper>;

export default Average;
