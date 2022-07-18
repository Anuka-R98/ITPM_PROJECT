
# DYNO-TECH

![Logo](https://github.com/Anuka-R98/ITPM_PROJECT/blob/IT20200206/frontend/public/images/DYNO_BLACK.png)

DYNO-TECH is an ecommerce web application which is primarily focused on selling electronic items through online. Customers can easily find and buy their desired electronic items from this website. Both admin and customer are two main users of the system.

## Tech Stack

**Client:**
<br>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

**Server:** 
<br>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

**Database:** 
<br>
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

**Sub Technologies:** 
<br>
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Contributors

| IT Number     | Name                       | Function             | 
| :-----------: | :------------------------  | :------------------: |
| `IT20189594`    | Rathnayka R. K. A. R.       | User Management      |
| `IT20122850`    | Perera S. S. A.             | Inventory Management |
| `IT20200206`    | Mallawaraarachchi S. M. A.  | Cart Management      |
| `IT20191788`    | Wijesiriwardana H.G.N.D.    | Order Management     |

## Run Locally

+ Clone the project

```bash
  git clone https://github.com/Anuka-R98/ITPM_PROJECT.git
```

+ Go to the project directory

```bash
  cd ITPM_PROJECT
```

+ Environment Variables

     *To run this project, you will need to create a .env file in root and add the following environment variables to your .env file.*

         NODE_ENV = development
         PORT = 5000
         MONGO_URI = your mongodb uri
         JWT_SECRET = 'abc123'

+ Install dependencies (frontend & backend)

```bash
 npm install
 cd frontend
 npm install
```

+ Run backend only

```bash
  npm run server
```

+ Run frontend (:3000) & backend (:5000)

```bash
  npm run dev
```
