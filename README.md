# 🧠 Diabetes Prediction System (ML + Visual Insights)

This project is a **Machine Learning-powered Diabetes Prediction System** that predicts whether a user is diabetic based on health metrics like glucose, insulin, BMI, and age. It uses a **Random Forest Classifier** along with custom **Feature Engineering** and **Weight of Evidence (WoE) Encoding** for enhanced accuracy and interpretability.

The system includes **visualizations** that help users and healthcare professionals understand the prediction more effectively.

---

## 🩺 Features

- ✅ Predicts **Diabetic** or **Non-Diabetic**
- ✅ Shows **confidence score** in the prediction
- ✅ Generates 4 insightful visualizations:
  - Bar Chart (User vs Average Probability)
  - Pie Chart (Prediction Confidence)
  - Confusion Matrix Heatmap
  - Probability Distribution Plot
- ✅ Custom data pipeline with feature engineering & WoE encoding
- ✅ Scikit-learn model with over **88% accuracy**

---

## 📥 Input Features

| Feature         | Description                          |
|----------------|--------------------------------------|
| Pregnancies     | Number of pregnancies                |
| Glucose         | Plasma glucose concentration         |
| Insulin         | Serum insulin level                  |
| BMI             | Body Mass Index                      |
| Age             | Patient's age                        |

📊 Additional Engineered Features:
- Pregnancy Ratio
- Risk Score
- Insulin Efficiency
- Glucose_BMI Ratio
- BMI × Age
- WoE Encoded: `Glucose_woe`, `RiskScore_woe`

---

## 📈 Results

| Metric        | Value        |
|---------------|--------------|
| Accuracy      | ~88%         |
| ROC-AUC Score | ~91%         |

Model trained on the **Pima Indian Diabetes dataset** and tested using multiple evaluation metrics including ROC-AUC and confusion matrix.

---

## 📊 Visualizations[Left being samples from affected patient and right being unaffected patient]

### 🔹 User vs Average Probability  
**Compares user's probability of diabetes with dataset average**
![Bar Chart]![image](https://github.com/user-attachments/assets/1eacc362-deae-4893-bb9e-cc224f1addc3)

---

### 🟠 Prediction Confidence  
**Model's certainty in its prediction**
![Pie Chart]![image](https://github.com/user-attachments/assets/55b56a76-837b-481b-9e2a-bab2806a2448)


---

### 🧊 Confusion Matrix  
**Shows true positives, true negatives, false positives & negatives**
![Confusion Matrix]![image](https://github.com/user-attachments/assets/585b61c2-0019-44d8-8db6-eb617431315d)


---

### 🧪 Probability Distribution  
**Distribution of diabetes probabilities across dataset**
![Distribution]![image](https://github.com/user-attachments/assets/3b5618c5-b185-4d28-8b14-779b52f437da)

---
### 🚀 Results  
**The basic layout of the website containg basic info on what diabetes is and what are the common symptoms**
![result]![image](https://github.com/user-attachments/assets/6b8d63d4-89fc-4c9d-983a-6fd6693a9cae)
![image](https://github.com/user-attachments/assets/a55988ce-beeb-407a-abc3-80134d4d5e35)

**Page for taking the inputs and performing the prediction**
![result]![image](https://github.com/user-attachments/assets/a4e24b56-e216-4997-926e-66b1f4b7fa16)

---

## 🚀 Getting Started
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 🔧 Requirements

- Python 3.8+
- Python 3.10+
- React
### 📦 Installation
- Python 3.10+
- install python in your system by downloading from
- `https://www.python.org/downloads/`
- Below are the required libraries to train and run the model, these can be directly installed by doing
 ```bash
      pip install requirements.txt
  ```
- Or by manually writing
```bash
      pip install library name(replace the name with actual library name)
```
- `joblib`, `pandas`, `matplotlib`, `seaborn`, `scikit-learn`
- React-
- For the frontend which is based on react node.js is must and should be installed in the system.
- Download the required dependencies and libraries by running
```bash
        npm i
```
- `axios`, `react-dom`, `chart.js`, `formik`
### 📦 Installation

- And then to start the webapp run:
```bash
       npm start dev
```
- Or directly clone the repo by directly running the below in the terminal
```bash
git clone https://github.com/your-username/diabetes-prediction
cd diabetes-prediction
```
```bash
git clone https://github.com/your-username/diabetes-prediction
cd diabetes-prediction
pip install -r requirements.txt
```
