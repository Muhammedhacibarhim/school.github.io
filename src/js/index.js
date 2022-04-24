import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '../sass/style.scss';
import '../../node_modules/@fortawesome/fontawesome-free/js/all'


var date = new Date();
var year = date.getFullYear();
document.getElementById("fullyear").innerHTML = year;