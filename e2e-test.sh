#!/usr/bin/env bash
source "~/.bashrc"

set -o nounset
set -o errexit
set -o pipefail

if test -z "$TESTING_API"
then
  echo "Empty"
  exit 0
else 
   echo " WORKS! $TESTING_API"
fi