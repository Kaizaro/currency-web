import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Body1: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'body1'}>{text}</p>
  );
};

export {Body1};
