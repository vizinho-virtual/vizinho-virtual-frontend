import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './login.css';
import { loginSchema } from '../core/schemas/loginValidation'; 

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmitForm = (data) => {

    console.log("Validação Zod aprovada com sucesso!", data);
    navigate('/dashboard'); 
  };

  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display">

      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 login-split-bg">
        <div className="z-10 flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-symbols-outlined text-background-dark font-bold">handyman</span>
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">RentIt</span>
        </div>
        
        <div className="z-10 max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-yellow/90 text-background-dark text-xs font-bold mb-6">
            <span className="material-symbols-outlined text-sm">stars</span>
            TRUSTED BY 50K+ RENTERS
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">Rent anything, anywhere.</h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Join the world's most diverse rental marketplace. From professional cameras to heavy machinery, find what you need or start earning from your own gear.
          </p>
        </div>
        
        <div className="z-10 text-slate-300 text-sm">
          © 2026 RentIt Technologies Inc. All rights reserved.
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-background-dark">
        <div className="w-full max-w-md space-y-8">
          
          <div className="lg:hidden flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-4xl">handyman</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">RentIt</span>
            </div>
          </div>
          
          <div className="text-left">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Welcome Back</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Please enter your credentials to access your dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmitForm)}>
      
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-xl">mail</span>
                </div>
                <input 
                  id="email" 
                  type="email" 
                  autoComplete="email" 
                  {...register("email")}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-200 dark:border-slate-700 focus:ring-primary/50 focus:border-primary'
                  }`} 
                  placeholder="you@example.com" 
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 font-medium">{errors.email.message}</p>
              )}
            </div>
      
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="senha" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <Link to="/recuperar-senha" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-xl">lock</span>
                </div>
                <input 
                  id="senha" 
                  type={showPassword ? "text" : "password"} 
                  autoComplete="current-password" 
                  {...register("senha")} 
                  className={`block w-full pl-10 pr-10 py-3 border rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.senha ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-200 dark:border-slate-700 focus:ring-primary/50 focus:border-primary'
                  }`} 
                  placeholder="••••••••" 
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-slate-600 focus:outline-none flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
            
              {errors.senha && (
                <p className="mt-1 text-sm text-red-500 font-medium">{errors.senha.message}</p>
              )}
            </div>
            
        
            <div className="flex items-center">
              <input 
                id="rememberMe" 
                type="checkbox" 
                {...register("rememberMe")}
                className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded" 
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">
                Remember me for 30 days
              </label>
            </div>
            
            <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-background-dark bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 uppercase tracking-wider">
              Sign In
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-background-dark text-slate-500 dark:text-slate-400">
                Or continue with
              </span>
            </div>
          </div>

        
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"></path>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
              Facebook
            </button>
          </div>
          
          <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-10">
            Don't have an account yet? 
            <Link to="/cadastro" className="font-bold text-primary hover:text-primary-dark ml-1">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}