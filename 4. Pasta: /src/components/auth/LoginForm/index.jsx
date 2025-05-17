import { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de autenticação
    console.log('Login attempt:', { username, password });
  };
  
  return (
    <div className="w-full max-w-md">
      <h2 className="text-off-white text-5xl font-bold mb-8">LOGIN</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-off-white text-2xl font-bold mb-2 block">USERNAME</label>
          <Input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="text-off-white text-2xl font-bold mb-2 block">PASSWORD</label>
          <Input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Button type="submit" className="w-full">LOGIN</Button>
      </form>
      
      <div className="mt-8 text-right">
        <a href="#" className="text-off-white text-xl font-bold hover:underline">REGISTER</a>
      </div>
    </div>
  );
}
