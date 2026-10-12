import React from "react";

// Curated Overview Courses for Home & Course Directory
export const overviewCourses = [
  {
    id: "c-cpp-systems-mastery",
    title: "C & C++ Programming & Systems",
    duration: "2.5 Months",
    badge: "Free 3-Day Demo",
    description:
      "C memory fundamentals, pointers, dynamic memory, structs, C++ OOP, STL internals, templates, file handling, and 10 mini-projects.",
    capstoneProject: "Custom Memory Allocator & ATM Simulator",
    footerNote: "Batch size: 15 max",
    isFeatured: false,
    badgeType: "demo",
    blobBg: "bg-[#eef8ce]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21m3.75-18v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H8.25A2.25 2.25 0 006 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "java-enterprise-full-stack",
    title: "Core Java & Enterprise Development",
    duration: "6 Months",
    badge: "Enterprise Core",
    description:
      "Complete 13-Module Core Java syllabus: JVM architecture, OOP, exception handling, file I/O, collections framework, and multithreading.",
    capstoneProject: "Banking & ATM System & Employee Payroll",
    footerNote: "100% Practical Hands-On",
    isFeatured: false,
    badgeType: "standard",
    blobBg: "bg-[#E7DAC3]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5" />
      </svg>
    ),
  },
  {
    id: "data-science-ai-ml",
    title: "Data Science & AI / ML",
    duration: "6 Months",
    badge: "High Demand",
    description:
      "Python foundations, Math & Statistics, SQL mastery, NumPy/Pandas EDA, Scikit-Learn ML, PyTorch Deep Learning, NLP & GenAI (RAG).",
    capstoneProject: "Enterprise Semantic RAG Copilot & Fraud Classifier",
    footerNote: "GPU Cloud & Capstones included",
    isFeatured: false,
    badgeType: "demo",
    blobBg: "bg-[#E7E7D9]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    duration: "4 Months",
    badge: "Job-Oriented",
    description:
      "11-Module Industry Syllabus: Advanced Excel, Power Query, SQL, Statistics, Python Analytics, Microsoft Power BI, Tableau, and AI Analytics Tools.",
    capstoneProject: "End-to-End Sales & Business Intelligence Dashboard",
    footerNote: "Power BI & Tableau Mastery",
    isFeatured: false,
    badgeType: "standard",
    blobBg: "bg-[#d9ece8]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    id: "full-stack-development-mern-nextjs",
    title: "Full Stack Development (MERN + Next.js)",
    duration: "6 Months",
    badge: "Flagship",
    description:
      "Production architecture with Next.js App Router, Node.js microservices, PostgreSQL, Prisma, Redis, Kafka, and Docker container deployments.",
    capstoneProject: "Multi-tenant SaaS Platform with Webhooks & Auth",
    footerNote: "Placement guaranteed track",
    isFeatured: false,
    badgeType: "flagship",
    blobBg: "bg-[#DDEFE4]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5h10.5a4.5 4.5 0 004.5-4.5 4.5 4.5 0 00-4.5-4.5c-.88 0-1.7.26-2.39.71A6 6 0 006 7.5a6 6 0 00-3.75 8.25z" />
      </svg>
    ),
  },
  {
    id: "modern-web-development",
    title: "Modern Web Development",
    duration: "3 Months",
    badge: "Frontend Core",
    description:
      "React 19, Tailwind CSS, Modern ESNext, State machines, Component design systems, and browser rendering optimization.",
    capstoneProject: "Collaborative Real-time Canvas & UI Workspace",
    footerNote: "Interactive live labs",
    isFeatured: false,
    badgeType: "standard",
    blobBg: "bg-[#f4efe0]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    ),
  },
  {
    id: "python-full-stack-backend",
    title: "Python Full Stack & Backend",
    duration: "5 Months",
    badge: "Backend Track",
    description:
      "FastAPI, Django REST, Celery distributed tasks, Redis caching, Postgres optimizations, and Autonomous AI Agent integrations.",
    capstoneProject: "Real-time Analytics Engine with Async Workers",
    footerNote: "Async IO & APIs",
    isFeatured: false,
    badgeType: "standard",
    blobBg: "bg-[#DCF668]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

// Comprehensive Detailed Syllabus matching the official PDFs
export const coursesSyllabusData = {
  "c-cpp-systems-mastery": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "C & C++ Programming & Systems",
    subtitle:
      "Comprehensive C & C++ engineering: from GCC compilation, pointers, memory allocation, and structs in C to OOP, virtual dispatch, templates, file streams, and 10 mini-projects in C++.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    pdfUrl: "/Courses/CPP%20Programming.pdf",
    codeFileName: "memory_manager.cpp - TekZen Systems Lab",
    codeSnippet: `// TekZen Systems Track: Memory Architecture & C++ OOP
#include <iostream>
#include <memory>
#include <vector>

template <typename T>
class SafeDynamicArray {
private:
    T* data;
    size_t capacity;
public:
    SafeDynamicArray(size_t cap) : capacity(cap), data(new T[cap]) {}
    ~SafeDynamicArray() { delete[] data; } // RAII Memory Safe
    T& operator[](size_t idx) { return data[idx]; }
};

int main() {
    SafeDynamicArray<int> arr(1024);
    std::cout << "Memory allocated safely on heap.\\n";
    return 0;
}`,
    terminalFooter: {
      left: "🛡️ Valgrind: 0 Leaks Detected",
      right: "Latency: 14.2ns / op",
    },
    idealCandidate:
      "Engineers and CS students seeking mastery in Systems Programming, Embedded Systems, Game Engine Architecture, HFT, or Core Backend Engineering.",
    modules: [
      {
        weeks: "MODULE 1",
        category: "C Foundations & Program Structure",
        title: "C Program Structure, Compilation & Control Flow",
        points: [
          "What is C? History, features, applications, and program structure.",
          "Compilation and execution lifecycle with GCC/Clang: preprocessor, compiler, assembler, linker.",
          "Character set, tokens, keywords, identifiers, constants, variables, and data type ranges.",
          "Arithmetic, relational, logical, assignment, increment/decrement, and bitwise operators.",
          "Decision-making: if, if-else, nested if, else-if ladder, and switch-case.",
          "Looping: while, do-while, for loops, nested loops, break, and continue.",
          "Practical programs: even/odd, prime, palindrome, Armstrong, factorial, Fibonacci, and pattern printing.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 2",
        category: "Functions, Recursion & Arrays",
        title: "Modular Programming, Stack Frames & Array Operations",
        points: [
          "Function declaration, prototype, definition, and call-by-value semantics.",
          "Recursion mechanics: stack memory, recursive factorial, Fibonacci, GCD, and prime checking.",
          "One-dimensional and multi-dimensional arrays: initialization and traversal.",
          "Passing arrays to functions, insertion, deletion, and basic array operations.",
          "Linear search, binary search, bubble sort, and selection sort.",
          "Matrix operations: matrix addition, multiplication, and transpose.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 3",
        category: "Low-Level Memory Architecture",
        title: "Pointers, Dynamic Memory (malloc/free) & Strings",
        points: [
          "Pointers, address-of (&) and dereference (*) operators, and pointer arithmetic.",
          "Relationship between arrays and pointers; pointer-to-pointer (**).",
          "Dynamic memory allocation using malloc(), calloc(), realloc(), and free().",
          "Detecting null/dangling pointers, uninitialized pointers, and memory leaks.",
          "Character arrays, null character (\\0), safe input, and string library functions (strlen, strcpy, strcat, strcmp).",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 4",
        category: "Data Layout & Persistence",
        title: "Structures, Unions, Preprocessor & File Handling in C",
        points: [
          "Structure declaration, initialization, member access, and array of structures.",
          "Pointers to structures and the arrow operator (->); unions, enum, and typedef.",
          "Storage classes: auto, register, static, and extern.",
          "C preprocessor: #include, header files, #define, macros, and conditional compilation.",
          "File handling in C: FILE pointer, fopen(), fclose(), text vs. binary files (fread, fwrite, fseek, ftell).",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 5",
        category: "C++ Object-Oriented Core",
        title: "C++ Syntax, Classes, Objects & Encapsulation",
        points: [
          "Differences between C and C++, main() function, compiling and linking C++ programs.",
          "Input/output using cin, cout, namespaces, and stream manipulators.",
          "Principles of OOP: abstraction, encapsulation, inheritance, and polymorphism.",
          "Classes and objects, private, public, protected access specifiers, and data hiding.",
          "Member functions, inline functions, and the 'this' pointer.",
          "Practical programs: Student, Rectangle, Employee, and Bank Account classes.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 6",
        category: "Object Lifecycle & RAII",
        title: "Constructors, Destructors & Member Qualifiers",
        points: [
          "Default constructors, parameterized constructors, and constructor overloading.",
          "Copy constructor basics, object creation and destruction order.",
          "Destructors and RAII resource management for pointers and handles.",
          "Static data members, static member functions, const member functions, and friend functions.",
          "Pointers to objects, dynamic memory allocation using new and delete.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 7",
        category: "Inheritance & Polymorphism",
        title: "Inheritance Hierarchies, Dynamic Binding & Virtual Functions",
        points: [
          "Single, multilevel, multiple, hierarchical, and hybrid inheritance models.",
          "Base and derived classes, access modes, and constructor/destructor execution order.",
          "Compile-time vs. Run-time polymorphism; function overloading vs. function overriding.",
          "Virtual functions, dynamic binding (vtable/vptr), abstract classes, and pure virtual functions.",
          "Object slicing and virtual destructors.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 8",
        category: "Templates & Error Handling",
        title: "Operator Overloading, Templates, Exceptions & File Streams",
        points: [
          "Operator overloading rules, unary and binary operator overloading.",
          "Function templates and class templates for generic, reusable data structures.",
          "Exception handling using try, catch, and throw; standard exception hierarchy.",
          "C++ File stream classes: ifstream, ofstream, fstream, and file opening modes.",
          "Binary file operations: read(), write(), and managing persistent records.",
        ],
        isCapstone: false,
      },
      {
        weeks: "CAPSTONES",
        category: "CAPSTONE DEFENSE",
        title: "10 Industrial Mini-Projects & Systems Capstone",
        description:
          "Build and defend real-world software applications: Student Record Management System, Banking Management System, Library Management System, Quiz Application, Number Guessing Game, Employee Payroll System, Inventory Management System, Electricity Bill Calculator, Contact Management System, and ATM Simulation System.",
        isCapstone: true,
      },
    ],
  },
  "java-enterprise-full-stack": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Core Java & Enterprise Development",
    subtitle:
      "Comprehensive Core Java syllabus from beginner syntax and control flow to OOP architectures, exception handling, file I/O, collections framework, multithreading, and 10 mini-projects.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    pdfUrl: "/Courses/JAVA%20CORE.pdf",
    codeFileName: "BankLedger.java - TekZen Java Core",
    codeSnippet: `// TekZen Java Enterprise Track: Thread-Safe Banking Ledger
package tech.tekzen.banking;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.ReentrantLock;

public class BankLedger {
    private final ConcurrentHashMap<String, Long> accounts = new ConcurrentHashMap<>();
    private final ReentrantLock lock = new ReentrantLock();

    public synchronized void transfer(String from, String to, long amount) {
        if (accounts.getOrDefault(from, 0L) >= amount) {
            accounts.compute(from, (k, v) -> v - amount);
            accounts.compute(to, (k, v) -> (v == null ? 0L : v) + amount);
            System.out.println("Transfer successful: " + amount);
        }
    }
}`,
    terminalFooter: {
      left: "☕ Java 21 / JVM HotSpot",
      right: "Garbage Collector: Zero Leaks",
    },
    idealCandidate:
      "Engineers and students targeting Core Java Software Engineer, Java Enterprise, FinTech, and Tier-1 MNC positions.",
    modules: [
      {
        weeks: "MODULES 1 – 2",
        category: "Java Platform & Language Basics",
        title: "Introduction to Java, JVM Architecture & Data Types",
        points: [
          "What is Java? History, features, C++ vs. Java, and program structure.",
          "Compilation and execution lifecycle: JDK, JRE, and JVM internals.",
          "Setting JAVA_HOME, PATH environment variables, and IDE setup.",
          "Naming conventions, statements, blocks, static vs. non-static/instance blocks.",
          "Identifiers, keywords, literals, primitive data types, ranges, reference types, type casting, and operators.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULES 3 – 4",
        category: "Control Flow & Input Handling",
        title: "Control Structures & Input Fundamentals (Scanner/BufferedReader)",
        points: [
          "Decision control: if, if-else, if-else-if, and switch-case statements.",
          "Looping: for, while, do-while, and enhanced for-each loop.",
          "Jump statements: break, continue, return, and nested control structures.",
          "Practical logic: number, series, menu-driven, and pattern programs.",
          "Java input from keyboard: Scanner, BufferedReader, CLI arguments parsing, and input validation.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULES 5 – 6",
        category: "Arrays & Method Signatures",
        title: "Arrays, String Internals & Methods in Java",
        points: [
          "Single-dimensional, multi-dimensional, and jagged arrays; searching and basic sorting.",
          "String and String literals, String Constant Pool (SCP) memory allocation.",
          "String vs. StringBuffer vs. StringBuilder: mutability, thread-safety, and performance.",
          "What is a method? Method declaration, signature, predefined and user-defined methods.",
          "Instance vs. static methods, calling methods, method overloading, return types, and parameter passing.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULES 7 – 8",
        category: "Object-Oriented Programming",
        title: "OOP Principles, Constructors, Inheritance & Polymorphism",
        points: [
          "OOP foundations: classes, objects, instance variables, and methods.",
          "Constructors: default, parameterized, constructor overloading, and 'this' keyword.",
          "Garbage collection mechanics and finalize() modern Java considerations.",
          "Inheritance: single, multilevel, hierarchical, and hybrid inheritance mechanisms.",
          "The 'super' keyword, method overriding, and the 'final' keyword (variables, methods, classes).",
          "Dynamic method dispatch, compile-time vs. runtime polymorphism.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULES 9 – 10",
        category: "Robust Application Architecture",
        title: "Abstraction, Encapsulation, Packages & Exception Handling",
        points: [
          "Abstract classes, abstract methods, and interface definition/implementation.",
          "Interface vs. Abstract class; implementing multiple interfaces.",
          "Encapsulation, getters/setters, access modifiers, packages, and import statements.",
          "Exception hierarchy: checked vs. unchecked exceptions, try, catch, and finally.",
          "Multiple catch blocks, nested try, throw, throws, custom exceptions, chained exceptions, and propagation.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 11",
        category: "I/O Streams & Serialization",
        title: "Java I/O, File Handling & Object Serialization",
        points: [
          "Java I/O streams: byte streams vs. character streams hierarchy.",
          "Buffered streams, File class, text files vs. binary files, reading and writing files.",
          "InputStreamReader and BufferedReader for high-performance reading.",
          "Data streams, Object Serialization and Deserialization with Serializable.",
          "Practical programs: file copy, read/write, and object serialization programs.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULES 12 – 13",
        category: "Advanced Java & Concurrency",
        title: "Collections Framework & Multithreading",
        points: [
          "Wrapper classes, autoboxing and unboxing.",
          "Collection framework hierarchy: List, Set, and Map.",
          "Implementations: ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, LinkedHashMap.",
          "Iterators, enhanced for loop, Generics, and Comparable vs. Comparator.",
          "Multithreading: thread lifecycle, extending Thread vs. implementing Runnable, run() and start().",
          "Thread priorities, sleep, synchronization methods and blocks, and inter-thread communication.",
        ],
        isCapstone: false,
      },
      {
        weeks: "CAPSTONES",
        category: "CAPSTONE DEFENSE",
        title: "10 Industrial Mini-Projects & Enterprise Deliverables",
        description:
          "Build and defend production applications: Student Management System, Banking & ATM System, Employee Payroll System, Library Management System, Inventory Management System, Course & Training Management System, Hospital Management System, E-Commerce Shopping System, Bus/Railway Reservation System, and Online Examination System.",
        isCapstone: true,
      },
    ],
  },
  "data-science-ai-ml": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Data Science & AI / ML",
    subtitle:
      "From Python fundamentals, Math, Statistics, and SQL to Scikit-Learn ML, PyTorch Deep Learning, NLP, Generative AI (RAG, LLMs), and production MLOps deployment.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    pdfUrl: "/Courses/Data%20Science.pdf",
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
      "Aspiring Data Scientists, Machine Learning Engineers, and Applied AI Developers seeking to lead LLM, Computer Vision, and vector infrastructure.",
    modules: [
      {
        weeks: "MODULE 1",
        category: "Python Core & Version Control",
        title: "Python & Programming Foundations, DSA & Git",
        points: [
          "Python installation, environments, variables, data types, operators, and type conversion.",
          "Conditionals, loops (for, while, break, continue), strings, and string manipulation.",
          "Data structures: Lists, Tuples, Sets, Dictionaries, lambda functions, and list comprehensions.",
          "File handling (TXT, CSV, JSON, Excel), exception handling, and debugging.",
          "Object-Oriented Programming: classes, objects, inheritance, encapsulation, and polymorphism.",
          "Python DSA fundamentals: searching, sorting, stacks, queues, and basic linked lists.",
          "Git and GitHub: repositories, commits, branching, and version control.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 2",
        category: "Math & Statistical Foundations",
        title: "Mathematics & Statistics for Data Science",
        points: [
          "Descriptive statistics: mean, median, mode, range, quartiles, variance, and standard deviation.",
          "Probability fundamentals, conditional probability, Bayes' Theorem, and distributions (Normal, Binomial, Poisson).",
          "Sampling methods, sampling bias, inferential statistics, confidence intervals, and hypothesis testing (p-values, Z/T-tests, ANOVA).",
          "Linear algebra: vectors, matrices, matrix multiplication, dot products, eigenvalues, and eigenvectors.",
          "Calculus fundamentals: derivatives, partial derivatives, and Gradient Descent in machine learning.",
          "Statistical analysis with Python, NumPy, Pandas, and SciPy.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 3",
        category: "Data Tier & Query Engineering",
        title: "Database Management & SQL Mastery",
        points: [
          "RDBMS architecture, tables, records, constraints, primary keys, and foreign keys.",
          "SQL commands: DDL, DML, DQL, transaction basics, SELECT, WHERE, DISTINCT, ORDER BY, and LIMIT.",
          "Aggregate functions (COUNT, SUM, AVG, MIN, MAX), GROUP BY, HAVING, and CASE statements.",
          "Joins: INNER, LEFT, RIGHT, FULL OUTER, and SELF JOIN; subqueries and Common Table Expressions (CTEs).",
          "Window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD(), and LAG().",
          "Normalization (1NF, 2NF, 3NF), indexing, query optimization, and practice on PostgreSQL/MySQL.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 4",
        category: "Wrangling & Business Intelligence",
        title: "Data Analysis, EDA, Visualization & BI Dashboards",
        points: [
          "NumPy arrays, indexing, slicing, broadcasting; Pandas Series and DataFrames.",
          "Importing CSV, Excel, JSON, and databases; filtering, sorting, merging, and pivot tables.",
          "Data preprocessing: outlier detection using IQR and Z-score, Min-Max scaling, standardization, and one-hot/label encoding.",
          "Data visualization with Matplotlib and Seaborn: histograms, box plots, and heatmaps.",
          "Business Intelligence: Power BI / Tableau dashboards, connecting data sources, DAX, and drill-down reports.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 5",
        category: "Supervised & Unsupervised ML",
        title: "Machine Learning Algorithms & Optimization",
        points: [
          "ML workflow: problem definition, feature engineering, train/val/test splits, data leakage, and overfitting prevention.",
          "Regression: Linear, Polynomial, Ridge, Lasso, and evaluation metrics (MAE, MSE, RMSE, R²).",
          "Classification: Logistic Regression, KNN, Naïve Bayes, SVM, and Decision Trees.",
          "Tree-based and ensemble models: Random Forest, Bagging, Boosting, Gradient Boosting, XGBoost, LightGBM, and CatBoost.",
          "Unsupervised learning: K-Means, Hierarchical Clustering, DBSCAN, PCA, and t-SNE.",
          "Model evaluation: Confusion Matrix, Precision/Recall, F1-Score, ROC/AUC, K-Fold cross-validation, and GridSearchCV.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 6",
        category: "Deep Learning & Vision",
        title: "Deep Learning, PyTorch/TensorFlow & Computer Vision",
        points: [
          "Artificial neural networks (ANNs), perceptrons, activation functions (ReLU, Sigmoid, Softmax), and backpropagation.",
          "Loss functions, optimization algorithms (SGD, Adam, RMSProp), dropout, and batch normalization.",
          "Convolutional Neural Networks (CNNs): convolution, filters, pooling, and image classification.",
          "Transfer learning using pretrained architectures: VGG and ResNet; data augmentation.",
          "Object detection introduction and model performance improvement on public vision datasets.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 7",
        category: "NLP & Generative AI",
        title: "Natural Language Processing, LLMs & RAG Architecture",
        points: [
          "NLP fundamentals: text cleaning, tokenization, lemmatization, BoW, TF-IDF, Word2Vec, and GloVe.",
          "Sequential models: Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks.",
          "Attention mechanisms and Transformer architecture; Introduction to Large Language Models (LLMs).",
          "Pretrained models with Hugging Face Transformers, text generation, and prompt engineering.",
          "Retrieval-Augmented Generation (RAG): vector embeddings, semantic search, vector databases, and document assistants.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 8",
        category: "Production Deployment",
        title: "Model Deployment & MLOps Fundamentals",
        points: [
          "Saving and loading trained models using joblib and framework tools.",
          "Building REST APIs with FastAPI / Flask and interactive dashboards with Streamlit.",
          "Git and GitHub for project management, testing, and documentation.",
          "Introduction to Docker containerization, model versioning, and experiment tracking.",
          "CI/CD workflows using GitHub Actions, model monitoring, data drift, and cloud deployment.",
        ],
        isCapstone: false,
      },
      {
        weeks: "CAPSTONES",
        category: "CAPSTONE DEFENSE",
        title: "5 Capstone Projects & Placement Preparation",
        description:
          "Complete 5 industry-grade capstones: Finance Credit Risk & Fraud Detection, E-Commerce Customer Churn & CLV Prediction, Healthcare Patient Readmission Classifier, Computer Vision Facial Expression CNN, and NLP AI-Powered Document RAG Assistant. Includes resume review, GitHub polish, and mock interviews.",
        isCapstone: true,
      },
    ],
  },
  "data-analytics": {
    badge: "DEEP-DIVE SYLLABUS SPECIFICATION",
    title: "Data Analytics & Business Intelligence",
    subtitle:
      "From Advanced Excel, Power Query, and SQL mastery to Python analytics, Microsoft Power BI, Tableau, and AI-assisted business intelligence tools.",
    demoButtonText: "Claim Indore Demo Pass",
    pdfButtonText: "Download PDF Syllabus",
    pdfUrl: "/Courses/Data%20Analytics.pdf",
    codeFileName: "analytics_pipeline.py - TekZen BI Lab",
    codeSnippet: `# TekZen BI Track: Automated KPI Analytics & SQL ETL
import pandas as pd
import numpy as np

def calculate_kpis(sales_df):
    sales_df['OrderDate'] = pd.to_datetime(sales_df['OrderDate'])
    kpis = sales_df.groupby('Region').agg(
        TotalRevenue=('Amount', 'sum'),
        AverageOrderValue=('Amount', 'mean'),
        CustomerCount=('CustomerID', 'nunique')
    ).reset_index()
    return kpis`,
    terminalFooter: {
      left: "📊 Power BI & Tableau Verified",
      right: "SQL Index Optimization: 100%",
    },
    idealCandidate:
      "Students, graduates, and professionals aiming for roles as Data Analysts, Business Intelligence (BI) Analysts, and Operations Analysts.",
    modules: [
      {
        weeks: "MODULE 1",
        category: "Analytics Core",
        title: "Introduction to Data Analytics & Lifecycle",
        points: [
          "Introduction to Data Analytics and its business importance.",
          "Role, scope, and career opportunities across industries.",
          "Types of analytics: Descriptive, Diagnostic, Predictive, and Prescriptive.",
          "The complete data analytics lifecycle: collection, cleaning, modeling, and interpretation.",
          "Understanding structured vs. unstructured data and industry applications.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 2",
        category: "Spreadsheet Engineering",
        title: "Basic to Advanced Excel, Power Query & Automation",
        points: [
          "Excel interface, worksheets, data formatting, and fundamental formulas.",
          "Advanced formulas: IF, SUMIF, COUNTIF, SUMIFS, and COUNTIFS.",
          "Lookup functions: VLOOKUP, HLOOKUP, XLOOKUP, and INDEX-MATCH.",
          "Sorting, filtering, data validation, and conditional formatting.",
          "Pivot Tables, Pivot Charts, What-If Analysis, and dynamic interactive dashboards.",
          "Power Query for automated data extraction, cleaning, and transformation.",
          "AI-assisted Excel analysis and automated sales and employee report generation.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 3",
        category: "Database Mastery",
        title: "SQL & Advanced SQL for Business Analytics",
        points: [
          "RDBMS architecture, tables, records, constraints, and keys.",
          "SQL commands: DDL, DML, DQL, transaction basics, SELECT, WHERE, DISTINCT, ORDER BY, and LIMIT.",
          "Aggregate functions (COUNT, SUM, AVG, MIN, MAX) and GROUP BY / HAVING clauses.",
          "Joins: INNER, LEFT, RIGHT, and FULL OUTER JOIN.",
          "Subqueries, Common Table Expressions (CTEs), CASE statements, and NULL handling.",
          "Window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD(), and LAG().",
          "Views, stored procedures, indexes, query optimization, and hands-on practice in PostgreSQL/MySQL.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 4",
        category: "Statistical Analytics",
        title: "Statistics & Probability for Decision-Making",
        points: [
          "Descriptive statistics: mean, median, mode, range, quartiles, variance, and standard deviation.",
          "Probability fundamentals and distributions: Normal, Binomial, and Poisson.",
          "Population, sample, sampling techniques, correlation, covariance, and linear regression.",
          "Hypothesis testing: p-values, t-test, ANOVA, and Chi-square test.",
          "Understanding bias, outliers, statistical significance, and practical analysis on sales datasets.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULES 5 – 6",
        category: "Programming & Problem-Solving",
        title: "Python Programming & DSA for Analysts",
        points: [
          "Python syntax, variables, operators, input/output, conditionals, loops, and strings.",
          "Data structures: Lists, Tuples, Sets, Dictionaries, functions, lambda, and list comprehensions.",
          "File handling (TXT, CSV, JSON), exception handling, OOP fundamentals, and API requests.",
          "Python DSA: time/space complexity, linear & binary search, bubble/selection/insertion sort.",
          "Stack, queue, linked list basics, hashing, recursion, and two-pointer/sliding-window techniques.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 7",
        category: "Data Wrangling & Visualization",
        title: "Python for Data Analytics (NumPy & Pandas)",
        points: [
          "NumPy: arrays, indexing, slicing, and broadcasting.",
          "Pandas: Series and DataFrames, importing CSV, Excel, JSON, and databases.",
          "Data cleaning, preprocessing, handling missing values, duplicates, and merging.",
          "Exploratory Data Analysis (EDA) with Matplotlib and Seaborn visualizations.",
          "Outlier detection, data quality checks, and Excel automation using OpenPyXL.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 8",
        category: "Business Intelligence",
        title: "Microsoft Power BI Desktop & Service",
        points: [
          "Power BI Desktop interface and connecting to Excel, CSV, SQL, and web data.",
          "Data cleaning using Power Query, data modeling, relationships, and Star Schema.",
          "Introduction to DAX: calculated columns, measures, CALCULATE, FILTER, SUMX, and Time Intelligence.",
          "Charts, slicers, drill-through, bookmarks, and interactive executive dashboards.",
          "Publishing to Power BI Service, automated scheduled refresh, security, and AI-assisted queries.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULE 9",
        category: "Visual Storytelling",
        title: "Tableau Data Visualization & Dashboards",
        points: [
          "Tableau Desktop interface and connecting to diverse business data sources.",
          "Data preparation, dimensions, measures, basic to advanced chart types.",
          "Filters, groups, sets, parameters, calculated fields, and table calculations.",
          "Data joins, relationships, blending, and Level of Detail (LOD) expressions.",
          "Interactive executive dashboards, storytelling, Tableau Prep, and publishing reports.",
        ],
        isCapstone: false,
      },
      {
        weeks: "MODULES 10 – 11",
        category: "AI Analytics & Career Prep",
        title: "AI Tools for Analytics & Industry Projects",
        points: [
          "AI and Generative AI in analytics: prompt engineering for analysis and query generation.",
          "Using ChatGPT for SQL queries, Python scripts, code debugging, and report drafting.",
          "Natural language analysis, forecasting, anomaly detection, and predictive analytics overview.",
          "Responsible AI, data privacy, version control with Git/GitHub, and project documentation.",
          "Technical interview preparation: SQL & Python challenges, BI practical assessments, and mock interviews.",
        ],
        isCapstone: false,
      },
      {
        weeks: "CAPSTONES",
        category: "CAPSTONE DEFENSE",
        title: "6 Suggested Industry Analytics Projects",
        description:
          "Deliver 6 portfolio projects: Excel Sales Performance Report & Dashboard, SQL Customer & Product Sales Analysis, Python Data Cleaning & EDA Pipeline, Power BI Interactive Business Intelligence Dashboard, Tableau Regional Performance Visualization, and an End-to-End Capstone Project using Python, SQL, and Power BI.",
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
