// taken from UPENN-VIRT-FSF-FT-07-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini_Project/Main/utils/auth.js
const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;  