import { useState } from 'react';
import Head from 'next/head';
import LoginForm from '../../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <Head>
        <title>Login | Trade</title>
      </Head>
      
      <h1 className="text-off-white text-8xl font-black tracking-tighter mb-8">TRADE</h1>
      
      <LoginForm />
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 right-16 transform -translate-y-1/2">
        <div className="w-24 h-24 rounded-full bg-pastelGreen"></div>
        <div className="w-32 h-32 mt-8 bg-off-white transform rotate-45"></div>
      </div>
      
      <div className="absolute bottom-16 left-16">
        <div className="w-32 h-8 bg-off-white transform -rotate-45 mb-4"></div>
        <div className="w-32 h-8 bg-off-white transform -rotate-45 mb-4"></div>
        <div className="w-32 h-8 bg-off-white transform -rotate-45"></div>
      </div>
    </div>
  );
}
