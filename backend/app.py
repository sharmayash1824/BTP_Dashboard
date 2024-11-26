from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
import numpy as np

# Load the trained LSTM model
model = load_model('Copper_Price_Prediction_LSTM.h5')

# Create the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Set up the MinMaxScaler (use the same scaler settings as training)
scaler = MinMaxScaler(feature_range=(0, 1))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json  # Receive input as JSON
        last_sequence = np.array(data['last_sequence']).reshape(-1, 1)
        scaled_sequence = scaler.fit_transform(last_sequence)  # Scale input
        
        # Prepare the sequence for prediction
        sequence = np.expand_dims(scaled_sequence[-60:], axis=0)
        
        # Make the prediction
        prediction = model.predict(sequence)
        next_day_price = scaler.inverse_transform(prediction)
        
        return jsonify({'prediction': float(next_day_price[0][0])})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
