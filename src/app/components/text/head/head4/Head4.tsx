import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const Head4: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'head4'}>{text}</p>
  );
};

export {Head4};
