---
date: '2026-06-01'
title: 'CAVIX: early detection and automated response for multi-stage APT attacks'
role: 'MSc thesis · research internship at King Saud University · pair project'
status: 'Defended Jun 2026 · graded Very Good (16.02/20)'
github: 'https://github.com/APT-Framwork/GenAI-Detection-Framework'
external: '' # add a report, paper or demo link
tech:
  - PyTorch
  - Hugging Face Transformers
  - SecBERT
  - Autoencoder & β-VAE
  - Transformer
  - GraphSAGE
  - Deep Q-Network
  - REaLTabFormer
  - Wazuh SIEM
  - MITRE Caldera
  - Docker
  - Cyber Kill Chain
problem: >-
  Advanced persistent threats unfold over weeks and across many stages, and
  each alert looks harmless on its own. Detection that fires only at the final
  stage is too late. The goal was to recognise a campaign while it is still in
  the early phases of the Cyber Kill Chain, and to respond automatically
  without handing an unconstrained model the keys to the network.
architecture:
  - 'SecBERT embeddings of command lines, process names, file paths and URLs from Wazuh SIEM alerts'
  - 'Four detectors: an autoencoder (anomaly), a β-VAE (maliciousness), a Transformer (next Kill Chain stage) and GraphSAGE (lateral movement)'
  - 'STRIX, a Deep Q-Network that fuses the four detectors and picks a response: monitor, alert, escalate, isolate host or block'
  - 'A deterministic safety gate that constrains which actions can reach the network'
  - 'Synthetic attack sequences generated with REaLTabFormer to offset scarce labelled data'
  - 'Docker cyber range with MITRE Caldera as the adversary; kernel syscall to response decision in under 5 s'
results:
  - 'Linux APT Dataset 2024 (APT41, APT28, APT29, Turla; 14 weeks; 115,726 alerts), 2,000 held-out episodes: F1 0.84 at a 16% false-positive rate'
  - '81% of campaigns stopped before the Installation stage'
  - 'Ablations: without the Transformer, pre-detection fell to 48%; removing any single detector raised false positives to 44–52%'
  - 'Open problem: the language model reads attacker-written strings that drive response actions, and the safety gate was never tested against an adaptive attacker'
---

My final-year project at ESI, carried out as a research internship with King Saud University (pair project, supervised by Prof. Abdelouahid Derhab of CoEIA and Prof. Yacine Ait Ali Yahia of ESI). It combines deep learning and reinforcement learning to detect multi-stage APT attacks before their late stages and to respond to them automatically.
