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
    image: "hashguard.jpg",
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
    image: "llm-lessons.png",
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
    date: "Sep 2026",
    title: "RAG — Research & Engineering Handbook",
    category: "AI / LLM Engineering · Information Retrieval",
    desc: "From Fundamentals to Production Systems — Complete Research & Engineering Handbook.",
    image: "rag-guide.png",
    content: `
### Overview
**Retrieval-Augmented Generation (RAG) — From Fundamentals to Production Systems**
AI / LLM Engineering · Information Retrieval · Security · Evaluation · Version 1.0 (September 2026)

### 01 — What is RAG?
Retrieval-Augmented Generation (RAG) is an architecture that combines information retrieval with large language model generation.

Instead of asking an LLM to answer entirely from its internal parameters, a RAG system retrieves relevant external information and supplies that evidence to the model before generation.

\`\`\`
User Question → Retriever → Relevant Knowledge → LLM → Answer
\`\`\`

> **Core Principle:** Retrieve the right information before generating the answer.

### 02 — Why RAG Exists
LLMs may lack access to private, current, domain-specific, or rapidly changing information. RAG adds an external knowledge layer that can be updated without retraining the model.

• Private company documents and internal knowledge
• Frequently changing documentation and policies
• Large collections that should not be placed entirely into every prompt
• Need for source attribution and verification

### 03 — LLM vs RAG
A traditional LLM request is primarily model-centric. RAG adds retrieval as a first-class system component.

| Dimension | Traditional LLM | RAG |
| :--- | :--- | :--- |
| **Knowledge Base** | Primarily model knowledge | External + model knowledge |
| **Knowledge Boundary** | Static knowledge boundary | Knowledge can be refreshed |
| **Private Data** | Private data not automatic | Private data can be retrieved |
| **Sources** | Sources not inherent | Sources can be attached |
| **Core Architecture** | Generation-centric | Retrieval + generation |

### 04 — Core RAG Architecture
A complete RAG pipeline has two major phases: an offline/indexing pipeline and an online/query pipeline.

**OFFLINE / INDEXING**
\`\`\`
Documents → Parsing → Cleaning → Chunking → Metadata → Embeddings → Vector Store
\`\`\`

**ONLINE / QUERY**
\`\`\`
User Query → Query Processing → Retrieval → Reranking → Context → LLM → Answer
\`\`\`

### 05 — Knowledge Sources
RAG can retrieve from documents, databases, APIs, websites, enterprise knowledge systems, and application-specific stores.

• PDF, DOCX, TXT, Markdown, HTML
• PostgreSQL, MySQL, MongoDB
• Internal APIs and knowledge bases
• Documentation, research papers, company repositories

### 06 — Document Ingestion
Ingestion converts raw sources into structured content suitable for retrieval.

\`\`\`
Source → Loader → Parser → Cleaner → Chunker → Embedder → Vector Store
\`\`\`

### 07 — Document Parsing
Parsing should preserve useful structure. PDFs may contain text, tables, images, headers, footnotes, columns, charts, and code.

### 08 — Chunking
Large documents are divided into smaller units called chunks so retrieval can target the relevant section instead of returning an entire document.

\`\`\`
100-page document → Chunker → C1 | C2 | C3 | …
\`\`\`

### 09 — Chunking Strategies
Common strategies include fixed-size, sentence-based, paragraph-based, recursive, and semantic chunking.

• **Fixed-size**: simple and predictable
• **Sentence/paragraph**: preserves natural language units
• **Recursive**: progressively splits using document structure
• **Semantic**: uses meaning changes to define chunk boundaries

### 10 — Chunk Size & Overlap
There is no universally optimal chunk size. Small chunks can lose context; large chunks can introduce noise and token cost. Overlap can protect information at boundaries but increases storage and duplicate retrieval.

> **Engineering Rule:** Treat chunk size and overlap as experiment parameters, not universal constants.

### 11 — Metadata
Metadata enables filtering, authorization, citations, versioning, and debugging.

\`\`\`json
{
  "document_id": "doc_102",
  "source": "security_policy.pdf",
  "page": 17,
  "department": "security",
  "version": "2.1",
  "access_level": "restricted"
}
\`\`\`

### 12 — Embeddings
An embedding maps text into a numerical vector representing semantic information. Similar meanings can be represented by vectors that are close in embedding space.

\`\`\`
"How do I reset my password?" → Embedding Model → [0.12, -0.71, 0.43, …]
\`\`\`

### 13 — Embedding Models
Embedding model selection should be based on retrieval quality, latency, dimensionality, language support, domain performance, infrastructure requirements, and cost.

• Sentence Transformers
• BGE family
• E5 family
• Commercial embedding APIs
• Domain-specific embedding models

### 14 — Vector Databases
Vector stores index embeddings alongside metadata and often the source chunk. Examples include Qdrant, Pinecone, Weaviate, Milvus, FAISS, and Chroma.

### 15 — Similarity Search
The query is embedded and compared with stored vectors. The system returns the nearest candidates according to a chosen similarity or distance measure.

\`\`\`
Query Vector → Vector Search → Ranked Candidates
\`\`\`

### 16 — Cosine Similarity
A common measure is cosine similarity:

\`\`\`
cos(θ) = (A · B) / (||A|| ||B||)
\`\`\`

> **Key Concept:** Cosine similarity compares the direction of vectors; higher similarity generally indicates greater semantic closeness.

### 17 — Top-K Retrieval
A retriever usually returns a limited number of candidates, such as the top 5, 10, or 20. K should be evaluated against retrieval quality, context noise, latency, and cost.

### 18 — Dense Retrieval
Dense retrieval uses embeddings and vector search. It is strong for meaning-based and natural-language queries.

### 19 — Sparse Retrieval
Sparse retrieval focuses more directly on terms. BM25 is a classic approach and can be valuable for exact technical names, identifiers, error codes, and API terminology.

### 20 — Hybrid Search
Hybrid retrieval combines semantic and lexical signals before final ranking.

\`\`\`
Query → BM25 + Vector Search → Candidate Set → Reranker → Final Context
\`\`\`

> **Key Rule:** Semantic relevance and exact lexical matching solve different problems; evaluate both when technical terminology matters.

### 21 — Query Processing
Users do not always phrase questions in retrieval-friendly ways. Query processing can identify intent, entities, filters, or search terms before retrieval.

### 22 — Query Rewriting
A system may rewrite a vague query into a more explicit search query. Rewriting can help, but it can also introduce errors, so it should be measured rather than assumed to help.

### 23 — Multi-Query Retrieval
A complex question can be transformed into several related queries, retrieved independently, and merged before reranking.

\`\`\`
Original Query → Q1 / Q2 / Q3 → Retrieval → Merge → Rerank
\`\`\`

### 24 — Reranking
A fast retriever can produce a candidate set while a more expensive reranker performs deeper relevance scoring.

\`\`\`
Query → Retriever → Top 20 → Reranker → Top 5
\`\`\`

### 25 — Context Construction
Retrieved chunks should be organized with source, page, section, and other metadata where available. The objective is useful, traceable context—not maximum context.

### 26 — Prompt Design
A RAG prompt commonly contains system instructions, retrieved context, the user question, and output requirements.

\`\`\`
SYSTEM INSTRUCTIONS

CONTEXT:
{retrieved_context}

QUESTION:
{user_query}

Answer using supported information. If context is insufficient, say so.
\`\`\`

### 27 — Grounded Generation
The LLM should use retrieved evidence and should be allowed to abstain when the evidence is insufficient. RAG reduces reliance on unsupported model recall but does not eliminate hallucinations.

### 28 — Citations
Citations can connect claims to document names, pages, sections, or URLs. This improves verification, debugging, and user trust.

### 29 — RAG Failure Modes
RAG failures can occur at ingestion, parsing, chunking, embedding, retrieval, ranking, context construction, generation, or authorization layers.

\`\`\`
Data → Parsing → Chunking → Embedding → Retrieval → Ranking → Context → Generation
\`\`\`

### 30 — Hallucination & Context Overload
A model can still generate unsupported statements even with retrieved context. Conversely, retrieving too much context can add noise. Relevant evidence generally matters more than raw context volume.

### 31 — Advanced RAG
Advanced RAG improves individual pipeline stages rather than treating the LLM as the only optimization target.

\`\`\`
Query Analysis → Hybrid Retrieval → Metadata Filtering → Reranking → Compression → LLM → Validation
\`\`\`

### 32 — Parent-Child Retrieval
A small child chunk can be used for precise matching while its larger parent section is returned for generation. This balances retrieval precision with contextual completeness.

### 33 — Contextual Compression
A compression stage can extract the most relevant information from retrieved documents before the final prompt, reducing noise and token usage.

### 34 — HyDE
Hypothetical Document Embeddings (HyDE) generates a hypothetical answer/document and uses its embedding to retrieve real evidence. The hypothetical text is a retrieval aid, not authoritative evidence.

### 35 — Self-Query Retrieval
Self-query retrieval extracts structured constraints from natural-language questions and combines them with semantic search.

\`\`\`
Question → topic=authentication, year=2025 → Metadata Filter + Semantic Search
\`\`\`

### 36 — Agentic RAG
Agentic RAG allows an agent to decide whether to search, which source to use, whether another query is needed, and whether evidence is sufficient. It is flexible but increases complexity and security risk.

### 37 — Graph RAG
Graph-based retrieval is useful when relationships between entities are central to the question. Documents can be transformed into entities and relationships and retrieved through a knowledge graph.

\`\`\`
Documents → Entities/Relations → Knowledge Graph → Graph Retrieval → LLM
\`\`\`

### 38 — Multimodal RAG
Multimodal RAG extends retrieval beyond plain text to images, tables, diagrams, audio, video, and other modalities.

### 39 — RAG Evaluation
Evaluate retrieval and generation separately. A poor final answer can originate from a retrieval failure even when the LLM is behaving correctly given its context.

### 40 — Retrieval Metrics
Important retrieval metrics include Recall@K, Precision@K, Mean Reciprocal Rank (MRR), and NDCG.

\`\`\`
Recall@K = relevant retrieved / total relevant
Precision@K = relevant retrieved in top K / K
\`\`\`

### 41 — Generation Evaluation
Useful dimensions include faithfulness to retrieved evidence, answer relevance, completeness, and citation correctness.

### 42 — Evaluation Dataset
Create a fixed set of questions with expected evidence and expected answers. Re-run the same dataset after every architecture change so improvements are measurable.

\`\`\`json
{
  "question": "What authentication method is used?",
  "expected_source": "auth.md",
  "expected_answer": "JWT"
}
\`\`\`

### 43 — RAG Security
RAG introduces attack surfaces around the query, knowledge base, retrieval layer, context, and model. Security must cover the full pipeline.

• Prompt injection
• Knowledge poisoning
• Unauthorized retrieval
• Sensitive data leakage
• Malicious documents

### 44 — Prompt Injection
Retrieved documents may contain instructions designed to manipulate the model. Retrieved content should be treated as untrusted data and kept conceptually separate from system instructions.

### 45 — Knowledge Poisoning
An attacker who can influence the knowledge base may insert misleading content that later gets retrieved. Provenance, approval workflows, change monitoring, source validation, and audit logs can reduce this risk.

### 46 — Data Leakage
A naive retriever can return documents a user is not authorized to access. Permission checks should constrain retrieval rather than relying on the LLM to hide secrets after retrieval.

> **Security Rule:** Security should be enforced before or during retrieval, not only in the final prompt.

### 47 — Access Control
Metadata can carry owner, department, classification, permissions, and other authorization attributes. RBAC and ABAC policies can be applied before results enter the model context.

### 48 — Production Architecture
A production system commonly includes an API gateway, identity and authorization, query processing, permission-aware retrieval, reranking, context construction, an LLM, validation, and audit logging.

\`\`\`
Client
↓
API Gateway
↓
Auth / RBAC / ABAC
↓
Query Service
↓
Permission-Aware Retrieval
↓
Reranker
↓
Context Builder
↓
LLM
↓
Validation
↓
Response + Audit Trace
\`\`\`

### 49 — Observability & Tracing
Log query IDs, retrieved document IDs, similarity and reranker scores, latency, token usage, citations, and errors. Request tracing should make it possible to explain why a response was produced.

### 50 — Cost & Latency Optimization
Major costs can come from embedding, storage, reranking, and generation. Optimize using caching, batching, context reduction, selective reranking, and appropriate model selection.

### 51 — RAG vs Fine-Tuning
RAG changes the information available at inference time. Fine-tuning changes learned behavior. They solve different problems and can also be combined.

| Attribute | RAG | Fine-tuning |
| :--- | :--- | :--- |
| **Knowledge Type** | External knowledge | Learned behavior |
| **Update Mechanism** | Easy knowledge refresh | Requires training / update cycle |
| **Best Fit** | Private, current, fast-changing data | Domain voice, format, task style |
| **Evidence** | Can attach verifiable citations | Does not inherently provide evidence |

### 52 — RAG vs Long Context
Large context windows do not automatically guarantee effective use of all information. Retrieval can reduce irrelevant context, latency, and cost while making source selection explicit.

### 53 — Practical Technology Stack
A possible stack includes React for the UI, FastAPI or Express for services, an embedding model, Qdrant/Pinecone/Weaviate/FAISS for retrieval, an LLM provider or local model, and an observability layer.

> **Engineering Principle:** The stack should reflect what the actual project uses; avoid claiming technologies that were not implemented.

### 54 — Example RAG Project
Technical Documentation Assistant: ingest PDFs and Markdown, parse and chunk content, generate embeddings, store vectors and metadata, perform hybrid retrieval and reranking, then return an answer with citations.

\`\`\`
Upload → Parse → Chunk → Embed → Store → Retrieve → Rerank → Generate → Cite
\`\`\`

### 55 — R&D Experiment Framework
Treat RAG development as an empirical process. Keep the evaluation dataset fixed and change one major variable at a time.

• **Baseline**: vector search + fixed chunking
• **Chunk-size experiments**: testing 256 vs 512 vs 1024 token chunks
• **Vector vs BM25 vs hybrid retrieval**: comparing keyword vs semantic recall
• **Reranker on/off**: evaluating cross-encoder precision gains
• **Metadata filtering on/off**: evaluating filtered search speed
• **Context compression on/off**: measuring token reduction vs noise
• **Holistic measurement**: evaluate quality, latency, and cost together

### 56 — Debugging RAG
When an answer is wrong, trace the pipeline in order rather than immediately changing the LLM:

1. Was the document ingested?
2. Was it parsed correctly?
3. Was chunking appropriate?
4. Was the relevant chunk retrieved?
5. Was it ranked correctly?
6. Was useful context passed?
7. Did the LLM use the context correctly?
8. Was the user authorized to receive it?

### 57 — Security Architecture
A security-conscious RAG system can place authentication, authorization, query validation, permission-aware retrieval, context sanitization, output validation, and audit logging around the core retrieval-generation loop.

\`\`\`
User
↓
API Gateway
↓
Authentication → RBAC → ABAC
↓
Query Validation
↓
Permission-Aware Retrieval
↓
Reranker
↓
Context Sanitization
↓
LLM
↓
Output Validation
↓
Audit Log
\`\`\`

### 58 — RAG + AI Security
An AI security layer can monitor prompts, retrieved context, tool calls, and agent actions. This is especially relevant when RAG becomes part of an autonomous agent system.

\`\`\`
User → AI Security Layer → RAG / Agent → LLM → Tools / Data
\`\`\`

### 59 — Common Mistakes
• **Mistake:** Treating RAG as only a vector database.
  *Correction:* RAG is a full retrieval + generation architecture.
• **Mistake:** Assuming bigger chunks or more context is always better.
  *Correction:* Measure retrieval quality and context usefulness.
• **Mistake:** Ignoring metadata and permissions.
  *Correction:* Use metadata for filtering, authorization, citations, and debugging.
• **Mistake:** Evaluating only the final answer.
  *Correction:* Evaluate retrieval separately from generation.
• **Mistake:** Treating retrieved content as trusted instructions.
  *Correction:* Treat retrieved content as potentially untrusted data.

### 60 — Engineering Checklist
• **Data**: sources identified, cleaned, parsed, and metadata extracted.
• **Chunking**: size and overlap tested; semantic boundaries considered.
• **Retrieval**: embeddings, vector store, Top-K, BM25, and hybrid retrieval evaluated.
• **Ranking**: reranking and duplicate removal tested.
• **Generation**: grounding instructions, citations, and abstention behavior defined.
• **Evaluation**: fixed dataset, Recall@K, MRR, faithfulness, latency, and cost measured.
• **Security**: authentication, authorization, document permissions, prompt-injection defenses, poisoning controls, and audit logging implemented.

### 61 — Learning Roadmap
• **Level 1 — Fundamentals:** LLMs, tokens, embeddings, vector similarity, information retrieval.
• **Level 2 — Basic RAG:** PDF → chunk → embed → vector DB → retrieve → LLM.
• **Level 3 — Better Retrieval:** BM25, hybrid search, metadata filtering, reranking, query rewriting.
• **Level 4 — Advanced RAG:** parent-child retrieval, HyDE, multi-query, compression, graph, agentic and multimodal RAG.
• **Level 5 — Production:** evaluation, observability, caching, scaling, security, access control, and cost optimization.

### 62 — Final Engineering Principles
A production RAG system is not simply documents → vector database → LLM. It is a chain of engineering decisions spanning data quality, retrieval, ranking, context construction, generation, evaluation, security, and observability.

\`\`\`
DATA → RETRIEVAL → RANKING → CONTEXT → GENERATION → EVALUATION → SECURITY
\`\`\`

> **The Model Principle:** The model is only one component. The quality of the system depends on the entire information pipeline.

### Quick Reference — RAG Pipeline
| Layer | Key Question |
| :--- | :--- |
| **Data** | Is the right knowledge available and trustworthy? |
| **Parsing** | Did we preserve meaningful document structure? |
| **Chunking** | Does each chunk contain enough useful context? |
| **Embedding** | Does the embedding model represent the domain well? |
| **Retrieval** | Are relevant documents appearing in Top-K? |
| **Reranking** | Are the strongest candidates ranked highest? |
| **Context** | Is the LLM receiving useful, non-redundant evidence? |
| **Generation** | Is the answer grounded in that evidence? |
| **Evaluation** | Can we measure retrieval and answer quality? |
| **Security** | Can users retrieve only what they are authorized to see? |
| **Observability** | Can we explain why a response was generated? |
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
    image: "hashguard.jpg",
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
