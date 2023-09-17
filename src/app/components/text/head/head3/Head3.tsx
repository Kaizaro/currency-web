import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Head3: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'head3'}>{text}</p>
  );
};

export {Head3};
