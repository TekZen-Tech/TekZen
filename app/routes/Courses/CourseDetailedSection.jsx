import React, { useState } from "react";

// Syllabus data for each course, with C & C++ Systems Mastery matching Image 1 exactly
export const coursesSyllabusData = {
  "c-cpp-systems-mastery": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "C & C++ Systems Mastery",
    subtitle:
      'Engineered for developers who reject the "black box." Learn how Linux kernel memory works, master cache lines, and write high-performance native code.',
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    codeFileName: "allocator.cpp - TekZen Kernel Lab",
    codeSnippet: `// TekZen Systems Track: Custom Allocator
#include <sys/mman.h>
#include <unistd.h>

struct BlockHeader {
    size_t size;
    bool is_free;
    BlockHeader* next;
    uint32_t magic_guard; // Canary 0xDEADBEEF
};

void* tekzen_malloc(size_t bytes) {
    if (bytes == 0) return nullptr;
    // Align to 16-byte CPU cache boundary
    size_t aligned = (bytes + 15) & ~15;
    return find_or_mmap(aligned);
}`,
    terminalFooter: {
      left: "🛡️ Valgrind: 0 Leaks Detected",
      right: "Latency: 14.2ns / op",
    },
    idealCandidate:
      "Engineers seeking roles in High-Frequency Trading (HFT), Embedded Systems, Game Engine Architecture, or Database Kernel Engineering.",
    modules: [
      {
        weeks: "WEEKS 1 – 2",
        category: "Foundations & Memory Architecture",
        title: "Pointer Arithmetic & The Virtual Memory Model",
        points: [
          "Stack vs. Heap physical allocation mechanisms and segment boundaries.",
          "Pointer arithmetic at byte boundaries, void* generic pointer manipulation.",
          "Structure padding, memory alignment rules, and CPU cache-line penalties.",
          "Detecting use-after-free and stack overflows using GDB inspection.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 3 – 4",
        category: "Modern Systems Standards",
        title: "Modern C++20 Standard & Move Semantics",
        points: [
          "R-value references, perfect forwarding, and zero-cost abstraction move semantics.",
          "Smart pointer internals: Custom deleters for std::unique_ptr and thread-safe reference counting in std::shared_ptr.",
          "RAII principles for POSIX socket descriptors and file handles.",
          "Compile-time templates and C++20 Concepts constraint verification.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 5 – 6",
        category: "Bare-Metal Data Structures",
        title: "Data Structures Under the Hood: Cache-Conscious Trees",
        points: [
          "B-Trees vs. Red-Black trees: Maximizing L1/L2 cache locality on modern CPUs.",
          "Writing memory-dense open-addressing Hash Tables with Robin Hood hashing.",
          "Dynamic array realloc implementations avoiding double-free memory corruption.",
          "Micro-benchmarking using Google Benchmark against standard STL containers.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 7 – 8",
        category: "Concurrency & Diagnostics",
        title: "Multithreading, POSIX pthreads & Race-Condition Profiling",
        points: [
          "POSIX threads lifecycle, mutexes, condition variables, and read-write locks.",
          "Lock-free single-producer single-consumer ring buffers using atomic memory orderings.",
          "Valgrind Massif (heap profiler) and Helgrind race-condition detection in real-run.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 9 – 10",
        category: "CAPSTONE DEFENSE",
        title: "Industrial Deliverable: Custom Linux Memory Allocator",
        description:
          "Implement your own replacement for malloc() and free() using the mmap() and sbrk() system calls, featuring memory canary guards against buffer overruns.",
        isCapstone: true,
      },
    ],
  },
  "full-stack-development-mern-nextjs": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Full Stack Development (MERN + Next.js)",
    subtitle:
      "Architect production-grade enterprise web apps with Next.js App Router, microservices, Prisma ORM, Kafka, and Docker containers.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    codeFileName: "saas-middleware.ts - TekZen Cloud",
    codeSnippet: `// Multi-tenant Edge Middleware & Rate Limiting
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function middleware(req: NextRequest) {
  const tenantId = req.headers.get('x-tenant-id');
  const count = await redis.incr(\`ratelimit:\${tenantId}\`);
  if (count > 100) {
    return new NextResponse('Rate limit exceeded', { status: 429 });
  }
  return NextResponse.next();
}`,
    terminalFooter: {
      left: "⚡ Edge Latency: <15ms",
      right: "Cluster: 99.99% Uptime",
    },
    idealCandidate:
      "Engineers aspiring for Staff/Senior Full-Stack roles, SaaS founders, and engineers scaling distributed microservices.",
    modules: [
      {
        weeks: "WEEKS 1 – 4",
        category: "Modern React & App Router",
        title: "Server Components & Suspense Architecture",
        points: [
          "React 19 Server Components, streaming SSR, and optimistic UI updates.",
          "Server Actions with Zod validation and safe schema contracts.",
          "Micro-frontend component design systems and Tailwind UI primitives.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 5 – 8",
        category: "Backend & Data Tier",
        title: "Distributed APIs, PostgreSQL & Prisma ORM",
        points: [
          "Designing high-throughput REST & GraphQL endpoints with Node/Fastify.",
          "PostgreSQL query execution plans, indexing strategies, and connection pooling.",
          "Redis multi-layer caching, pub/sub invalidation, and session management.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 9 – 12",
        category: "CAPSTONE DEFENSE",
        title: "Multi-tenant Cloud SaaS Platform with Stripe & Webhooks",
        description:
          "Build and deploy an enterprise SaaS platform with tenant database isolation, idempotency keys, background queue workers, and automated CI/CD.",
        isCapstone: true,
      },
    ],
  },
  "data-science-ai-ml": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Data Science & AI / ML",
    subtitle:
      "From vectorized NumPy tensors to fine-tuning Llama-3 and constructing production RAG vector search copilot engines.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    codeFileName: "rag_pipeline.py - TekZen AI Lab",
    codeSnippet: `# Production Hybrid Semantic RAG Engine
import torch
from sentence_transformers import SentenceTransformer
import qdrant_client

model = SentenceTransformer('bge-large-en-v1.5')
client = qdrant_client.QdrantClient(host="localhost", port=6333)

def semantic_retrieve(query: str, top_k: int = 5):
    dense_vec = model.encode(query, normalize_embeddings=True)
    results = client.search(
        collection_name="enterprise_docs",
        query_vector=dense_vec.tolist(),
        limit=top_k
    )
    return [r.payload["chunk_text"] for r in results]`,
    terminalFooter: {
      left: "🚀 Model: BGE-Large v1.5",
      right: "Recall@5: 98.4%",
    },
    idealCandidate:
      "Aspiring Applied AI Engineers, Data Scientists, and Backend developers seeking to lead LLM and vector infrastructure.",
    modules: [
      {
        weeks: "WEEKS 1 – 4",
        category: "Vectorized Computing & Statistical Inference",
        title: "NumPy Math Internals, Pandas & Feature Engineering",
        points: [
          "SIMD vectorized mathematics and memory layouts in NumPy arrays.",
          "Feature selection, high-dimensional normalization, and PCA dimensionality reduction.",
          "Supervised and Unsupervised machine learning models with Scikit-Learn.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 5 – 8",
        category: "Deep Learning & Neural Architectures",
        title: "PyTorch Tensor Computation & Transformer Architecture",
        points: [
          "Backpropagation, custom loss functions, and gradient descent optimizers.",
          "Transformer multi-head self-attention mechanisms and positional encodings.",
          "Fine-tuning open models using LoRA and QLoRA on GPU clusters.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 9 – 12",
        category: "CAPSTONE DEFENSE",
        title: "Autonomous Enterprise RAG Copilot with Multi-Agent Tool Calling",
        description:
          "Architect an end-to-end LLM application with hybrid dense-sparse vector indexing, re-ranking models, agent tool executions, and latency evaluation telemetry.",
        isCapstone: true,
      },
    ],
  },
  "modern-web-development": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Modern Web Development",
    subtitle:
      "Master modern UI engineering with React 19, TypeScript, state machines, animation pipelines, and browser rendering optimization.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    codeFileName: "virtualizer.tsx - TekZen UI Lab",
    codeSnippet: `// 60FPS Infinite Virtualized DOM List
import React, { useRef, useState, useMemo } from 'react';

export function VirtualList({ totalItems, itemHeight, renderItem }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 600;

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 2);
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 4;
  const endIndex = Math.min(totalItems, startIndex + visibleCount);

  return (
    <div onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)} style={{ height: containerHeight, overflowY: 'auto' }}>
      <div style={{ height: totalItems * itemHeight, position: 'relative' }}>
        {/* Render visible slice only */}
      </div>
    </div>
  );
}`,
    terminalFooter: {
      left: "🎨 Frame Budget: 16.6ms (60 FPS)",
      right: "DOM Nodes: <50 at all times",
    },
    idealCandidate:
      "Frontend engineers wanting to build polished, performant web applications and design systems with zero bloat.",
    modules: [
      {
        weeks: "WEEKS 1 – 3",
        category: "DOM & JavaScript Foundations",
        title: "Event Loop, DOM Painting & Modern ESNext",
        points: [
          "Microtasks, macrotasks, and the browser render pipeline (Reflow vs. Repaint).",
          "Functional reactive programming, closures, and custom event dispatchers.",
          "TypeScript type gymnastics, mapped types, and strict contracts.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 4 – 6",
        category: "Component Systems & State",
        title: "React 19 Internals, Hooks & Compound Components",
        points: [
          "Fiber tree reconciliation, commit phases, and memoization optimization.",
          "State machines with XState and headless accessible primitives.",
          "Tailwind CSS v4 token design systems and micro-interactions.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 7 – 8",
        category: "CAPSTONE DEFENSE",
        title: "Real-Time Collaborative Canvas Workspace",
        description:
          "Build an interactive infinite-canvas whiteboard with multiplayer cursors, undo/redo stacks, and WebSockets sync.",
        isCapstone: true,
      },
    ],
  },
  "java-enterprise-full-stack": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Java Enterprise Full Stack",
    subtitle:
      "Core Java 21 virtual threads, Spring Boot 3, Hibernate JPA, Kafka messaging, and high-availability enterprise services.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    codeFileName: "PaymentService.java - TekZen Core",
    codeSnippet: `// High-Throughput Event-Driven Ledger
package tech.tekzen.banking;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PaymentProcessingService {
    private final KafkaTemplate<String, TransactionEvent> kafka;
    private final AccountRepository accountRepo;

    @Transactional
    public void processTransfer(TransferRequest req) {
        accountRepo.debit(req.fromId(), req.amount());
        accountRepo.credit(req.toId(), req.amount());
        kafka.send("ledger.audit", new TransactionEvent(req));
    }
}`,
    terminalFooter: {
      left: "☕ Java 21 Virtual Threads (Loom)",
      right: "Throughput: 50,000 tx/sec",
    },
    idealCandidate:
      "Engineers targeting FinTech, Banking, Tier-1 MNCs, and distributed mission-critical backend systems.",
    modules: [
      {
        weeks: "WEEKS 1 – 4",
        category: "JVM Internals & Concurrency",
        title: "Modern Java 21, JVM Memory & Virtual Threads",
        points: [
          "Project Loom virtual threads vs platform OS threads.",
          "JVM Garbage Collection algorithms (G1, ZGC) and heap memory tuning.",
          "Generics, reflection, and dynamic class loading under the hood.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 5 – 8",
        category: "Enterprise Spring Boot",
        title: "Spring Boot 3, Hibernate JPA & Distributed Caching",
        points: [
          "IoC container lifecycle, AOP proxies, and transactional management.",
          "Hibernate N+1 query problem detection and second-level caching.",
          "Kafka message partitions, consumer groups, and idempotency guarantees.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 9 – 12",
        category: "CAPSTONE DEFENSE",
        title: "Distributed High-Throughput Core Banking Ledger",
        description:
          "Architect an ACID-compliant distributed banking microservice system with real-time Kafka event sourcing, distributed tracing, and zero data-loss guarantees.",
        isCapstone: true,
      },
    ],
  },
  "python-full-stack-backend": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Python Full Stack & Backend",
    subtitle:
      "Async Python, FastAPI, Celery background queues, PostgreSQL database tuning, Redis caching, and Docker orchestration.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    codeFileName: "async_worker.py - TekZen Backend",
    codeSnippet: `import asyncio
import asyncpg
from redis.asyncio import Redis

redis_pool = Redis(host="localhost", port=6379)

async def stream_event_worker():
    conn = await asyncpg.connect(user="tekzen", database="telemetry")
    while True:
        job = await redis_pool.rpop("event_queue")
        if job:
            await conn.execute(
                "INSERT INTO analytics (payload) VALUES ($1)", job
            )
        await asyncio.sleep(0.01)`,
    terminalFooter: {
      left: "🐍 Asyncpg Connection Pool: Active",
      right: "Worker Queue: 0 Backlog",
    },
    idealCandidate:
      "Developers wanting to master Python backend engineering, asynchronous architectures, and high-load web APIs.",
    modules: [
      {
        weeks: "WEEKS 1 – 3",
        category: "Async Python Core",
        title: "Event Loops, Generators & Asyncio Mechanics",
        points: [
          "CPython memory model, reference counting, and the GIL.",
          "Coroutines, asyncio tasks, and non-blocking I/O multiplexing.",
          "Type annotations with Pydantic v2 core schemas.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 4 – 7",
        category: "APIs & Distributed Architecture",
        title: "FastAPI, PostgreSQL & Background Task Queues",
        points: [
          "High-performance REST API routing with dependency injection.",
          "Async PostgreSQL with asyncpg, connection pooling, and migrations.",
          "Celery and Redis message brokers for background batch workflows.",
        ],
        isCapstone: false,
      },
      {
        weeks: "WEEKS 8 – 10",
        category: "CAPSTONE DEFENSE",
        title: "Real-Time Telemetry & Async Analytics Engine",
        description:
          "Build an end-to-end streaming data pipeline handling thousands of concurrent telemetry packets with Redis streams and timescaledb.",
        isCapstone: true,
      },
    ],
  },
};

export default function CourseDetailedSection({
  selectedCourseId = "c-cpp-systems-mastery",
  onSelectCourse,
  onClaimDemo,
}) {
  const [activeCourseId, setActiveCourseId] = useState(selectedCourseId);

  // Sync if parent updates selectedCourseId
  React.useEffect(() => {
    if (selectedCourseId && coursesSyllabusData[selectedCourseId]) {
      setActiveCourseId(selectedCourseId);
    }
  }, [selectedCourseId]);

  const courseData =
    coursesSyllabusData[activeCourseId] ||
    coursesSyllabusData["c-cpp-systems-mastery"];

  const handleTrackChange = (courseId) => {
    setActiveCourseId(courseId);
    if (onSelectCourse) {
      onSelectCourse(courseId);
    }
  };

  const handleClaimClick = () => {
    if (onClaimDemo) {
      onClaimDemo();
    } else {
      const demoElement = document.getElementById("book-demo");
      if (demoElement) {
        demoElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="detailed-syllabus"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-6"
    >
      {/* Outer Card Container with clean rounded aesthetic matching Image 1 */}
      <div className="bg-[#FAF8F5] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-sm">
        
        {/* Track Selector Tabs so users can toggle tracks */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-neutral-300/60 scrollbar-none">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider shrink-0 mr-2">
            SELECT TRACK:
          </span>
          {Object.keys(coursesSyllabusData).map((id) => {
            const item = coursesSyllabusData[id];
            const isActive = activeCourseId === id;
            return (
              <button
                key={id}
                onClick={() => handleTrackChange(id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#133e2b] text-[#c8f269] shadow-sm"
                    : "bg-white text-neutral-600 hover:text-[#133e2b] hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl">
            {/* Top Badge matching Image 1 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#133e2b] text-[#c8f269] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase">
              <svg
                className="w-3.5 h-3.5 text-[#c8f269]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
              <span>{courseData.badge}</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight leading-[1.1] mt-4">
              {courseData.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-600 font-body leading-relaxed mt-3 max-w-2xl">
              {courseData.subtitle}
            </p>
          </div>

          {/* Action CTAs matching Image 1 */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2">
            <button
              onClick={handleClaimClick}
              className="bg-[#c8f269] hover:bg-[#bcf056] text-[#133e2b] font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {courseData.demoButtonText}
            </button>
            <button
              onClick={() => alert(`Downloading ${courseData.title} Syllabus PDF...`)}
              className="bg-white hover:bg-neutral-50 text-[#133e2b] font-bold border border-neutral-300 px-6 py-3 rounded-full text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-[#133e2b]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span>{courseData.pdfButtonText}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Left Timeline Cards & Right Code Sandbox Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-10 sm:mt-12 items-start">
          
          {/* Left Column: Syllabus Week Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {courseData.modules.map((mod, idx) => {
              if (mod.isCapstone) {
                // Special Capstone Card with distinct green border matching Image 1
                return (
                  <div
                    key={idx}
                    className="rounded-2xl p-5 sm:p-6 bg-white border-2 border-[#133e2b] shadow-sm flex flex-col transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="bg-[#133e2b] text-[#c8f269] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        {mod.weeks}
                      </span>
                      <span className="text-[11px] font-bold text-[#133e2b] uppercase tracking-wider">
                        {mod.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#133e2b] font-headline mt-3">
                      {mod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                      {mod.description}
                    </p>
                  </div>
                );
              }

              // Standard Week Card
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-5 sm:p-6 bg-white border border-neutral-200/90 shadow-xs flex flex-col transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="bg-[#c8f269] text-[#133e2b] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      {mod.weeks}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      {mod.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#133e2b] font-headline mt-3">
                    {mod.title}
                  </h3>

                  {mod.points && mod.points.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {mod.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#133e2b] font-bold shrink-0 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Code Terminal Window & Candidate Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* Dark Terminal Window matching Image 1 */}
            <div className="bg-[#0b1c13] text-[#c8f269] rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#1b4a35] flex flex-col">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1b4a35]/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                </div>
                <span className="text-neutral-400 font-mono text-[11px] tracking-tight">
                  {courseData.codeFileName}
                </span>
                <span className="text-neutral-500 hover:text-white cursor-pointer transition">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>

              {/* Code Content */}
              <pre className="mt-4 font-mono text-[11px] sm:text-xs leading-relaxed text-[#c8f269]/90 overflow-x-auto selection:bg-[#c8f269] selection:text-[#133e2b]">
                <code>{courseData.codeSnippet}</code>
              </pre>

              {/* Terminal Footer Status matching Image 1 */}
              <div className="mt-6 pt-3 border-t border-[#1b4a35] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#8cb58f]">
                <span>{courseData.terminalFooter.left}</span>
                <span>{courseData.terminalFooter.right}</span>
              </div>
            </div>

            {/* Ideal Candidate Profile Card matching Image 1 */}
            <div className="bg-[#faeede] rounded-3xl p-6 border border-[#eedfc9] flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#133e2b] text-[#c8f269] flex items-center justify-center shrink-0 shadow-xs">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-headline font-bold text-sm text-[#133e2b]">
                  Ideal Candidate Profile
                </h4>
                <p className="text-xs sm:text-sm text-[#4a3f33] mt-1 leading-relaxed">
                  {courseData.idealCandidate}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
