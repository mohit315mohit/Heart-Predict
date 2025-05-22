from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)

# Load the pre-trained model
model = joblib.load('heart_disease_model.pkl')

# Define feature names based on the training dataset
feature_names = [
    'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
    'exang', 'oldpeak', 'slope', 'ca', 'thal'
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.get_json()

        # Prepare the data for prediction as a pandas DataFrame with feature names
        input_data = pd.DataFrame([{
            'age': data['age'],
            'sex': data['sex'],
            'cp': data['cp'],
            'trestbps': data['trestbps'],
            'chol': data['chol'],
            'fbs': data['fbs'],
            'restecg': data['restecg'],
            'thalach': data['thalach'],
            'exang': data['exang'],
            'oldpeak': data['oldpeak'],
            'slope': data['slope'],
            'ca': data['ca'],
            'thal': data['thal']
        }], columns=feature_names)

        # Make a prediction
        prediction = model.predict(input_data)

        # Convert prediction to a regular Python type for JSON serialization
        prediction_result = int(prediction[0])  # Ensure it's an int and JSON serializable

        # Return a more descriptive result
        if prediction_result == 0:
            return jsonify({'prediction': 'No heart disease detected'})
        else:
            return jsonify({'prediction': 'Heart disease detected'})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Something went wrong during prediction'}), 500

if __name__ == '__main__':
    app.run(debug=True)
