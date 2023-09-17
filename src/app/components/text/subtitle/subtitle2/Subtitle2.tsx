import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Subtitle2: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'subtitle2'}>{text}</p>
  );
};

export {Subtitle2};
