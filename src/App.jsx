import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
  Torus,
  Sphere,
} from '@react-three/drei';
import {
  Mail,
  Phone,
  Database,
  Cloud,
  BarChart3,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Download,
  Menu,
  X,
} from 'lucide-react';
import profileImage from './assets/profile.jpeg';

const resumeHref = '/BhanuPrakash_Resume.pdf';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const metrics = [
  { value: '5+', label: 'Years Experience' },
  { value: '45%', label: 'Faster Data Availability' },
  { value: '40%', label: 'Query Performance Gain' },
  { value: '60%', label: 'Manual Reporting Reduced' },
];

const skills = [
  {
    title: 'Data Platforms',
    icon: Database,
    items: ['Snowflake', 'Azure Synapse', 'BigQuery', 'Redshift', 'SQL Server'],
  },
  {
    title: 'Engineering',
    icon: Cloud,
    items: ['Azure Data Factory', 'Databricks', 'DBT', 'GCP Dataflow', 'PySpark'],
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    items: ['Power BI', 'Tableau', 'Looker', 'Alteryx'],
  },
  {
    title: 'Governance',
    icon: ShieldCheck,
    items: ['PII Masking', 'Lineage', 'Access Controls', 'Audit Readiness'],
  },
];

const experience = [
  {
    company: 'MD Anderson Cancer Center',
    role: 'Sr Data Engineer',
    period: 'Jan 2025 - Present',
    points: [
      'Modernized legacy batch pipelines into scalable ELT workflows and improved data availability by 45%.',
      'Built curated reporting layers across Azure Synapse and BigQuery and reduced average query time by 40%.',
      'Delivered executive Power BI dashboards with near real-time refresh and reduced manual reporting by 60%.',
    ],
  },
  {
    company: 'PACCAR',
    role: 'Data Engineer',
    period: 'May 2024 - Dec 2024',
    points: [
      'Built end-to-end ETL pipelines using Azure Data Factory, Databricks, Azure Synapse, and Snowflake.',
      'Implemented CDC-based incremental processing and reduced full refresh workloads by more than 60%.',
      'Created reusable deployment patterns and cut deployment time by 50%.',
    ],
  },
  {
    company: 'Square',
    role: 'Data Engineer',
    period: 'Jan 2023 - May 2024',
    points: [
      'Maintained high-volume financial data platforms supporting billing, reconciliation, and fraud monitoring.',
      'Optimized Snowflake and BigQuery models and reduced monthly query cost by 35%.',
      'Standardized KPI logic across finance and risk teams for more consistent reporting.',
    ],
  },
  {
    company: 'NXT GO',
    role: 'Data Analyst',
    period: 'Feb 2020 - Jun 2022',
    points: [
      'Built SQL-based reporting datasets and automated ingestion pipelines using Python and AWS.',
      'Developed Tableau dashboards and reduced ad hoc reporting requests by 60%.',
      'Improved query performance by up to 90% through data modeling and SQL optimization.',
    ],
  },
];

const projects = [
  {
    title: 'Enterprise Healthcare Finance Data Modernization',
    stack: 'Azure Data Factory, Snowflake, Azure Synapse, BigQuery, Power BI',
    summary:
      'Replaced fragmented batch jobs with scalable ELT workflows and curated reporting layers for finance, billing, and compliance reporting.',
    impact: ['45% faster availability', '40% faster queries', '10,000+ discrepancies resolved monthly'],
  },
  {
    title: 'Manufacturing Analytics Pipeline for Operations Visibility',
    stack: 'ADF, Databricks, Azure Synapse, Snowflake, CDC, Power BI',
    summary:
      'Centralized ERP, supplier, and manufacturing data into reusable pipelines and semantic models for operations and procurement leadership.',
    impact: ['60%+ refresh reduction', '50% faster deployment', '30% less reconciliation rework'],
  },
  {
    title: 'Real-Time Financial Risk and Fraud Monitoring Platform',
    stack: 'Snowflake, BigQuery, SQL, Python, Java-integrated sources',
    summary:
      'Engineered governed financial datasets for billing, ledger reconciliation, regulatory reporting, and fraud investigation workflows.',
    impact: ['Hundreds of millions of records daily', '35% lower query cost', 'Stronger audit readiness'],
  },
  {
    title: 'Intelligent Data Quality and Reconciliation Accelerator',
    stack: 'Python, SQL, Snowflake, Azure Synapse, Metadata Tagging',
    summary:
      'Designed a reusable validation framework to profile data, enforce schema and business rules, and surface reconciliation exceptions before release.',
    impact: ['Lower QA effort', 'Higher dashboard trust', 'Reusable governance component'],
  },
];

