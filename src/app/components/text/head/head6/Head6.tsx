import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Head6: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'head6'}>{text}</p>
  );
};

export {Head6};
