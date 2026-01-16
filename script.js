/**
 * PRODUCTION ARCHITECTURE v2.0
 * Highly modular, performance-optimized, and scalable core.
 */

const DATA = {
    stacks: [
        { category: 'Development', icon: 'code-2', items: [{ name: 'Python', value: 98 }, { name: 'C / C++', value: 70 }] },
        { category: 'Data Systems', icon: 'database', items: [{ name: 'MySQL / NoSQL', value: 75 }, { name: 'Architecture', value: 80 }] },
        { category: 'Design & Web', icon: 'layout', items: [{ name: 'HTML5 / CSS3', value: 90 }, { name: 'JS / React', value: 65 }] }
    ],
    education: [
        { period: '2023 – PRESENT', title: 'B.Sc. Computer Science', subtitle: 'Northern University Bangladesh' },
        { period: 'GPA 4.43', title: 'HSC (Science)', subtitle: 'B.A.F. Shaheen College' },
        { period: 'GPA 5.00', title: 'SSC (Science)', subtitle: 'Satkhira Police Line School' }
    ],
    projects: [
        {
            title: 'E-Sports Manager',
            tag: 'PHP / MYSQL',
            desc: 'An enterprise-grade orchestration layer for competitive gaming tournaments.',
            img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
            link: 'https://github.com/sanzid1367/E_Sports_Tournament_Management'
        },
        {
            title: 'Software Dev. Core',
            tag: 'C++',
            desc: 'Implementation of fundamental software design patterns and architectural principles.',
            img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
            link: 'https://github.com/sanzid1367/Software_development_project'
        }
    ],
    socials: [
        { name: 'GitHub', url: 'https://github.com/sanzid1367', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sanzid-zaman-2630922b7/', icon: 'linkedin' },
        { name: 'Facebook', url: 'https://www.facebook.com/sanzid.sanzid.33', icon: 'facebook' },
        { name: 'Instagram', url: 'https://www.instagram.com/luminous_calm/', icon: 'instagram' }
    ]
};

const TEMPLATES = {
    skill: (s) => `
        <div class="space-y-2">
            <div class="flex justify-between mono text-[9px] uppercase tracking-widest">
                <span>${s.name}</span>
                <span class="text-zinc-500">${s.value}%</span>
            </div>
            <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: 0%" data-value="${s.value}"></div></div>
        </div>`,

    project: (p) => `
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="bento-card group block" aria-label="View Project: ${p.title}">
            <div class="image-wrapper">
                <img src="${p.img}" alt="${p.title} Preview" class="image-asset" loading="lazy">
                <div class="absolute top-6 right-6 px-4 py-2 bg-white text-black mono text-[10px] font-bold rounded-full">${p.tag}</div>
            </div>
            <div class="p-10 space-y-4">
                <h4 class="text-3xl font-bold tracking-tight">${p.title}</h4>
                <p class="text-zinc-400 leading-relaxed">${p.desc}</p>
                <div class="pt-4 flex items-center gap-2 text-white mono text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Source Protocol <i data-lucide="external-link" class="w-3 h-3"></i>
                </div>
            </div>
        </a>`
};

const WebApp = {
    init() {
        this.renderAll();
        this.setupCoreHandlers();
        lucide.createIcons();
    },

    renderAll() {
        this.renderSkills();
        this.renderEducation();
        this.renderLocation();
        this.renderCerts();
        this.renderBio();
        this.renderProjects();
        this.renderSocials();

        // Trigger Skill Animations
        requestAnimationFrame(() => {
            document.querySelectorAll('.skill-bar-fill').forEach(el =>
                el.style.width = el.dataset.value + '%'
            );
        });
    },

    renderSkills() {
        const stackGrid = document.querySelector('#bento-grid');
        stackGrid.innerHTML = `
            <article class="bento-card md:col-span-8 p-10 relative">
                <div class="flex justify-between items-start mb-12">
                    <div>
                        <h3 class="mono text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-2">Technical_Expertise</h3>
                        <h4 class="text-3xl font-bold">Capabilities & Stack</h4>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    ${DATA.stacks.map(stack => `
                        <div class="space-y-6">
                            <div class="flex items-center gap-3 text-zinc-400">
                                <i data-lucide="${stack.icon}" class="w-4 h-4"></i>
                                <span class="mono text-[10px] uppercase tracking-widest font-bold">${stack.category}</span>
                            </div>
                            <div class="space-y-6">${stack.items.map(TEMPLATES.skill).join('')}</div>
                        </div>`).join('')}
                </div>
            </article>`;
    },

    renderEducation() {
        const bentoGrid = document.querySelector('#bento-grid');
        bentoGrid.insertAdjacentHTML('beforeend', `
            <article class="bento-card md:col-span-4 p-10 flex flex-col">
                <div class="flex justify-between items-start mb-10">
                    <h3 class="mono text-[10px] text-zinc-500 uppercase tracking-[0.4em]">Academic_Log</h3>
                    <i data-lucide="graduation-cap" class="w-6 h-6 opacity-20" aria-hidden="true"></i>
                </div>
                <div class="space-y-8 flex-grow">
                    ${DATA.education.map(e => `
                        <div class="relative pl-6 border-l border-white/5">
                            <div class="absolute -left-[4.5px] top-0 w-2 h-2 bg-white rounded-full"></div>
                            <p class="mono text-[9px] text-zinc-500 mb-1">${e.period}</p>
                            <h5 class="font-bold text-lg leading-tight">${e.title}</h5>
                            <p class="text-xs text-zinc-400 mt-1">${e.subtitle}</p>
                        </div>`).join('')}
                </div>
            </article>`);
    },

    renderLocation() {
        const bentoGrid = document.querySelector('#bento-grid');
        bentoGrid.insertAdjacentHTML('beforeend', `
            <article class="bento-card md:col-span-4 min-h-[320px] relative group overflow-hidden">
                <div class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-700" 
                     style="background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.05) 1px, transparent 0); background-size: 24px 24px;"></div>
                <div class="relative z-10 p-10 h-full flex flex-col justify-between">
                    <div>
                        <h3 class="mono text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                            <i data-lucide="map-pin" class="w-3 h-3 text-white"></i> Ready_for_HireBase
                        </h3>
                        <p class="text-4xl font-bold tracking-tighter">Dhaka, BD</p>
                        <p class="mono text-[10px] text-zinc-500 mt-2">UTC/GMT+6 Standard Time</p>
                    </div>
                    <div class="space-y-6">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span class="mono text-[10px] text-zinc-400 uppercase tracking-widest leading-loose">Available for Remote Projects</span>
                        </div>
                    </div>
                </div>
            </article>`);
    },

    renderCerts() {
        const bentoGrid = document.querySelector('#bento-grid');
        bentoGrid.insertAdjacentHTML('beforeend', `
            <article class="bento-card md:col-span-4 p-10">
                <h3 class="mono text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-10">System_Training</h3>
                <div class="space-y-8">
                    <div class="flex gap-6 group/item">
                        <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-white transition-colors">
                            <i data-lucide="database" class="w-6 h-6"></i>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="font-bold text-lg">DBMS Expert</p>
                            <p class="mono text-[9px] text-zinc-500 uppercase tracking-widest">Fast Tech IT • 2022</p>
                        </div>
                    </div>
                    <div class="flex gap-6 group/item">
                        <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-white transition-colors">
                            <i data-lucide="palette" class="w-6 h-6"></i>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="font-bold text-lg">Graphic Design</p>
                            <p class="mono text-[9px] text-zinc-500 uppercase tracking-widest">Graphics School • 2022</p>
                        </div>
                    </div>
                </div>
            </article>`);
    },

    renderBio() {
        const bentoGrid = document.querySelector('#bento-grid');
        bentoGrid.insertAdjacentHTML('beforeend', `
            <article class="bento-card md:col-span-4 p-10 flex flex-col justify-between">
                <div class="space-y-6">
                    <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <span class="mono text-xs font-bold text-zinc-500">"</span>
                    </div>
                    <p class="text-zinc-200 text-lg leading-relaxed font-light italic">
                        Bridging the void between abstract logic and tangible architecture. Focused on high-fidelity system design.
                    </p>
                </div>
                <div class="pt-8 flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full mono text-[8px] uppercase tracking-widest text-zinc-500">Kernel_01</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full mono text-[8px] uppercase tracking-widest text-zinc-500">Vault_Sec</span>
                </div>
            </article>`);
    },

    renderProjects() {
        document.querySelector('#project-grid').innerHTML = DATA.projects.map(TEMPLATES.project).join('');
    },

    renderSocials() {
        document.querySelector('#social-links').innerHTML = DATA.socials.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-btn btn-base group" aria-label="Visit Sanzid on ${s.name}">
                <i data-lucide="${s.icon}" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                <span>${s.name}</span>
            </a>`).join('');
    },

    setupCoreHandlers() {
        // Optimized Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('active');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Throttled Mouse Tracking
        let ticking = false;
        document.addEventListener('mousemove', (e) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    document.querySelectorAll('.bento-card').forEach(card => {
                        const rect = card.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        card.style.setProperty('--mouse-x', `${x}%`);
                        card.style.setProperty('--mouse-y', `${y}%`);
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Ripple System
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.social-btn');
            if (!btn) return;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = btn.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => WebApp.init());
