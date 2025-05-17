{
    "type": "MySQLNotebook",
    "version": "1.0",
    "caption": "DB Notebook",
    "content": "\\about\nCREATE DATABASE hospital_db;\nUSE hospital_db;\n\nCREATE TABLE patients (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(255),\n  age INT,\n  ailment VARCHAR(255)\n);\n\nCREATE TABLE contacts (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(255),\n  email VARCHAR(255),\n  message TEXT\n);\n\n",
    "options": {
        "tabSize": 4,
        "indentSize": 4,
        "insertSpaces": true,
        "defaultEOL": "LF",
        "trimAutoWhitespace": true
    },
    "viewState": {
        "cursorState": [
            {
                "inSelectionMode": false,
                "selectionStart": {
                    "lineNumber": 18,
                    "column": 1
                },
                "position": {
                    "lineNumber": 18,
                    "column": 1
                }
            }
        ],
        "viewState": {
            "scrollLeft": 0,
            "firstPosition": {
                "lineNumber": 2,
                "column": 1
            },
            "firstPositionDeltaTop": 3
        },
        "contributionsState": {
            "editor.contrib.folding": {},
            "editor.contrib.wordHighlighter": false
        }
    },
    "contexts": [
        {
            "state": {
                "start": 1,
                "end": 1,
                "language": "mysql",
                "result": {
                    "type": "text",
                    "text": [
                        {
                            "type": 2,
                            "content": "Welcome to the MySQL Shell - DB Notebook.\n\nPress Ctrl+Enter to execute the code block.\n\nExecute \\sql to switch to SQL, \\js to JavaScript and \\ts to TypeScript mode.\nExecute \\help or \\? for help;",
                            "language": "ansi"
                        }
                    ]
                },
                "currentHeight": 120,
                "currentSet": 1,
                "statements": [
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 0,
                            "length": 6
                        },
                        "contentStart": 0,
                        "state": 0
                    }
                ]
            },
            "data": []
        },
        {
            "state": {
                "start": 2,
                "end": 19,
                "language": "mysql",
                "currentSet": 1,
                "statements": [
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 0,
                            "length": 28
                        },
                        "contentStart": 0,
                        "state": 0
                    },
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 28,
                            "length": 17
                        },
                        "contentStart": 29,
                        "state": 0
                    },
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 45,
                            "length": 120
                        },
                        "contentStart": 47,
                        "state": 0
                    },
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 165,
                            "length": 123
                        },
                        "contentStart": 167,
                        "state": 0
                    },
                    {
                        "delimiter": ";",
                        "span": {
                            "start": 288,
                            "length": 2
                        },
                        "contentStart": 287,
                        "state": 3
                    }
                ]
            },
            "data": []
        }
    ]
}