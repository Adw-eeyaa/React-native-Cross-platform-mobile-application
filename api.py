from flask import Flask,jsonify,request
from flask_cors import CORS
import json 
app = Flask(__name__)
CORS(app)
with open('health.json') as f:
    data = json.load(f)

@app.route('/mental-health',methods=['GET'])
def get_mental_health_resources():
    api_key = request.args.get('sub_key')
    if api_key != 'sampleAPIkey':
        return jsonify({"error":"Unauthorized Access"}),401
    
    query_type = request.args.get('type').lower()
    query_title = request.args.get('title')
    limit = request.args.get('limit',type=int)

    results = data['mental_health_data']

    if query_type:
        results = [item for item in results if item['type'] == query_type]
    if query_title:
        results = [item for item in results if query_title.lower() in item.get('title','').lower()]

    if limit is not None and limit > 0:
        results = results[:limit]
    return jsonify({"mental_health_data":results})
     
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)