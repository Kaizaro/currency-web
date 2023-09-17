import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const OverlineText: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'overlineText'}>{text}</p>
  );
};

export {OverlineText};
