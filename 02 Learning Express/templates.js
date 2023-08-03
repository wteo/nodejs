export const form = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>User Information Form</title>
    </head>
    <body>
        <h1>User Information Form</h1>
        <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <button type="submit">Submit</button>
        </form>
    </body>
    </html>
    `;
