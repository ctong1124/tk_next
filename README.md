This is a the beginning of a recipe site built on the next.js starter utilizing Netlify CMS. 
<img width="1828" alt="image" src="https://github.com/user-attachments/assets/9acb8e5b-04f1-4df6-a62f-298559d43d04">

## Getting Started
(developed on node v14)
```bash
npm install
npm run dev
```
## Architecture
- preview site at: https://cocky-goldstine-d7c087.netlify.app/
- built on next.js pages router
- Content is managed by a Content Management System
    - Content is stored in `/data` in repo as markdown. Image content stored in `/public`.
    - Content can be managed by a CMS UI in Netlify CMS. Login at `/admin` to use CMS UI (managed by Netlify Identity).
    - Content changes are pushed to the git repo as pull requests and merged
- Structure of content is managed in `/public/admin/config.yml`
- Build and deploy handled on Netlify
