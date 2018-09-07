#!/bin/sh

echo "setting nginx conf ..."
echo "FRONTEND_SERVER_NAME": $FRONTEND_SERVER_NAME
echo "ADMIN_SERVER_NAME": $ADMIN_SERVER_NAME
echo "BACKEND_GATEWAY": $BACKEND_GATEWAY
echo "ADMIN_GATEWAY": $ADMIN_GATEWAY
echo "API_PLACEHOLDER": $API_PLACEHOLDER
echo "ADMIN_PLACEHOLDER": $ADMIN_PLACEHOLDER
echo "UPLOADS_PLACEHOLDER": $UPLOADS_PLACEHOLDER
echo "FTP_FILES_PLACEHOLDER": $FTP_FILES_PLACEHOLDER

# replace env for nginx conf
envsubst '$ADMIN_SERVER_NAME $ADMIN_PLACEHOLDER $FRONTEND_SERVER_NAME $ADMIN_GATEWAY $API_PLACEHOLDER $UPLOADS_PLACEHOLDER $BACKEND_GATEWAY $FTP_FILES_PLACEHOLDER' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# start nginx
nginx -g 'daemon off;'
exec "$@"