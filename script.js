  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinite Scroll</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: #f9f9f9;
        }

        h2 {
            margin-bottom: 20px;
        }

        #infi-list {
            width: 200px;
            height: 300px;
            overflow-y: auto;
            border: 10px solid black;
            padding: 10px;
            background: white;
        }

        li {
            padding: 10px;
            list-style-type: none;
            text-align: center;
        }

        li:hover {
            background: #ccc;
        }
    </style>
</head>
<body>
    <h2>Infinite Scroll</h2>
    <main>
        <ol id="infi-list"></ol>
    </main>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const listContainer = document.getElementById("infi-list");
            let itemIndex = 1;

            function addItems(count) {
                for (let i = 0; i < count; i++) {
                    const li = document.createElement("li");
                    li.textContent = `Item ${itemIndex}`;
                    listContainer.appendChild(li);
                    itemIndex++;
                }
            }

            addItems(10); // Load 10 items initially

            listContainer.addEventListener("scroll", function () {
                if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight) {
                    addItems(2); // Load 2 more items on scroll
                }
            });
        });
    </script>
</body>
</html>


