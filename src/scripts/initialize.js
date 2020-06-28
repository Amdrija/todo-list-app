import 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', initializeDatePickers);
document.addEventListener('DOMContentLoaded', initializeSelects);
document.addEventListener('readystatechange', initializeDatePickers);

function initializeDatePickers() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
}

function initializeSelects() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
}

export { initializeDatePickers, initializeSelects };
