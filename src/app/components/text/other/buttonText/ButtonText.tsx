import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const ButtonText: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'buttonText'}>{text.toUpperCase()}</p>
  );
};

export {ButtonText};
