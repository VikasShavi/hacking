from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from urllib.parse import unquote, urlparse
from websocket import create_connection
import sys

if len(sys.argv) < 3:
    print('Usage: python3 websocket_client.py <ip_address> <port> <page>')
    sys,exit()

ip_address = sys.argv[1]
port = int(sys.argv[2])
ws_server = ''
if len(sys.argv) == 4:
	page = sys.argv[3]
	ws_server = f"ws://{ip_address}:{port}/{page}"
else:
	ws_server = f"ws://{ip_address}:{port}"

def send_ws(payload):
	ws = create_connection(ws_server)
	data = payload

	ws.send(data)
	resp = ws.recv()
	print(f"response: {resp}")
	ws.close()

	if resp:
		return resp
	else:
		return ''

try:
	data = ''
	while True:
		data = input("enter message: ")
		if data.lower() == 'exit':
			break
		send_ws(data)
except KeyboardInterrupt:
	pass
