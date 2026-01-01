export function createSidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', active: true },
    { name: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', active: false },
    { name: 'Customers', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', active: false },
    { name: 'Integration', icon: 'M13 10V3L4 14h7v7l9-11h-7z', active: false },
    { name: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', active: false }
  ];

  const menuItemsHTML = menuItems.map(item => `
    <a href="#"
      class="flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group relative overflow-hidden ${
        item.active
          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
          : 'text-slate-400 hover:bg-white/5 hover:text-white'
      }">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-1/2 -translate-x-full group-hover:translate-x-0"></div>
      <svg class="w-5 h-5 mr-3 transition-colors duration-200 ${item.active ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${item.icon}" />
      </svg>
      <span class="relative z-10">${item.name}</span>
      ${item.active ? '<div class="absolute right-3 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>' : ''}
    </a>
  `).join('');

  return `
    <aside id="sidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-dark-900/80 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 lg:static lg:translate-x-0 transform -translate-x-full">
      <!-- Logo -->
      <div class="flex items-center justify-center h-20 border-b border-white/5 relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div class="flex items-center space-x-2 text-2xl font-bold tracking-wider text-white relative z-10">
          <span class="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">NEX</span><span>US</span>
        </div>
      </div>

      <!-- Nav Links -->
      <nav class="p-4 space-y-2 mt-4">
        ${menuItemsHTML}
      </nav>

      <!-- User Profile Bottom (Sidebar) -->
      <div class="absolute bottom-0 w-full p-4 border-t border-white/5 bg-dark-900/50 backdrop-blur-sm">
        <div class="flex items-center space-x-3 cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
          <div class="relative">
            <img src="https://ui-avatars.com/api/?name=Alex+K&background=0E7490&color=fff" alt="Profile" class="w-10 h-10 rounded-full border border-cyan-500/30">
            <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-dark-900 rounded-full"></div>
          </div>
          <div>
            <div class="text-sm font-medium text-white">Alex Kai</div>
            <div class="text-xs text-slate-500">Super Admin</div>
          </div>
        </div>
      </div>
    </aside>
  `;
}
