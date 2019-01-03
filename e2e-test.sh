#!/usr/bin/bash
# set -o nounset
# set -o errexit
# set -o pipefail

# echo $TESTING_API

if [ "${CIRCLE_BRANCH}" == "dev" ];
then
  echo $DEV_API
  
  
elif [ "${CIRCLE_BRANCH}" == "master" ];
then
  echo $PROD_API
fi
# if [ -z "$TESTING_API" ];
# then
#   echo "Empty"
#   exit 1
# else 
#    echo "WORKS! ${TESTING_API}"
# fi