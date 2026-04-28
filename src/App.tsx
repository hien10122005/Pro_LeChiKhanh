/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Cpu, 
  Palette, 
  Sparkles, 
  ChevronRight,
  Monitor,
  Code,
  Globe,
  Smartphone,
  Layers
} from 'lucide-react';
import { useState, useEffect } from 'react';
import avatarImg from './avatar.jpg';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const skills = [
    {
      title: "Lập trình Web",
      description: "Phát triển giao diện hiện đại, tối ưu SEO và tích hợp các giải pháp AI trực tiếp vào trình duyệt.",
      tools: ["React", "Tailwind CSS", "Next.js"],
      icon: <Globe size={24} className="text-brand-primary" />,
      level: "95%"
    },
    {
      title: "Windows Forms",
      description: "Xây dựng ứng dụng desktop mạnh mẽ với C# .NET, chú trọng vào hiệu năng và trải nghiệm người dùng WinOS.",
      tools: ["C#", ".NET Framework", "SQL Server"],
      icon: <Monitor size={24} className="text-brand-secondary" />,
      level: "90%"
    },
    {
      title: "Mobile App",
      description: "Thiết kế và phát triển ứng dụng di động đa nền tảng, mượt mà trên cả iOS và Android.",
      tools: ["Flutter", "Firebase", "AI UX"],
      icon: <Smartphone size={24} className="text-green-400" />,
      level: "85%"
    }
  ];

  const projects = [
    {
      title: "AI Character Design",
      category: "AI & Graphics",
      image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800",
      description: "Sử dụng Midjourney để tạo concept nhân vật game.",
      tag: "#GraphicDesign",
      isAI: true
    },
    {
      title: "UI/UX Dashboard",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
      description: "Giao diện quản lý thông minh tối giản.",
      tag: "#Branding",
      isAI: false
    },
    {
      title: "Brand Identity",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      description: "Bộ nhận diện thương hiệu cho công ty công nghệ.",
      tag: "#Mobile",
      isAI: false
    },
    {
      title: "AI Generative Art",
      category: "AI & Graphics",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      description: "Nghiên cứu ứng dụng Stable Diffusion trong thiết kế.",
      tag: "#AI #Tech",
      isAI: true
    },
    {
      title: "Mobile App Layout",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      description: "Thiết kế app trải nghiệm người dùng hiện đại.",
      tag: "#UX",
      isAI: false
    },
    {
      title: "AI Logo Concepts",
      category: "AI & Graphics",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      description: "Tự động hóa quy trình phác thảo logo bằng AI.",
      tag: "#Innovation",
      isAI: true
    }
  ];

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-brand-dark bg-[#050505]">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-linear-to-r from-[#00f2ff] to-[#bc00ff] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-brand-dark/50 border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(0,242,255,0.2)]"></div>
          <span className="text-xl font-bold tracking-tighter uppercase whitespace-nowrap">
            LÊ CHÍ KHANH <span className="text-[10px] opacity-50 font-normal tracking-widest ml-1">/ MSSV: 233073</span>
          </span>
        </motion.div>
        <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          <a href="#about" className="hover:text-white transition-colors">Về tôi</a>
          <a href="#projects" className="hover:text-white transition-colors">Dự án</a>
          <a href="#experience" className="hover:text-white transition-colors">Kỹ năng</a>
          <a href="#contact" className="hover:text-white transition-colors">Liên hệ</a>
        </div>
        <div className="flex items-center gap-4">
           <a 
            href="#contact" 
            className="hidden sm:block text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
          >
            LET'S TALK
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        {/* Hero Section Grid */}
        <section id="about" className="grid grid-cols-12 gap-8 mb-24">
          {/* Profile Card Col */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="gradient-border-glow rounded-[2rem]"
            >
              <div className="relative glass-card rounded-[2rem] p-8 flex flex-col gap-6 ai-glow">
                <div className="w-40 h-40 rounded-2xl bg-zinc-800 border-2 border-brand-primary/30 overflow-hidden mx-auto shadow-2xl">
                  <img 
                    src={avatarImg} 
                    alt="Lê Chí Khanh" 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none mb-3">LÊ CHÍ KHANH</h1>
                  <p className="text-brand-primary font-mono text-[11px] uppercase tracking-[0.3em]">MSSV: 233073 • AI SPECIALIST</p>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed text-center">
                  Tôi là một nhà thiết kế đam mê kết hợp nghệ thuật đồ họa truyền thống với sức mạnh của Trí tuệ nhân tạo (AI). Chuyên về kiến tạo trải nghiệm số tương lai.
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  <button className="w-full py-4 bg-white text-brand-dark rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all active:scale-95 shadow-xl">
                    KẾT NỐI VỚI TÔI
                  </button>
                  <div className="flex justify-center items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse ai-glow"></div>
                    <span className="text-[10px] uppercase tracking-widest opacity-40">Tận tâm • Sáng tạo • Đột phá</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Text Col */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center lg:pl-12 gap-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 glass-card rounded-md text-[10px] font-mono mb-8 text-zinc-500 uppercase tracking-[0.4em]">
                INTRODUCING / PORTFOLIO
              </div>
              <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                Kiến tạo <span className="gradient-text">Tương lai</span> <br /> 
                bằng Trí tuệ <span className="opacity-40">Nhân tạo</span>.
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 glass-card border-none bg-white/[0.02]">
                    <div className="text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{skill.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="experience" className="mb-24 pt-16 mt-16 border-t border-white/5">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="text-[10px] font-mono text-brand-primary tracking-[0.5em] uppercase mb-4">Core Capabilities</div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase italic">Lĩnh vực <span className="gradient-text">Chuyên môn</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 group hover:bg-white/[0.05] transition-all relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-150 transition-transform duration-700">
                  {skill.icon}
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:ai-glow transition-all">
                  {skill.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{skill.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-bold mb-1 opacity-60">
                    <span>PROGRESS</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-linear-to-r from-brand-primary to-brand-secondary"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skill.tools.map((tool, i) => (
                      <span key={i} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded lowercase opacity-50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Works Header */}
        <div id="projects" className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6 mt-16 pt-16 border-t border-white/5">
          <div className="text-left w-full sm:w-auto">
            <h3 className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase mb-2">Selected Works / 2026</h3>
            <div className="h-1 w-12 bg-brand-primary"></div>
          </div>
          <a 
            href="https://drive.google.com/drive/folders/1KQbYqsBFyJh0pqAtqTSOHlmcivA1mwNt?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-[10px] bg-white text-brand-dark px-6 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-brand-dark transition-all uppercase tracking-widest text-center shadow-lg active:scale-95"
          >
            Vào Google Drive Xem Portfolio
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card glass-card rounded-2xl p-4 flex flex-col gap-4 group"
            >
              <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{project.description}</span>
                </div>
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
                  alt={project.title}
                />
                {project.isAI && (
                  <div className="absolute top-3 left-3 z-20">
                     <span className="px-2 py-0.5 bg-brand-primary text-brand-dark text-[9px] font-black rounded-sm flex items-center gap-1 ai-glow uppercase">
                      AI GENERATIVE
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm font-black uppercase tracking-tight group-hover:text-brand-primary transition-colors">{project.title}</span>
                  <span className="text-[10px] opacity-40 font-mono mt-1">{project.category}</span>
                </div>
                <div className="text-[10px] opacity-40 italic font-medium p-2 bg-white/5 rounded-md">{project.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="px-8 mt-20">
        <div className="max-w-7xl mx-auto border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <div className="text-zinc-200">© 2026 — LÊ CHÍ KHANH (233073)</div>
            <div className="opacity-40 font-normal">Đồ hoạ ứng dụng AI • SĐT: 0854588255</div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <a href="#" className="hover:text-brand-primary hover:translate-y-[-2px] transition-all">Facebook: /lechikhanh</a>
            <a href={`mailto:s233073@nctu.edu.vn`} className="hover:text-white hover:translate-y-[-2px] transition-all">Email: s233073@nctu.edu.vn</a>
            <a href={`tel:0854588255`} className="hover:text-brand-secondary hover:translate-y-[-2px] transition-all">Phone: 0854.588.255</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
