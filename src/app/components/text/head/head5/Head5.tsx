import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Head5: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'head5'}>{text}</p>
  );
};

export {Head5};
