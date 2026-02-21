import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const registerSchema = z.object({
  accountType: z.enum(['rent', 'list'], {
    errorMap: () => ({ message: "Por favor, selecione como você deseja usar a plataforma." })
  }),
  fullName: z.string()
    .min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("Por favor, digite um e-mail válido"),
  phoneNumber: z.string()
    .min(10, "O telefone deve ter pelo menos 10 dígitos (com DDD)"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue, 
    watch,    
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const selectedAccountType = watch('accountType');

  const onSubmitForm = (data) => {
    console.log("Dados do cadastro validados com sucesso:", data);
    navigate('/verify'); 
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
            <Link to="/" className="bg-primary/10 text-primary px-6 py-2 rounded-lg font-bold hover:bg-primary/20 transition-all">Log in</Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-4 py-12 flex-grow w-full">
  
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mb-2 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">person</span>
              </div>
              <span className="text-sm font-semibold text-primary">Account Type</span>
            </div>
            <div className="h-1 flex-1 bg-primary/20 mx-4 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/2"></div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 mb-2">
                <span className="material-symbols-outlined">contact_page</span>
              </div>
              <span className="text-sm font-medium text-slate-500">Personal Details</span>
            </div>
            <div className="h-1 flex-1 bg-slate-200 dark:bg-slate-800 mx-4 rounded-full"></div>
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 mb-2">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <span className="text-sm font-medium text-slate-500">Verify</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
     
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Join our Community</h1>
              <p className="text-slate-500 dark:text-slate-400">Step 1: How do you plan to use the platform?</p>
            </div>

            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">

                <div 
                  onClick={() => setValue('accountType', 'rent', { shouldValidate: true })}
                  className={`group relative cursor-pointer border-2 rounded-xl p-6 transition-all hover:shadow-md ${
                    selectedAccountType === 'rent' 
                      ? 'border-primary bg-primary/5' 
                      : 'border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {selectedAccountType === 'rent' && (
                    <div className="absolute top-4 right-4 text-primary">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                  )}
                  <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg shadow-sm transition-colors ${
                    selectedAccountType === 'rent' 
                      ? 'text-primary bg-white dark:bg-slate-800' 
                      : 'text-slate-400 bg-slate-100 dark:bg-slate-800 group-hover:text-primary'
                  }`}>
                    <span className="material-symbols-outlined text-3xl">shopping_basket</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">I want to rent items</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Browse and rent equipment from local owners.</p>
                </div>

                <div 
                  onClick={() => setValue('accountType', 'list', { shouldValidate: true })}
                  className={`group relative cursor-pointer border-2 rounded-xl p-6 transition-all hover:shadow-md ${
                    selectedAccountType === 'list' 
                      ? 'border-primary bg-primary/5' 
                      : 'border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {selectedAccountType === 'list' && (
                    <div className="absolute top-4 right-4 text-primary">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                  )}
                  <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg shadow-sm transition-colors ${
                    selectedAccountType === 'list' 
                      ? 'text-primary bg-white dark:bg-slate-800' 
                      : 'text-slate-400 bg-slate-100 dark:bg-slate-800 group-hover:text-primary'
                  }`}>
                    <span className="material-symbols-outlined text-3xl">sell</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">I want to list items</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Earn extra money by renting out your gear.</p>
                </div>
              </div>
         
              {errors.accountType && (
                <p className="mb-8 text-sm text-red-500 font-medium">{errors.accountType.message}</p>
              )}
              {!errors.accountType && <div className="mb-10"></div>}

              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">assignment_ind</span>
                  Personal Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      type="text"
                      {...register("fullName")}
                      className={`w-full rounded-lg bg-background-light dark:bg-slate-800 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary'
                      }`} 
                      placeholder="John Doe" 
                    />
                    {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <input 
                      type="email"
                      {...register("email")}
                      className={`w-full rounded-lg bg-background-light dark:bg-slate-800 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary'
                      }`} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 text-sm">
                      +1
                    </span>
                    <input 
                      type="tel"
                      {...register("phoneNumber")}
                      className={`w-full rounded-r-lg bg-background-light dark:bg-slate-800 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.phoneNumber ? 'border-red-500 border-l focus:ring-red-500/50' : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary'
                      }`} 
                      placeholder="(555) 000-0000" 
                    />
                  </div>
                  {errors.phoneNumber ? (
                    <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
                  ) : (
                    <p className="text-xs text-slate-500">Used for rental updates and verification only.</p>
                  )}
                </div>
                
                <div className="pt-6">
                  <button type="submit" className="w-full bg-accent-yellow hover:bg-yellow-400 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2">
                    Continue to Verification
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <p className="text-center mt-4 text-sm text-slate-500">
                    By joining, you agree to our <Link to="#" className="text-primary underline">Terms of Service</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-xl">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                Why RentIt?
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Secure Payments</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">All transactions are encrypted and held in escrow until completion.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Verified Members</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Every renter and owner undergoes a strict identity verification process.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">24/7 Support</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Our team is always here to help if anything goes wrong during a rental.</p>
                  </div>
                </li>
              </ul>
            </div>
            
      
            <div className="relative overflow-hidden rounded-xl bg-slate-900 text-white h-[300px]">
              <div className="absolute inset-0 opacity-50 bg-slate-800">
                <img 
                  alt="Rental equipment background" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-1 text-accent-yellow mb-2">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p className="text-lg font-medium italic mb-2">"Renting out my camera gear was the best decision. I've covered its cost in just 3 months!"</p>
                <p className="text-sm font-bold text-primary">— Sarah J., Professional Photographer</p>
              </div>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl">
              <p className="text-sm text-slate-500">Already have an account? <Link to="/" className="text-primary font-bold hover:underline">Log in</Link></p>
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