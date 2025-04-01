window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar.home');
    let filterBox = document.querySelector(".filter-box");
    if (window.scrollY > 50) { /* Khi cuộn quá 50px */
        navbar.classList.add('scrolled');
        filterBox.classList.add("show");
    } else {
        navbar.classList.remove('scrolled');
        filterBox.classList.remove("show");
    }
});



console.log("helo ")
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            
            // Xóa class active của tất cả các sao
            stars.forEach(s => s.classList.remove('active'));
            
            // Thêm class active cho các sao từ 1 đến sao được chọn
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('active');
            }
        });
    });

    // Xử lý sự kiện cho nút Clear Filter
    const clearFilterBtn = document.querySelector('.clear-filter');
    clearFilterBtn.addEventListener('click', () => {
        const keywordsInput = document.querySelector('#searchInput');
        if (keywordsInput) keywordsInput.value = '';

        // Bỏ chọn tất cả các checkbox trong Tag
        const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Đặt lại Duration về giá trị mặc định ("Any")
        const durationSelect = document.querySelector('#duration');
        if (durationSelect) durationSelect.value = 'Any';

        // Xóa giá trị trong ô Min Price và Max Price
        const minPriceInput = document.querySelector('#min-price');
        const maxPriceInput = document.querySelector('#max-price');
        if (minPriceInput) minPriceInput.value = '';
        if (maxPriceInput) maxPriceInput.value = '';

        // Đặt lại Rating về trạng thái ban đầu (không sao nào được chọn)
        stars.forEach(star => star.classList.remove('active'));
    });
});

