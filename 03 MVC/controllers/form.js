import path from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);  

const getForm = (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'form.ejs'), { pageTitle: 'Submit Your Name' });
};

const formController = { getForm };

export default formController;