#!/bin/bash

MY_DIR=`dirname $BASH_SOURCE`

# Run source setup.sh before running this script.

export MONGO_DIR_NAME=mongodb
export MONGO_BIN_DIRECTORY=$TRAVELER_SUPPORT_DIR/$MONGO_DIR_NAME/$HOST_ARCH/bin
export MONGO_DATA_DIRECTORY=$TRAVELER_DATA_DIR/$MONGO_DIR_NAME
export MONGO_LOG_DIRECTORY=$TRAVELER_VAR_DIR/logs/$MONGO_DIR_NAME.log
export MONGO_PID_DIRECTORY=$TRAVELER_VAR_DIR/run/$MONGO_DIR_NAME.pid
export MONGO_BIND_IP=127.0.0.1

# Configurations
export MONGO_SERVER_PORT=27017
export MONGO_SERVER_ADDRESS=127.0.0.1
export MONGO_ADMIN_USERNAME=admin
export MONGO_ADMIN_PASSWD_FILE=$TRAVELER_INSTALL_ETC_DIR/mongo-admin.passwd
export MONGO_TRAVELER_USERNAME=traveler
export MONGO_TRAVELER_DB=traveler
