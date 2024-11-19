document.addEventListener("DOMContentLoaded", function() {
	// Get the Span element
	const dateSpanEl = document.getElementById('date');
    // Get the current year
	const currentYear = new Date().getFullYear();
    dateSpanEl.textContent = currentYear;
});