function CoreOrb() {
  const mesh = useRef(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.4} floatIntensity={1.6}>
      <Icosahedron ref={mesh} args={[1.45, 20]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.38}
          speed={2.5}
          roughness={0}
          metalness={0.9}
        />
      </Icosahedron>
    </Float>
  );
}

function RingOne() {
  const ring = useRef(null);

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.x = 1.1;
    ring.current.rotation.y = state.clock.elapsedTime * 0.35;
    ring.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8}>
      <Torus ref={ring} args={[2.45, 0.045, 24, 160]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#60a5fa" metalness={1} roughness={0.15} />
      </Torus>
    </Float>
  );
}

function RingTwo() {
  const ring = useRef(null);

  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.x = 0.35;
    ring.current.rotation.y = -state.clock.elapsedTime * 0.25;
    ring.current.rotation.z = 0.9;
  });

  return (
    <Float speed={2.1} rotationIntensity={0.8} floatIntensity={1.1}>
      <Torus ref={ring} args={[2.95, 0.03, 20, 180]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#c084fc" metalness={1} roughness={0.1} />
      </Torus>
    </Float>
  );
}

function FloatingNode({ position, size = 0.12, color = '#ffffff', speed = 1 }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.12;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <Sphere ref={ref} args={[size, 24, 24]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} />
    </Sphere>
  );
}

function DataScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 48 }}>
      <color attach="background" args={['#050816']} />
      <fog attach="fog" args={['#050816', 7, 13]} />
      <ambientLight intensity={1.3} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[0, 0, 3]} intensity={4} color="#8b5cf6" />
      <pointLight position={[3, -2, 2]} intensity={2.2} color="#60a5fa" />
      <pointLight position={[-3, 2, 2]} intensity={1.8} color="#22d3ee" />

      <Stars radius={70} depth={40} count={1800} factor={3} saturation={0} fade speed={0.8} />

      <CoreOrb />
      <RingOne />
      <RingTwo />

      <FloatingNode position={[2.5, 0.6, -0.2]} size={0.13} color="#22d3ee" speed={1.5} />
      <FloatingNode position={[-2.4, -0.4, 0.2]} size={0.11} color="#a78bfa" speed={1.2} />
      <FloatingNode position={[1.7, -1.5, 0.6]} size={0.08} color="#ffffff" speed={1.8} />
      <FloatingNode position={[-1.7, 1.45, 0.4]} size={0.09} color="#60a5fa" speed={1.1} />
      <FloatingNode position={[0.8, 2.0, -0.6]} size={0.07} color="#c084fc" speed={1.4} />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="mb-10 max-w-3xl"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-violet-300">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </motion.div>
  );
}

