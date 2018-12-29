#!/usr/bin/env bash
set -o nounset
set -o errexit
set -o pipefail

# source ~/.bashrc
echo $TESTING_API
API = $TESTING_API
echo `${API}`
if [ -z "$TESTING_API" ];
then
  echo "Empty"
  exit 1
else 
   echo "WORKS! $TESTING_API"
fi