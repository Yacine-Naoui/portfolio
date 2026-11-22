---
date: '2025-08-01'
title: 'Backend Lead & ML Engineer'
company: 'SARL CloudWind'
location: 'Algiers, Algeria'
range: 'Aug 2025 – Present'
url: 'https://www.cloudwind.com/'
---

- Lead backend and ML engineering across four production platforms (security, insurance, industry), owning features from POC to production
- Multi-agent platform for security operations: RAG backend with provider-agnostic model routing and automatic failover across GPT, Claude and on-prem LLMs, with prompt-injection guardrails and per-tenant cost and token budgets
- LLM evaluation: designed the reproducible benchmark (Claude Opus vs Qwen3 / Llama 4, with and without RAG) that drove a client's migration to on-prem models
- Industrial energy audit agent: on-prem LLM agent replacing a manual audit, with human-in-the-loop review and releases blocked unless they pass regression evals
- Insurance self-service: multilingual (FR/EN/AR) LangGraph agent that calls backend services as tools, with memory and vision-based damage assessment
- Insurance fraud detection: hybrid rule + ML pipeline for a national insurer, piloted on 59,055 claims at ~12 ms per claim; the unsupervised VAE caught 100% of injected inflation cases
- Production reliability: regression eval sets, drift monitoring and per-request token and cost tracking
