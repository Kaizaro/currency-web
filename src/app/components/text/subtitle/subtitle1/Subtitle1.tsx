import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Subtitle1: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'subtitle1'}>{text}</p>
  );
};

export {Subtitle1 as Body1};
