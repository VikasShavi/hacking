from flask import Flask, request
import subprocess

app = Flask(__name__)

@app.route('/')
def middle_proxy():
    id_param = request.args.get('id', '')
    if id_param:
        execute_grpcurl(id_param)
        return "Request sent to gRPC server with id: " + id_param
    else:
        return "Please provide an 'id' parameter in the request URL."

def execute_grpcurl(id_param):
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYm9vYmllcyIsImV4cCI6MTY4NTM4Nzc5N30.OxDlpapI0FrRzdebFTj5mI56o9XmOKDkxi8dx19uP7Q'

    # Convert single quotes to double quotes in the id_param
    id_param = id_param.replace("'", '"')

    command = f'grpcurl -plaintext -H "token: {token}" -vv -d \'{{"id":"{id_param}"}}\' 10.10.11.214:50051 SimpleApp.getInfo'

    try:
        output = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
        print(output.decode('utf-8'))
    except subprocess.CalledProcessError as e:
        print(f'Error executing command: {e.output.decode("utf-8")}')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)