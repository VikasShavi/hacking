#!/bin/bash
#a = "brute"
if [ $1 = 'brute' ]
then
	echo "----------------------------------------Brute-Forcing-------------------------------------------------------"
	wpscan -U $2 -P /usr/share/wordlists/rockyou.txt --url $3
else
	echo "-----------------------------------------Enumeration--------------------------------------------------------"
	wpscan --url $1 --api-token "MQ1S0R9HyDr0FRjt5H5gpWqMhuF6WE4XElIOkjJNaXw" -e u,cb,vp,vt	
fi
echo "------------------------------------------------DONE-------------------------------------------------------------"
