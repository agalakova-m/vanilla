// Accordion script

document.addEventListener('click', function (e) {
  // only for accordion-toggle elements
  if (!e.target.classList.contains('accordion-toggle')) return;

  // get the content
  var content = document.querySelector(e.target.hash);
  if (!content) return;

  // prevent default link behavior
  e.preventDefault();

  // if content is already open, close it and bail
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }

  // get all active content areas and hide them
  var active = Array.prototype.slice.call(
    document.querySelectorAll('.accordion-content.active'),
  );
  active.forEach(function (content) {
    content.classList.remove('active');
  });

  // toggle visibility
  content.classList.toggle('active');
});
