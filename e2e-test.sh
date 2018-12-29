#!/usr/bin/env bash
set -o nounset
set -o errexit
set -o pipefail

TESTING_API = ${TESTING_API}
if [ -z ${TESTING_API}];
then
  echo "Empty"
  exit 1
else 
   echo "WORKS! $TESTING_API"
fi

cat ~/.bashrc