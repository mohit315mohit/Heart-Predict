from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS
import logging

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Frontend URL

# Configure logging
logging.basicConfig(level=logging.INFO)

# Load trained model
try:
    model = joblib.load("heart_disease_model.pkl")
    logging.info("✅ Model loaded successfully.")
except Exception as e:
    logging.error(f"❌ Failed to load model: {e}")
    model = None

# List of expected input fields
REQUIRED_FIELDS = [
    'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
    'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'
]

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Model not loaded."}), 500

    data = request.get_json()
    logging.info(f"Received data: {data}")

    # Validate all required fields are present
    missing = [field for field in REQUIRED_FIELDS if field not in data]
    if missing:
        return jsonify({"error": f"Missing fields: {missing}"}), 400

    try:
        # Extract features with correct types
        features = [
            int(data['age']),
            int(data['sex']),
            int(data['cp']),
            int(data['trestbps']),
            int(data['chol']),
            int(data['fbs']),
            int(data['restecg']),
            int(data['thalach']),
            int(data['exang']),
            float(data['oldpeak']),
            int(data['slope']),
            int(data['ca']),
            int(data['thal'])
        ]

        input_data = np.array([features])
        prediction = model.predict(input_data)
        result = int(prediction[0])

        logging.info(f"Prediction result: {result}")

        return jsonify({"prediction": result})

    except Exception as e:
        logging.exception(f"Error during prediction: {e}")
        return jsonify({"error": "Invalid input data or prediction failure."}), 400

@app.route('/', methods=['GET'])
def home():
    return "<h1>Heart Disease Prediction API</h1><p>Use POST /predict with JSON payload.</p>"

if __name__ == '__main__':
    app.run(port=6000)
