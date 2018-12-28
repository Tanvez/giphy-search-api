source "~/.bashrc"
# if [ "$#" -ne 2 ]; then
#   echo "Usage: $0 $REACT_APP_MABL_API_KEY $REACT_APP_MABL_ENV_ID"
#   exit 0
# fi
set -o nounset
set -o errexit
set -o pipefail

if test -z "$TESTING_API"
then
  echo "Empty"
  exit 1
else 
   echo " WORKS! $TESTING_API"
fi