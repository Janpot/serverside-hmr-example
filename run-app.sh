restartCode=7
while [[ "$restartCode" -eq 7 ]]; do
    npm start -s
    restartCode=$?
    echo "Restarting..."
done
