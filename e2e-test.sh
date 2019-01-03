#!/usr/bin/bash
# set -o nounset
# set -o errexit
# set -o pipefail

source ~/.bashrc
# echo $TESTING_API
echo ${CIRCLE_BRANCH}
if [ -z "$TESTING_API" ];
then
  echo "Empty"
  exit 1
else 
   echo "WORKS! ${TESTING_API}"
fi