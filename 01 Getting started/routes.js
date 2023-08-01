import fs from 'fs';

const templates = {
    form: `
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
    `,
  
    error404: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>User Information Form</title>
        </head>
        <body>
          <p>Error 404: Page Not Found</p>
        </body>
      </html>
    `,
  
    thankYouMessage: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>User Information Form</title>
        </head>
        <body>
          <p>Thank you for submitting your details. We will be in contact soon.</p>
        </body>
      </html>
    `,
  };

export function routes(req, res) {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
  
    if (url === '/submit' && method === 'POST') {
      const body = [];
      // req.on - listen to events
      req.on('data', (chunk) => {
          // console.log(chunk);
          body.push(chunk); // this will just be a bunch of binary digits. Hence, you still need to parse it.
      });
      return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString(); // parsing the chunks and converting it into a string variable
          const personalDetails = parsedBody.split('&');
          const splitPersonalDetails = personalDetails.map(personalDetail => personalDetail.split('='));
          const name = splitPersonalDetails[0][1];
          const email = splitPersonalDetails[1][1];
          fs.writeFile('submitted.text', `name: ${name}, email: ${email}`, err => {
              res.write(templates.thankYouMessage);
              res.end();
          }); // Saves the data submitted in a text file 
      });
    } else if (url === '/form') {
      return res.end(templates.form);
    } else {
      return res.end(templates.error404);
    }
}