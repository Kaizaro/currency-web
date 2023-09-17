import {IDefaultFC} from '@/app/types';
import React from 'react';
import './styles.scss';
import {IDefaultText} from '../..';

const Head2: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'head2'}>{text}</p>
  );
};

export {Head2};
