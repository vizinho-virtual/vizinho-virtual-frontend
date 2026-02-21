import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


// 1. O Schema do Zod para a Verificação
const verifySchema = z.object({
  code: z.string()
    .length(6, "O código deve ter exatamente 6 dígitos")
    .regex(/^\d+$/, "O código deve conter apenas números"),
});

export default function Verify() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verifySchema),
  });

  const onSubmitForm = (data) => {
    console.log("Código verificado com sucesso!", data);
  
    navigate('/'); 
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 font-display flex flex-col">
      
  
      <header className="w-full bg-white dark:bg-slate-900 border-b border-primary/10 px-4 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight">
            <span className="material-symbols-outlined text-3xl">box_edit</span>
            <span>RentIt</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium">How it Works</Link>
            <Link to="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium">Browse Items</Link>
            <Link to="#" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium">Help</Link>
            <Link to="/login" className="bg-primary/10 text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary/20 transition-all">Log in</Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-4 py-12 flex-grow w-full">
      
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
        
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mb-2 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">check</span>
              </div>
              <span className="text-sm font-semibold text-primary">Account Type</span>
            </div>
            
            <div className="h-1 flex-1 bg-primary mx-4 rounded-full"></div>
           
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mb-2 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">check</span>
              </div>
              <span className="text-sm font-semibold text-primary">Personal Details</span>
            </div>
            
            <div className="h-1 flex-1 bg-primary/20 mx-4 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/2"></div>
            </div>
      
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mb-2 shadow-lg shadow-primary/20 ring-4 ring-primary/20">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <span className="text-sm font-bold text-primary">Verify</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            
            <div className="mb-8 text-center sm:text-left">
              <div className="w-16 h-16 bg-accent-yellow/20 text-accent-yellow rounded-2xl flex items-center justify-center mx-auto sm:mx-0 mb-6">
                <span className="material-symbols-outlined text-4xl">mark_email_read</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">Verify your account</h1>
              <p className="text-slate-500 dark:text-slate-400">
                We've sent a 6-digit verification code to your email and phone number. Please enter it below to activate your account.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-8">
              
              <div className="flex flex-col gap-3">
                <label htmlFor="code" className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center sm:text-left">
                  Verification Code
                </label>
                <input 
                  id="code"
                  type="text"
                  maxLength="6"
                  {...register("code")}
                  className={`w-full text-center text-3xl tracking-[1em] font-bold py-4 rounded-xl bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    errors.code ? 'border-2 border-red-500 focus:ring-red-500/50' : 'border-2 border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary'
                  }`} 
                  placeholder="000000" 
                />
                {errors.code && (
                  <p className="text-sm text-red-500 font-medium text-center sm:text-left">{errors.code.message}</p>
                )}
              </div>
              
              <div className="pt-2">
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 uppercase tracking-wide">
                  Verify & Continue
                  <span className="material-symbols-outlined">task_alt</span>
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
              <p className="text-sm text-slate-500 mb-2">Didn't receive the code?</p>
              <button className="text-primary font-bold hover:underline flex items-center justify-center gap-1 mx-auto">
                <span className="material-symbols-outlined text-sm">refresh</span>
                Resend Code
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-xl">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-yellow">lock_person</span>
                Privacy Matters
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Your security is our top priority. We use two-factor authentication (2FA) to ensure that only you can access and make modifications to your RentIt account.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary">gpp_good</span>
                  <span className="text-sm font-medium">Bank-level encryption</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary">policy</span>
                  <span className="text-sm font-medium">Strict data protection</span>
                </div>
              </div>
            </div>

            <div className="text-center p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
              <p className="text-sm text-slate-500">Need help? <Link to="#" className="text-primary font-bold hover:underline">Contact Support</Link></p>
            </div>
            
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">lock</span>
            <span className="font-bold">SSL SECURE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">payments</span>
            <span className="font-bold">PAYMENT PROTECTION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl">verified</span>
            <span className="font-bold">VERIFIED PROVIDER</span>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400 text-xs">
          © 2026 RentIt Technologies Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}