/**
 * Created with WebStorm.
 * User: ggarrido
 * Date: 29/10/15
 * Time: 11:28
 * Copyright 2013 (c) trivago GmbH, Palma
 * To change this template use File | Settings | File Templates.
 */
(function(gapi){
    driveApi = function() {
        var CLIENT_ID = '275044223000-20gighfpfbt23i29v5ktge8o8ehugp7h.apps.googleusercontent.com';
        var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

        /**
         * Check if current user has authorized this application.
         */
        gapi.auth.authorize(
            {
                'client_id': CLIENT_ID,
                'scope': SCOPES.join(' '),
                'immediate': true
            }, handleAuthResult);

        /**
         * Handle response from authorization server.
         *
         * @param {Object} authResult Authorization result.
         */
        function handleAuthResult(authResult) {
            var authorizeDiv = document.getElementById('authorize-div');
            if (authResult && !authResult.error) {
                // Hide auth UI, then load client library.
                authorizeDiv.style.display = 'none';
                loadDriveApi();
            } else {
                // Show auth UI, allowing the user to initiate authorization by
                // clicking authorize button.
                authorizeDiv.style.display = 'inline';
            }
        }

        /**
         * Initiate auth flow in response to user clicking authorize button.
         *
         * @param {Event} event Button click event.
         */
        function handleAuthClick(event) {
            gapi.auth.authorize(
                {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
                handleAuthResult);
            return false;
        }

        /**
         * Load Drive API client library.
         */
        function loadDriveApi() {
            gapi.client.load('drive', 'v2', listFiles);
        }

        /**
         * Print files.
         */
        function listFiles() {
            var request = gapi.client.drive.files.list({
                'maxResults': 10
            });

            request.execute(function(resp) {
                appendPre('Files:');
                var files = resp.items;
                if (files && files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        appendPre(file.title + ' (' + file.id + ')');
                    }
                } else {
                    appendPre('No files found.');
                }
            });
        }

        /**
         * Append a pre element to the body containing the given message
         * as its text node.
         *
         * @param {string} message Text to be placed in pre element.
         */
        function appendPre(message) {
            var pre = document.getElementById('output');
            var textContent = document.createTextNode(message + '\n');
            pre.appendChild(textContent);
        }

        return {
            loadDriveApi: loadDriveApi,
            listFiles: listFiles
        }
    }
})(gapi);