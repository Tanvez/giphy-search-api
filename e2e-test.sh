#!/usr/bin/env bash
set -o nounset
set -o errexit
set -o pipefail

API = $TESTING_API
if [ -z "$API" ];
then
  echo "Empty"
  exit 1
else 
   echo "WORKS! $API"
fi