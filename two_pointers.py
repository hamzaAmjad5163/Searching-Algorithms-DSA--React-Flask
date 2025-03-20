import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Two Pointers Technique function that returns the steps
def two_pointers(arr, target):
    steps = []
    arr.sort()
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        steps.append({
            "array": arr[:],
            "left": left,
            "right": right,
            "current_sum": current_sum
        })
        if current_sum == target:
            return True, steps
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return False, steps


@app.route('/twopointers', methods=['POST'])
def twopointers():
    data = request.get_json()
    array = data.get('array')
    target = data.get('target')

    if not array or not isinstance(array, list):
        return jsonify({'error': 'Invalid array input'}), 400
    if target is None:
        return jsonify({'error': 'No target value provided'}), 400

    try:
        result, steps = two_pointers(array, target)
        return jsonify({'result': result, 'steps': steps})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5004)
