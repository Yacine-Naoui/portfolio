---
date: '2025-12-01'
title: 'Industrial energy audit agent'
company: 'SARL CloudWind'
github: ''
external: ''
tech:
  - vLLM
  - On-prem LLM
  - TimescaleDB
  - Regression evals
  - Human-in-the-loop
showInProjects: true
---

On-premise LLM agent over an industrial plant's measurement history, replacing a manual audit process. It computes energy KPIs, diagnoses deviations, answers free-form questions over a time-series database and drafts the bilingual report external auditors sign off on. An expert-correction loop turns auditor edits into an error signal, with deterministic validators and a regression eval set gating each release.
