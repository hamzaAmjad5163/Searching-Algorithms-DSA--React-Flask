import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Linear search function that returns the steps
def linear_search(arr, target):
    steps = []
    for index, value in enumerate(arr):
        steps.append({"array": arr[:], "current_index": index, "is_found": value == target})
        if value == target:
            return index, steps
    return -1, steps

@app.route('/linearsearch', methods=['POST'])
def linearsearch():
    data = request.get_json()
    array = data.get('array')
    target = data.get('target')

    if not array or not isinstance(array, list):
        return jsonify({'error': 'Invalid array input'}), 400
    if target is None:
        return jsonify({'error': 'No target value provided'}), 400

    try:
        result, steps = linear_search(array, target)
        return jsonify({'result': result, 'steps': steps})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
