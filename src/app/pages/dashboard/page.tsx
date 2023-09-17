import React from 'react';
import {Card, Head1} from '../../components';
import './styles.scss';

const Page = () => {
  return (
    <div className={'body'}>
      <Card><Head1 text={'Greetings'} /></Card>
    </div>
  );
};

export default Page;
