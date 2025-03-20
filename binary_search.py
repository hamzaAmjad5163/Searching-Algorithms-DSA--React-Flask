import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def binary_search(arr, target):
    steps = []
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        steps.append({"array": arr[:], "low": low, "mid": mid, "high": high})
        if arr[mid] == target:
            return mid, steps
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1, steps

@app.route('/binarysearch', methods=['POST'])
def binarysearch():
    data = request.get_json()
    array = data.get('array')
    target = data.get('target')


    if not array or not isinstance(array, list):
        return jsonify({'error': 'Invalid array input'}), 400
    if target is None:
        return jsonify({'error': 'No target value provided'}), 400

    try:
        result, steps = binary_search(array, target)
        return jsonify({'result': result, 'steps': steps})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5003)
