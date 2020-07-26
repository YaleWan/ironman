import React,{ReactNode} from 'react';
import Login from '../features/login';

export default function HomePage(props:ReactNode) {
  console.log('props :>> ', props);
  return <Login />;
}
