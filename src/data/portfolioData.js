export const projects = [
  {
    id: "guardianos",
    title: "GuardianOS",
    eyebrow: "AI SECURITY · AGENT SUPERVISION",
    desc: "An open-source AI security firewall and agent supervisor designed to detect prompt injection, risky actions, data exfiltration and rogue agent behavior.",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Neo4j"],
    image: "guardianos.jpg",
    accent: "gold"
  },
  {
    id: "hashguard",
    title: "HashGuard",
    eyebrow: "DIGITAL FORENSICS · EVIDENCE INTEGRITY",
    desc: "A tamper-evident digital security evidence platform that preserves, fingerprints and verifies evidence throughout an investigation.",
    tags: ["SHA-256", "Chain of Custody", "Security", "Forensics"],
    link: "https://github.com/pds-37/Hash-Guard",
    image: "contextmind.png",
    accent: "blue"
  },
  {
    id: "swasthaparivar",
    title: "SwasthaParivar",
    eyebrow: "AI · FULL STACK · HEALTHCARE",
    desc: "A healthcare platform combining a MERN application with AI assistance, patient workflows and a security-first V2 architecture.",
    tags: ["React", "Node.js", "MongoDB", "Gemini", "Security"],
    link: "https://github.com/pds-37/SwasthaParivar",
    image: "contact-preview.png",
    accent: "cream"
  },
  {
    id: "contextmind",
    title: "ContextMind",
    eyebrow: "RAG · LLM · VECTOR SEARCH",
    desc: "An intelligent knowledge assistant concept built around retrieval, semantic search and natural interaction with personal information.",
    tags: ["Next.js", "OpenAI", "Pinecone", "RAG"],
    image: "contextmind.png",
    accent: "cream"
  }
];

export const skills = [
  ["AI / ML", "Python · OpenAI · LangChain · RAG · Embeddings"],
  ["Frontend", "React · Next.js · Tailwind CSS · Responsive UI"],
  ["Backend", "Node.js · Express · REST APIs · FastAPI"],
  ["Data", "MongoDB · PostgreSQL · MySQL · Vector Databases"],
  ["Security", "Threat Detection · Incident Response · Network Security"],
  ["Tools", "Git · GitHub · Docker · Postman · Linux"]
];

