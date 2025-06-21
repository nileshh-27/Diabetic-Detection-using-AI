from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS to allow React to communicate

# Load your trained model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        features = np.array([
            data['pregnancies'],
            data['glucose'],
            data['insulin'],
            data['bmi'],
            data['age']
        ]).reshape(1, -1)

        prediction = model.predict(features)[0]
        probability = round(model.predict_proba(features)[0][1] * 100, 2)

        result = "Diabetes Detected" if prediction == 1 else "No Diabetes"

        return jsonify({
            'accuracy': 82.29,  # Replace with actual accuracy if known
            'probability': probability,
            'result': result
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