function GlowCard({ children, className = '' }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_28%)] opacity-90" />
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionFade({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white selection:bg-violet-500/30 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_20%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_18%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.07),transparent_18%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      <section className="relative px-4 pb-16 pt-4 sm:px-6 md:px-10 lg:px-16">
        <GlowCard className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between px-5 py-5 md:px-8">
            <div className="text-sm font-medium tracking-[0.35em] text-slate-300">BHANU</div>

            <div className="hidden items-center gap-6 text-sm md:flex">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 md:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {mobileOpen && (
            <div className="border-t border-white/10 px-5 py-4 md:hidden">
              <div className="flex flex-col gap-4 text-sm">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} className="text-slate-300 transition hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="grid min-h-[92vh] items-center gap-10 px-5 pb-8 pt-4 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
            <motion.div style={{ y: heroY }} className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-violet-200"
              >
                <Sparkles className="h-4 w-4" />
                High-End 3D Portfolio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.8 }}
                className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Bhanu Prakash
                <span className="block bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  Data Engineer
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.8 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
              >
                I design cloud-scale data platforms that transform fragmented enterprise data into governed,
                analytics-ready products across healthcare, financial services, and manufacturing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.8 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="mailto:bhanu.pk222@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/bhanuprakashreddynagireddy/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href={resumeHref}
                  className="inline-flex items-center gap-2 rounded-2xl border border-violet-400/20 bg-violet-400/10 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-400/20"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.85 }}
                className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              >
                {metrics.map((metric) => (
                  <GlowCard key={metric.label} className="p-4 transition duration-300 hover:-translate-y-1">
                    <div className="text-2xl font-semibold text-white">{metric.value}</div>
                    <div className="mt-1 text-sm text-slate-300">{metric.label}</div>
                  </GlowCard>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:h-[760px]">
              <div className="absolute inset-0 hidden lg:block">
                <DataScene />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.9 }}
                className="relative z-10 w-full max-w-sm"
              >
                <div className="absolute -inset-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.26),transparent_42%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.24),transparent_38%)] blur-3xl" />
                <GlowCard className="p-3">
                  <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950/70">
                    <img
                      src={profileImage}
                      alt="Bhanu Prakash Nagireddy"
                      className="h-[540px] w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 pb-2 pt-4">
                    <div>
                      <div className="text-lg font-semibold">Bhanu Prakash Nagireddy</div>
                      <div className="text-sm text-slate-300">Dallas, Texas</div>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-200">
                      Open to Work
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </GlowCard>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="About"
            title="Engineering trusted data systems for critical decisions."
            description="My work sits at the intersection of data engineering, analytics, and platform reliability. I build scalable pipelines, governed reporting layers, and reusable quality controls that help teams move faster with confidence."
          />
          <SectionFade>
            <GlowCard className="p-8 md:p-10">
              <div className="grid gap-6 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  I am a Data Engineer with 5+ years of experience building enterprise data platforms for healthcare,
                  finance, and manufacturing environments where performance, governance, and trust matter.
                </p>
                <p>
                  My core stack includes Snowflake, Azure Synapse, BigQuery, Azure Data Factory, Databricks,
                  DBT-style transformations, SQL, Python, Power BI, and Tableau.
                </p>
                <p>
                  I focus on converting raw operational data into reliable business-facing products through scalable ELT
                  design, strong validation patterns, curated semantic layers, and secure access controls.
                </p>
              </div>
            </GlowCard>
          </SectionFade>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Capabilities"
            title="A modern stack for cloud data platforms."
            description="Built around engineering discipline, measurable performance gains, and stakeholder-ready analytics delivery."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skills.map(({ title, items, icon: Icon }, index) => (
              <SectionFade key={title} delay={index * 0.05}>
                <GlowCard className="h-full p-6 transition duration-300 hover:-translate-y-1">
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </SectionFade>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Experience"
            title="Enterprise delivery across healthcare, manufacturing, and finance."
            description="A track record of building reliable data foundations, reducing latency, and translating complex requirements into scalable solutions."
          />
          <div className="space-y-5">
            {experience.map((item, index) => (
              <SectionFade key={item.company} delay={index * 0.05}>
                <GlowCard className="p-6 md:p-8 transition duration-300 hover:-translate-y-1">
                  <div className="grid gap-6 md:grid-cols-[240px_1fr]">
                    <div>
                      <div className="text-sm uppercase tracking-[0.2em] text-violet-200">{item.period}</div>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                      <div className="mt-1 text-slate-300">{item.company}</div>
                      <div className="mt-4 text-xs text-slate-400">0{index + 1}</div>
                    </div>
                    <div className="space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex gap-3 text-sm leading-7 text-slate-300 md:text-base">
                          <div className="mt-3 h-2 w-2 rounded-full bg-violet-300" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </SectionFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Projects"
            title="High-impact platform work presented as flagship portfolio case studies."
            description="These case studies highlight platform engineering depth, business alignment, and measurable outcomes across real enterprise environments."
          />
          <div className="grid gap-5 xl:grid-cols-2">
            {projects.map((project, index) => (
              <SectionFade key={project.title} delay={index * 0.06}>
                <GlowCard className="h-full p-6 md:p-8 transition duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{project.summary}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-violet-200">
                    {project.stack}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.impact.map((impact) => (
                      <span
                        key={impact}
                        className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
                      >
                        {impact}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </SectionFade>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionFade>
            <GlowCard className="p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-violet-200">Certifications</div>
                  <div className="mt-4 space-y-3 text-slate-300">
                    <div>Tableau Desktop Specialist</div>
                    <div>AWS Certified Solutions Architect - Associate</div>
                    <div>Cisco Data Analyst Essentials</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-violet-200">Education</div>
                  <div className="mt-4 space-y-3 text-slate-300">
                    <div>MS in Computer Science</div>
                    <div>Campbellsville University</div>
                    <div>BTech in Information Technology</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-violet-200">Focus Areas</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['ELT / ETL', 'Data Quality', 'Cloud Warehousing', 'Executive Analytics', 'Governance', 'Performance Tuning'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          </SectionFade>
        </div>
      </section>

      <section id="contact" className="px-4 pb-20 pt-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionFade>
            <GlowCard className="p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-violet-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Contact
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    Let’s build reliable data products that scale.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                    I am open to Data Engineer, Analytics Engineer, and cloud data platform roles where I can help
                    design scalable pipelines, improve platform reliability, and deliver trusted business-facing data products.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="mailto:bhanu.pk222@gmail.com"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4 text-violet-300" />
                    bhanu.pk222@gmail.com
                  </a>
                  <a
                    href="tel:9452684448"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 text-violet-300" />
                    945-268-4448
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bhanuprakashreddynagireddy/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    <span className="text-violet-300 font-semibold">in</span>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </GlowCard>
          </SectionFade>
        </div>
      </section>
    </main>
  );
}