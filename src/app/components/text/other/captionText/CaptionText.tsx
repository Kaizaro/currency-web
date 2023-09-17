import {IDefaultFC} from '@/app/types';
import React from 'react';
import {IDefaultText} from '../..';
import './styles.scss';

const CaptionText: IDefaultFC<IDefaultText> = ({text}) => {
  return (
    <p className={'captionText'}>{text}</p>
  );
};

export {CaptionText};
