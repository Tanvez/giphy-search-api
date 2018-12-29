#!/usr/bin/env bash
TESTING_API = ${TESTING_API}
set -o nounset
set -o errexit
set -o pipefail

if test -z "$TESTING_API"
then
  echo "Empty"
  exit 1
else 
   echo " WORKS! " + TESTING_API
fi

cat ~/.bashrc