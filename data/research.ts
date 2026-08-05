export const research = {
  title: "Performance Evaluation of Deep Learning Models for Intrusion Detection Using Network Traffic",

  type: "Master's Thesis",

  university: "Gümüşhane University",

  period: "2024 – 2026",

  supervisor: "Asst. Prof. Dr. Samet TONYALI",

  status: "Completed",

  keywords: [
    "Artificial Intelligence",
    "Deep Learning",
    "Cybersecurity",
    "Network Intrusion Detection System",
    "Focal Loss"
  ],

  abstract: `
Digital infrastructures are growing rapidly and cyberattacks are becoming increasingly
sophisticated. As a result, Network-based Intrusion Detection Systems have become a critical
component of modern cybersecurity. Signature-based methods sometimes fail to detect new
threats, where machine learning and deep learning can provide a valuable alternative. This
study examines a one-dimensional Convolutional Neural Network and a hybrid model called
CNN-BiLSTM, investigating how both architectures can detect network attacks in binary and
multiclass classification settings. Both architectures were evaluated on the CIC-IDS2017 and
UNSW-NB15 benchmark datasets through a rigorous experimental protocol incorporating
stratified 5-fold cross-validation, Focal Loss, QuantileTransformer scaling, and SMOTE
oversampling. Random Forest and XGBoost were additionally tested on UNSW-NB15 as
classical baselines. The results show that CNN achieves near-perfect binary classification
performance on CIC-IDS2017, with 99.75% accuracy and a ROC-AUC of 0.9999. CNN-
BiLSTM reduces false negatives by approximately 36% in the binary UNSW-NB15 setting,
albeit at the cost of 4–6 times higher inference latency. In multiclass classification, CNN
outperforms CNN-BiLSTM on CIC-IDS2017 with a higher macro F1-Score (0.701 vs. 0.671).
XGBoost achieves comparable F1 performance to deep learning models in significantly less
training time, once again demonstrating the enduring value of ensemble methods. Minority
attack class detection remains a fundamental unresolved challenge across all configurations,
laying the groundwork for future research on class-wise threshold calibration and Transformer-
based architectures. The findings provide actionable insights for practitioners choosing
between deep learning and classical approaches under real-world NIDS deployment
constraints.

`,

citation: {
  author: "Cheick Mohamed Rachid",
  year: "2025",
  title:
    "Performance Evaluation of Deep Learning Models for Intrusion Detection Using Network Traffic",
  institution: "Gümüşhane University",
  type: "Master's Thesis",
},

datasets: [
  "CIC-IDS2017",
  "UNSW-NB15",
],

algorithms: [
  "CNN",
  "CNN-BiLSTM",
  "Autoencoder",
  "Random Forest",
  "XGBoost",
],

metrics: [
  "Accuracy",
  "Precision",
  "Recall",
  "F1-Score",
  "ROC-AUC",
],

};

