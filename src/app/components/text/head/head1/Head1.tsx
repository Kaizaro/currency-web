import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Head1: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'head1'}>{text}</p>
  );
};

export {Head1};
