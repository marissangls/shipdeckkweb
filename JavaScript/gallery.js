document.addEventListener('DOMContentLoaded', function () {
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            paginationBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    function applyFilter(filterValue) {
        filterBtns.forEach(b => b.classList.remove('active'));

        filterBtns.forEach(btn => {
            if (btn.getAttribute('data-filter') === filterValue) {
                btn.classList.add('active');
            }
        });

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        applyFilter(filterParam);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            applyFilter(filterValue);

            const url = new URL(window.location);
            if (filterValue === 'all') {
                url.searchParams.delete('filter');
            } else {
                url.searchParams.set('filter', filterValue);
            }
            window.history.pushState({}, '', url);
        });
    });
});