export const insights = [
  {
    id: "llm-lessons",
    date: "Aug 10, 2024",
    title: "What I Learned Building with LLMs",
    category: "AI / LLM Engineering",
    desc: "Key lessons from building real LLM applications.",
    image: "earth-night.png",
    content: `
### Introduction
Building with Large Language Models looks deceptively simple. You send a prompt, receive an answer, and suddenly you have an AI application. But once you move beyond a simple chatbot, the engineering becomes much more interesting: reliability, context, security, latency, cost, evaluation, and user experience all matter.

### The Core Lesson
An LLM is not the product. It is one component inside the product. A useful AI application is an engineered system around the model.

> **Key idea:** An LLM is not the product. It is one component inside the product. A useful AI application is an engineered system around the model.

### 1. Start With the Problem, Not the Model
Instead of starting with "Which LLM should I use?", start with "What problem am I actually solving?" A strong workflow is: User Problem → Required Experience → System Architecture → LLM → Supporting Components.

### 2. Prompt Engineering Is More Than Writing Better Prompts
Production prompts benefit from structure: role, task, context, constraints, and output format. Clear constraints can make model behavior more predictable.

### 3. Context Is Often More Important Than the Model
A smaller model with excellent context can sometimes produce a more useful answer than a larger model with poor context. This is one reason retrieval-augmented systems are so important.

### 4. Hallucinations
LLMs do not automatically retrieve truth. Systems can reduce risk through grounding, retrieval, structured outputs, validation, and allowing the application to abstain when information is insufficient.

### 5. LLM Security
Once an application can access tools, databases, APIs, or private information, the threat model changes. Prompt injection, context manipulation, unauthorized tool use, and data exfiltration become important concerns.

### Key Lessons
Models are components, not products. Context quality heavily influences output quality. Evaluation should be designed alongside the system. Security should not be added at the end. A good AI product needs good UX, not just a good model.

### Final Thought
The more I worked with LLMs, the less I thought about them as "magic intelligence." I started seeing them as another engineering primitive. The interesting work happens around them: data, retrieval, architecture, security, evaluation, and product design.
`
  },
  {
    id: "rag-guide",
    date: "Jul 22, 2024",
    title: "A Practical Guide to RAG",
    category: "AI / Retrieval",
    desc: "How I built a RAG system and what I learned.",
    image: "contextmind.png",
    content: `
### What is RAG?
RAG stands for Retrieval-Augmented Generation. Instead of asking an LLM to answer everything from its internal knowledge, a system retrieves relevant information and provides it as context before generation.

### 1. Documents
A RAG system can work with PDFs, documentation, webpages, notes, research papers, databases, and other knowledge sources.

### 2. Chunking
Large documents are commonly divided into smaller chunks. If chunks are too large, retrieval can become noisy; if they are too small, important context can be lost. Chunking strategy depends on the data and application.

### 3. Embeddings
An embedding converts text into a numerical representation. Texts with similar meanings tend to be closer in embedding space, enabling semantic search.

### 4. Vector Database
Embeddings can be stored in vector databases such as Qdrant, Pinecone, Weaviate, Milvus, or PostgreSQL with pgvector.

### 5. Retrieval
A user query is embedded and compared against stored vectors. The most relevant chunks become candidate context for the generation step.

### 6. Generation
The LLM receives the user question, system instructions, and retrieved context, then generates a response grounded in that context.

### 7. The Complete RAG Pipeline
Documents → Chunking → Embeddings → Vector Store → Query Processing → Retrieval → Top-K Context → Prompt → LLM → Response.

### 8. RAG Is More Than Vector Search
A mature system may include query rewriting, hybrid retrieval, metadata filtering, reranking, context compression, prompt construction, and response validation.

### 9. Hybrid Search
Semantic vector search is powerful, but lexical methods such as BM25 can remain valuable for exact terms, identifiers, and technical names. A hybrid candidate set can then be reranked.

### 10. Evaluating RAG
Evaluation should consider retrieval quality, generation quality, groundedness, latency, and cost. A visually impressive chatbot is not automatically a good RAG system.

### Final Thought
RAG is fundamentally an information-retrieval problem wrapped around a generation system. Retrieval quality, data quality, chunking, ranking, and evaluation often determine whether the final system is useful.
`
  },
  {
    id: "product-thinking",
    date: "Jun 15, 2024",
    title: "Product Thinking for Engineers",
    category: "Engineering / Product",
    desc: "Why product thinking matters even as a technical person.",
    image: "skills-preview.png",
    content: `
### Code Isn't the Starting Point
As developers, it is easy to jump directly into implementation. But before writing code, understand the problem, the user, and the desired experience.

### 1. Who Is the User?
Ask: Who uses this? Why do they need it? What problem are they experiencing? What do they currently use? What makes this solution better?

### 2. Define the Problem
Turn vague ideas into concrete user problems. A specific problem statement creates better constraints for design and engineering.

### 3. Build the Smallest Useful Version
Start with the core user journey, build a minimum useful product, collect feedback, and iterate. Avoid building dozens of features before validating the core idea.

### 4. Architecture Should Follow Requirements
Choose technologies because they solve requirements, not simply because they are popular. For example, caching requirements may point toward Redis, semantic search toward a vector store, and relational transactions toward PostgreSQL.

### 5. Security Is a Product Feature
Security includes authentication, authorization, validation, rate limiting, secrets management, logging, encryption, monitoring, and abuse handling. AI systems add concerns such as prompt injection, data leakage, malicious tool calls, and context poisoning.

### 6. Build → Measure → Learn
A useful development loop is Build → Test → Observe → Learn → Improve. The first architecture does not have to be the final architecture.

### 7. Technical Debt Is a Trade-off
A fast prototype can be appropriate when an idea is still being validated. Once the product is proven, architecture and operational quality can be strengthened deliberately.

### 8. Think About Failure
Ask what happens when the database is unavailable, an LLM fails, an external API times out, a user sends malicious input, or an agent requests an unsafe action. Designing failure paths leads to stronger systems.

### 9. A Product Is More Than Its Technology
React, Node, Python, databases, LLMs, Docker, and cloud services are tools. A product emerges from the combination of a real problem, a user, engineering, design, security, and iteration.

### Final Thought
The more projects I build, the more I realize that engineering is not simply about writing more code. It is about making better decisions: what to build, why to build it, how it should work, what can go wrong, and how to know whether it actually helped.
`
  },
  {
    id: "defender-thinking",
    date: "May 28, 2024",
    title: "Thinking Like a Defender",
    category: "Cybersecurity / Blue Team",
    desc: "Understanding what evidence means in cybersecurity.",
    image: "projects-preview.png",
    content: `
### Introduction
Cybersecurity initially looked like a collection of tools: Nmap, Wireshark, Burp Suite, SIEM, IDS, and endpoint utilities. Over time, the more important skill became understanding what the evidence means.

> **Key idea:** Instead of asking only "Which tool should I run?", a defender asks: what happened, why did it happen, what evidence supports that conclusion, what systems are affected, and what should happen next?

### 1. Establish Normal
Detection becomes easier when there is some understanding of expected authentication, network traffic, process activity, and resource usage. Baselines are imperfect, but they provide useful context for anomalies.

### 2. Alerts Are Not Incidents
A SIEM or IDS alert is a signal for investigation. A useful workflow is alert → triage → evidence collection → correlation → scope determination → investigation → response → documentation.

### 3. Follow the Evidence
Investigations benefit from timelines. Questions include which account was involved, which host was affected, what happened first, which process executed, which network connections occurred, and whether the activity spread.

### 4. Network Visibility
Packet and flow analysis can reveal communication relationships, protocols, ports, destinations, frequency, and unusual patterns. The goal is not memorizing packet fields; it is understanding behavior.

### 5. Detection Engineering
Good detections begin with behaviors. Define the behavior you want to identify, determine what telemetry captures it, and then create a rule or analytic around that evidence.

### 6. False Positives
A detection that fires constantly can create investigation fatigue. Detection quality is a balance between coverage, signal quality, and investigation cost.

### 7. Threat Hunting
Threat hunting starts with a hypothesis and searches available telemetry for evidence that supports or contradicts it. Hunting can uncover activity that does not match an existing alert.

### 8. Documentation
A useful investigation record should explain what was observed, what evidence supports it, what actions were taken, and what remains uncertain. Good documentation makes future review easier.

### Final Thought
Cybersecurity is not only about finding malicious activity. It is about creating enough visibility and evidence to understand what happened and respond responsibly: visibility → detection → investigation → response → learning.
`
  },
  {
    id: "incident-response",
    date: "May 10, 2024",
    title: "Incident Response: From Alert to Evidence",
    category: "Incident Response / SOC",
    desc: "A structured approach to handling security incidents.",
    image: "contact-preview.png",
    content: `
### What Is Incident Response?
Incident response is the structured handling of security incidents. A simplified lifecycle is preparation → detection → analysis → containment → eradication → recovery → lessons learned. Organizations may use different terminology, but the objective is to manage the incident systematically.

### 1. Preparation
Preparation includes logging, monitoring, endpoint and network visibility, access controls, backups, response procedures, communication channels, and clearly defined responsibilities.

### 2. Detection
Incidents may be discovered through SIEM alerts, IDS/IPS, endpoint telemetry, authentication anomalies, application monitoring, threat intelligence, or user reports. The initial alert is usually the beginning of the investigation.

### 3. Analysis
Investigators determine what happened, when it started, which assets and accounts are affected, how the activity began, whether lateral movement occurred, and whether data was accessed or transferred.

### 4. Build a Timeline
A timeline connects individual observations into a sequence. Authentication, process creation, network connections, privilege changes, file access, and other events can be ordered to reconstruct activity.

### 5. Containment
Containment aims to limit further impact. Depending on the incident, this can involve isolating a host, disabling compromised credentials, blocking malicious communication, or applying temporary access controls.

### 6. Evidence Preservation
Evidence can include authentication logs, process records, network captures, endpoint telemetry, file metadata, memory captures, application logs, and cloud audit logs. Preservation should maintain traceability and integrity.

### 7. Eradication
Eradication addresses the underlying malicious presence or mechanism. Examples can include removing persistence, resetting affected credentials, patching exploited weaknesses, or rebuilding compromised systems where appropriate.

### 8. Recovery
Recovery restores services and returns systems to a monitored operating state. Recovery should include verification that the relevant security controls are working again.

### 9. Lessons Learned
Post-incident review asks what happened, why it happened, which controls failed or were missing, what telemetry was unavailable, and what changes should be made.

### 10. From Incident to Detection Improvement
An incident can produce new detections, improved logging, better access controls, updated playbooks, and stronger response procedures. This turns an event into a source of security improvement.

### Connection to HashGuard
This lifecycle connects directly to digital evidence integrity. If investigators depend on files, logs, captures, or forensic artifacts, they need confidence that the material being analyzed is the material that was collected.

### Final Thought
Incident response is not simply an emergency checklist. It is an evidence-driven engineering process: detect, understand, contain, recover, document, and improve.
`
  },
  {
    id: "tamper-evident",
    date: "Apr 22, 2024",
    title: "Building a Tamper-Evident Evidence System",
    category: "Digital Forensics / HashGuard",
    desc: "Ensuring evidence integrity in digital investigations.",
    image: "contextmind.png",
    content: `
### The Problem
Digital investigations can involve files, logs, screenshots, packet captures, malware samples, forensic artifacts, and system images. Because digital data can be copied or modified, investigators need a way to verify whether evidence has changed.

### The Core Question
> **Key idea:** Is this evidence the same evidence we originally collected?

### 1. Hashing as a Fingerprint
A cryptographic hash maps data to a fixed-size digest. SHA-256 is commonly used as a strong cryptographic hash function. If the input changes, the resulting digest should change with overwhelming probability.

### 2. Evidence Verification
A simplified verification process is: original evidence → calculate SHA-256 → store digest → later calculate SHA-256 again → compare the values. A matching digest supports the claim that the input data is unchanged with respect to that hash.

### 3. Chain of Custody
Hashing is only one part of an evidence workflow. Chain-of-custody records can capture evidence ID, collector, timestamp, source, hash, storage location, access events, and other relevant metadata.

### 4. Evidence Lifecycle
Evidence upload → SHA-256 generation → metadata record → chain-of-custody entry → secure storage → later verification → re-hash → comparison → integrity result.

### 5. Tamper-Evident vs. Tamper-Proof
The goal is not to claim that evidence can never be altered. The goal is to make unauthorized modification detectable and to preserve a traceable record of what was collected and handled.

### 6. System Architecture
HashGuard can be understood as a pipeline connecting evidence ingestion, hashing, metadata storage, chain-of-custody records, secure storage, and later verification. Each component contributes to the overall integrity workflow.

### 7. Why Auditability Matters
A security system should not only produce a result; it should help explain how that result was produced. Recording relevant events and metadata improves traceability and makes later review easier.

### 8. Engineering Trade-offs
Security systems have to balance integrity, usability, storage cost, performance, access control, and operational complexity. Stronger controls are useful only when they can be implemented and maintained reliably.

### 9. The HashGuard Idea
HashGuard is designed as a tamper-evident digital security evidence platform for SOC teams, incident responders, security analysts, and forensic investigators. Its core flow is evidence upload → SHA-256 fingerprinting → metadata and chain-of-custody record → secure storage → later verification.

### 10. Security Engineering Lesson
The project reinforced a broader principle: security is about creating trustworthy systems, not simply adding security tools. Cryptography, metadata, storage, auditability, and verification work together.

### Final Thought
Digital investigations ultimately depend on trust. HashGuard focuses on one specific part of that trust: making changes to collected digital evidence detectable and preserving the information needed to verify integrity later.
`
  }
];
