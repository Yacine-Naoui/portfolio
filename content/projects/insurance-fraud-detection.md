---
date: '2026-02-01'
title: 'Insurance claims fraud detection'
company: 'SARL CloudWind'
github: ''
external: ''
tech:
  - Rule engine
  - Unsupervised anomaly detection
  - VAE
  - scikit-learn
  - PyTorch
showInProjects: true
---

Hybrid rule + ML fraud scoring for motor claims, piloted with a national insurer on 59,055 historical claims. A rule engine built from the insurer's 180 fraud indicators grades every claim on a four-level alert scale; a six-detector unsupervised consensus trains a VAE with per-feature explanations. Catches 100% of injected inflation cases at ~12 ms per claim.
