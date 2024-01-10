#!/bin/bash
echo "------------------------------------------STARTING------------------------------------------------------------"
sudo nmap -T4 -Pn -p- --min-rate 1000 $1 > ports.txt
cat ports.txt | grep -E "^[0-9]" | cut -f 1 -d "/" > port_nos.txt
sudo nmap -T4 -Pn -p $(tr '\n' , < port_nos.txt) -A $1
rm ports.txt port_nos.txt
echo "---------------------------------------------DONE-------------------------------------------------------------"
