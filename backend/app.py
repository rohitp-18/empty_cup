from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_pymongo import PyMongo
import os

load_dotenv()

app = Flask(__name__)
app.config['MONGO_URI'] = os.getenv('DATABASE_URL')
mongo = PyMongo(app)

if not mongo.cx:
    raise Exception("Failed to connect to MongoDB. Please check your DATABASE_URL.")
else:
    print("Connected to MongoDB successfully.")

@app.route('/api/agency/list', methods=['GET'])
def get_data():
    print(mongo.db.list_collection_names())
    data = mongo.db.agency.find()
    if not data:
        return jsonify({"error": "No data found"}), 404
    return jsonify([item for item in data])

@app.route('/api/agency/<string:agency_id>', methods=['GET'])
def get_agency(agency_id):
    data = mongo.db.agency.find_one({"_id": agency_id})
    if not data:
        return jsonify({"error": "Agency not found"}), 404
    return jsonify(data)

@app.route('/api/agency', methods=['POST'])
def add_agency():
    if not request.json or 'name' not in request.json:
        return jsonify({"error": "Invalid input"}), 400
    agency_data = {
        "name": request.json['name'],
        "no_project": request.json.get('no_project', ''),
        "price": request.json.get('price', ''),
        "rating": request.json.get('rating', ''),
        "description": request.json.get('description', ''),
        "years": request.json.get('years', ''),
        "location": request.json.get('location', ''),
        "mobile_numbers": request.json.get('mobile_numbers', []),
    }
    result = mongo.db.agency.insert_one(agency_data)
    return jsonify({"_id": str(result.inserted_id)}), 201

@app.route('/api/agency/<string:agency_id>', methods=['PUT'])
def update_agency(agency_id):
    if not request.json:
        return jsonify({"error": "Invalid input"}), 400
    agency_data = {
        "name": request.json.get('name'),
        "no_project": request.json.get('no_project'),
        "price": request.json.get('price'),
        "rating": request.json.get('rating'),
        "description": request.json.get('description'),
        "years": request.json.get('years'),
        "location": request.json.get('location'),
        "mobile_numbers": request.json.get('mobile_numbers', []),
    }
    result = mongo.db.agency.update_one({"_id": agency_id}, {"$set": agency_data})
    if result.matched_count == 0:
        return jsonify({"error": "Agency not found"}), 404
    return jsonify({"message": "Agency updated successfully"}), 200

@app.route('/api/agency/<string:agency_id>', methods=['DELETE'])
def delete_agency(agency_id):
    result = mongo.db.agency.delete_one({"_id": agency_id})
    if result.deleted_count == 0:
        return jsonify({"error": "Agency not found"}), 404
    return jsonify({"message": "Agency deleted successfully"}), 200

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=os.getenv('PORT', 5000))
