import {IDefaultFC} from '@/app/types';
import React from 'react';
import './styles.scss';
import {IDefaultText} from '../..';

const Body2: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'body2'}>{text}</p>
  );
};

export {Body2};
