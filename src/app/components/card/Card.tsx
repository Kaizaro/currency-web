'use client';
import React, {useCallback} from 'react';
import {IDefaultFC} from '@/app/types';
import './styles.scss';
import {ICard} from './Card.types';

const Card: IDefaultFC<ICard> = ({handleCardPress, children}) => {
  const handlePress = useCallback(() => {
    console.log('card pressed');
    handleCardPress && handleCardPress();
  }, [handleCardPress]);

  return (
    <button className='card' onClick={handlePress}>
      {children}
    </button>
  );
};

export {Card};
