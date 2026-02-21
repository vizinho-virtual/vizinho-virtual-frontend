import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      

      <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/landing-page" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-forest">
                <span className="material-symbols-outlined font-bold">handyman</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-forest dark:text-primary">RentAll</span>
            </Link>
            
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input 
                  className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm outline-none" 
                  placeholder="What do you need today?" 
                  type="text"
                />
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-forest dark:text-slate-300">
              <Link to="#" className="hover:text-primary transition-colors">Rent Now</Link>
              <Link to="#" className="hover:text-primary transition-colors">List an Item</Link>
              <Link to="#" className="hover:text-primary transition-colors">Help</Link>
            </nav>
            
            <div className="flex items-center gap-3 ml-4">
              <Link to="/" className="px-5 py-2.5 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-forest dark:text-white">
                Sign In
              </Link>
              <Link to="/cadastro" className="px-5 py-2.5 bg-primary text-forest text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-yellow/20 text-forest font-bold text-xs uppercase tracking-widest mb-6">
                Sustainable sharing economy
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-forest dark:text-white leading-[1.1] mb-6">
                Rent Anything, <br className="hidden lg:block" />
                <span className="text-primary italic">Anywhere.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                From professional power tools to high-end party supplies. Save money by renting or earn extra cash by listing your own gear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-forest text-primary font-bold rounded-xl shadow-xl hover:bg-forest/90 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">explore</span> Start Renting
                </button>
                <button className="px-8 py-4 bg-brand-yellow text-forest font-bold rounded-xl shadow-xl hover:bg-brand-yellow/90 transition-all flex items-center justify-center gap-2">
                  List Your Gear
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-2xl relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-yellow/20 blur-3xl rounded-full"></div>
              <img 
                className="rounded-3xl shadow-2xl relative z-10 object-cover aspect-video lg:aspect-square w-full border-8 border-white dark:border-slate-800" 
                alt="Modern high quality power tools and equipment" 
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800"
              />
            </div>
          </div>
        </section>

        {/* POPULAR CATEGORIES */}
        <section className="py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-forest dark:text-white mb-4">Popular Categories</h2>
              <p className="text-slate-500 max-w-2xl">Discover top-tier equipment in our most sought-after categories.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="#" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
                <img alt="Tools Category" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=600" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block px-3 py-1 bg-primary text-forest text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Reliable</span>
                  <h3 className="text-3xl font-bold text-white mb-2">Power Tools</h3>
                  <p className="text-slate-200 text-sm">Pro-grade drills, saws, and landscaping gear.</p>
                </div>
              </Link>
              
              <Link to="#" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
                <img alt="Tech Category" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block px-3 py-1 bg-brand-yellow text-forest text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Premium</span>
                  <h3 className="text-3xl font-bold text-white mb-2">High-End Tech</h3>
                  <p className="text-slate-200 text-sm">Cameras, drones, and professional audio gear.</p>
                </div>
              </Link>
              
              <Link to="#" className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
                <img alt="Party Category" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1533174000220-9fa2816f1b31?auto=format&fit=crop&q=80&w=600" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block px-3 py-1 bg-white text-forest text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Trending</span>
                  <h3 className="text-3xl font-bold text-white mb-2">Party Supplies</h3>
                  <p className="text-slate-200 text-sm">Speakers, projectors, and event furniture.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED RENTALS */}
        <section className="py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-black text-forest dark:text-white mb-4">Featured Rentals</h2>
                <p className="text-slate-500">The most trusted and highly-rated items in your area.</p>
              </div>
              <button className="hidden sm:flex items-center gap-2 text-forest dark:text-primary font-bold hover:underline">
                View all listings <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Item 1 */}
              <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt="Sony Camera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/95 text-forest text-[10px] font-black uppercase rounded-full shadow-sm">Top Rated</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-forest dark:text-white">Sony Alpha A7 IV</h4>
                    <div className="flex items-center text-brand-yellow">
                      <span className="material-symbols-outlined text-sm fill-current">star</span>
                      <span className="text-xs font-bold ml-1 text-slate-700 dark:text-slate-300">4.9 (124)</span>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm mb-6">
                    <span className="material-symbols-outlined text-base mr-1">location_on</span>
                    <span>Downtown Seattle</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-5">
                    <div>
                      <span className="text-2xl font-black text-forest dark:text-primary">$45</span>
                      <span className="text-slate-400 text-sm">/ day</span>
                    </div>
                    <button className="p-3 bg-soft-yellow hover:bg-brand-yellow text-forest rounded-xl transition-colors">
                      <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt="EBike" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=600" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-forest dark:text-white">RadPower EBike v2</h4>
                    <div className="flex items-center text-brand-yellow">
                      <span className="material-symbols-outlined text-sm fill-current">star</span>
                      <span className="text-xs font-bold ml-1 text-slate-700 dark:text-slate-300">4.8 (89)</span>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm mb-6">
                    <span className="material-symbols-outlined text-base mr-1">location_on</span>
                    <span>Capitol Hill</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-5">
                    <div>
                      <span className="text-2xl font-black text-forest dark:text-primary">$25</span>
                      <span className="text-slate-400 text-sm">/ day</span>
                    </div>
                    <button className="p-3 bg-soft-yellow hover:bg-brand-yellow text-forest rounded-xl transition-colors">
                      <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt="Pressure Washer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621905252507-b35492d90cb4?auto=format&fit=crop&q=80&w=600" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-forest dark:text-white">DeWalt PowerWasher</h4>
                    <div className="flex items-center text-brand-yellow">
                      <span className="material-symbols-outlined text-sm fill-current">star</span>
                      <span className="text-xs font-bold ml-1 text-slate-700 dark:text-slate-300">5.0 (45)</span>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm mb-6">
                    <span className="material-symbols-outlined text-base mr-1">location_on</span>
                    <span>Ballard</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-5">
                    <div>
                      <span className="text-2xl font-black text-forest dark:text-primary">$35</span>
                      <span className="text-slate-400 text-sm">/ day</span>
                    </div>
                    <button className="p-3 bg-soft-yellow hover:bg-brand-yellow text-forest rounded-xl transition-colors">
                      <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt="Party Speaker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1608085575214-a78c1b3a373b?auto=format&fit=crop&q=80&w=600" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-forest dark:text-white">JBL PartyBox 320</h4>
                    <div className="flex items-center text-brand-yellow">
                      <span className="material-symbols-outlined text-sm fill-current">star</span>
                      <span className="text-xs font-bold ml-1 text-slate-700 dark:text-slate-300">4.7 (210)</span>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm mb-6">
                    <span className="material-symbols-outlined text-base mr-1">location_on</span>
                    <span>Fremont</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-5">
                    <div>
                      <span className="text-2xl font-black text-forest dark:text-primary">$20</span>
                      <span className="text-slate-400 text-sm">/ day</span>
                    </div>
                    <button className="p-3 bg-soft-yellow hover:bg-brand-yellow text-forest rounded-xl transition-colors">
                      <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-24 bg-forest text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Your Trust is Our Priority</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">We've built a secure environment so you can rent with complete peace of mind.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Users</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Every member on RentAll undergoes a rigorous multi-step identity verification process to ensure safety for everyone.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-4xl">shield_with_heart</span>
                </div>
                <h3 className="text-xl font-bold mb-3">$1M Damage Insurance</h3>
                <p className="text-slate-300 text-sm leading-relaxed">All rentals are automatically covered by our comprehensive protection plan against accidental damage or theft.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-4xl">encrypted</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Transactions are handled through our encrypted gateway, and funds are only released after a successful rental experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-soft-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-forest mb-4">What Our Community Says</h2>
              <p className="text-slate-600">Join thousands of happy renters and owners.</p>
            </div>
            
            <div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x">
              <div className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm snap-center">
                <div className="flex items-center gap-4 mb-6">
                  <img alt="James" className="w-14 h-14 rounded-full object-cover border-2 border-primary" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" />
                  <div>
                    <h4 className="font-bold text-forest">James Wilson</h4>
                    <p className="text-xs text-slate-500">Power Renter • 42 Rentals</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"I needed a high-end camera for a weekend wedding. Instead of buying one for $3k, I rented it for $90. The process was flawless and the owner was great!"</p>
                <div className="mt-6 flex text-brand-yellow">
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                </div>
              </div>
              
              <div className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm snap-center">
                <div className="flex items-center gap-4 mb-6">
                  <img alt="Sarah" className="w-14 h-14 rounded-full object-cover border-2 border-primary" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" />
                  <div>
                    <h4 className="font-bold text-forest">Sarah Miller</h4>
                    <p className="text-xs text-slate-500">Equipment Owner • $1,200 Earned</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"Listing my camping gear on RentAll was the best decision. It used to sit in my garage all year, now it pays for my weekend trips!"</p>
                <div className="mt-6 flex text-brand-yellow">
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                </div>
              </div>
              
              <div className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm snap-center">
                <div className="flex items-center gap-4 mb-6">
                  <img alt="Michael" className="w-14 h-14 rounded-full object-cover border-2 border-primary" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" />
                  <div>
                    <h4 className="font-bold text-forest">Michael Chen</h4>
                    <p className="text-xs text-slate-500">DIY Enthusiast • 12 Rentals</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"I love the local aspect. I met a neighbor three blocks away while renting a pressure washer. It feels good to support the community."</p>
                <div className="mt-6 flex text-brand-yellow">
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA EARNINGS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative rounded-[3rem] bg-forest dark:bg-slate-900 px-8 py-20 overflow-hidden text-center lg:text-left">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[30rem] absolute -right-20 -top-20 text-primary">payments</span>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:px-12">
              <div className="max-w-2xl">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary text-forest font-black text-xs uppercase tracking-widest mb-6">Start Earning Today</span>
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">Turn your idle items into <span className="text-primary">extra income.</span></h2>
                <p className="text-slate-300 text-xl mb-10">Average owners earn over $500/month by renting out equipment they already own. No listing fees, no hassles.</p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <button className="px-10 py-5 bg-primary text-forest font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all text-lg">List Your First Item</button>
                  <button className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-lg">Calculator Earnings</button>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <div className="text-left">
                      <p className="text-slate-400 text-xs uppercase font-bold">Projected Monthly</p>
                      <p className="text-2xl font-black text-white">$450.00+</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-left text-sm text-slate-300">
                    <div className="flex justify-between gap-12"><span>Power Drill</span><span>$15/day</span></div>
                    <div className="flex justify-between gap-12"><span>Projector</span><span>$45/day</span></div>
                    <div className="flex justify-between gap-12"><span>Mountain Bike</span><span>$30/day</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-50 dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-forest">
                  <span className="material-symbols-outlined text-sm font-bold">handyman</span>
                </div>
                <span className="text-xl font-black tracking-tight text-forest dark:text-primary">RentAll</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Building a more sustainable future by making equipment accessible to everyone, everywhere.</p>
              <div className="flex gap-4">
                <Link to="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-forest dark:text-primary hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined">public</span>
                </Link>
                <Link to="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-forest dark:text-primary hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined">alternate_email</span>
                </Link>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-forest dark:text-white">Company</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-forest dark:text-white">Community</h5>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="#" className="hover:text-primary transition-colors">How it works</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">List an item</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Safety center</Link></li>
                <li><Link to="#" className="hover:text-primary transition-colors">Help & FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-forest dark:text-white">Newsletter</h5>
              <p className="text-xs text-slate-500 mb-4">Get the latest updates and deals directly in your inbox.</p>
              <div className="flex gap-2">
                <input 
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm w-full focus:ring-primary focus:border-primary outline-none px-3" 
                  placeholder="Your email" 
                  type="email"
                />
                <button className="p-2 bg-primary text-forest rounded-lg font-bold">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
            © 2024 RentAll Marketplace Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}