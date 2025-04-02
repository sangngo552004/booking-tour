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

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.thumbnail-track');
    const images = document.querySelectorAll('.thumbnail-track img');
    const mainImage = document.getElementById('main-image');
    const totalImages = images.length;

    let autoSlideInterval;
    let currentIndex = 0;

    function updateMainImage(index) {
        mainImage.src = images[index].src;
        highlightCurrentImage(index);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateMainImage(currentIndex);
    }

    function startAutoSlide(interval = 5000) {
        autoSlideInterval = setInterval(nextSlide, interval);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function highlightCurrentImage(index) {
        // Xóa class 'active' khỏi tất cả các ảnh
        images.forEach(img => img.classList.remove('active'));

        // Thêm class 'active' cho ảnh hiện tại
        images[index].classList.add('active');
    }

    // Xử lý click thumbnail
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage(currentIndex);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    updateMainImage(0);
    startAutoSlide();
});

document.addEventListener('DOMContentLoaded', function() {
    const adultQuantityInput = document.getElementById('adult-quantity');
    const childQuantityInput = document.getElementById('child-quantity');
    const infantQuantityInput = document.getElementById('infant-quantity');
    const totalPriceSpan = document.getElementById('total-price');
    const adultPriceSpan = document.getElementById('adult-price');
    const scheduleSelect = document.getElementById('schedule-select');
    const quantityButtons = document.querySelectorAll('.quantity-btn');

    let adultQuantity = parseInt(adultQuantityInput.value);
    let childQuantity = parseInt(childQuantityInput.value);
    let infantQuantity = parseInt(infantQuantityInput.value);
    let adultPrice = parseInt(adultPriceSpan.textContent.replace(/\D/g, ''));

    function updateTotalPrice() {
        const totalPrice = (adultQuantity * adultPrice) + (childQuantity * (adultPrice * 0.7)) ;
        totalPriceSpan.textContent = totalPrice.toLocaleString('vi-VN') + ' đ';
    }

    quantityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            const isPlus = this.textContent === '+';

            if (type === 'adult') {
                adultQuantity = isPlus ? adultQuantity + 1 : Math.max(adultQuantity - 1, 0);
                adultQuantityInput.value = adultQuantity;
            } else if (type === 'child') {
                childQuantity = isPlus ? childQuantity + 1 : Math.max(childQuantity - 1, 0);
                childQuantityInput.value = childQuantity;
            } else if (type === 'infant') {
                infantQuantity = isPlus ? infantQuantity + 1 : Math.max(infantQuantity - 1, 0);
                infantQuantityInput.value = infantQuantity;
            }

            updateTotalPrice();
        });
    });
    scheduleSelect.addEventListener('change', function() {
        adultPrice = parseInt(this.value);
        adultPriceSpan.textContent = adultPrice.toLocaleString('vi-VN') + ' đ';
        updateTotalPrice();
    });

    updateTotalPrice();
});


document.querySelectorAll('.day-header').forEach(header => {
    header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '▼';
        } else {
            content.style.display = 'block';
            icon.textContent = '▲';
        }
    });
});

const buttonViewAll = document.querySelector(".view-all");

buttonViewAll.addEventListener("click", function() {
    const name = buttonViewAll.textContent 
    
    if (name == "Xem tất cả") {
        buttonViewAll.textContent = "Thu gọn"
        document.querySelectorAll('.day-header').forEach(header => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.toggle-icon');
            content.style.display = 'block';
            icon.textContent = '▲';
        }); 
    }else{
        buttonViewAll.textContent = "Xem tất cả"
        document.querySelectorAll('.day-header').forEach(header => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.toggle-icon');
            content.style.display = 'none';
            icon.textContent = '▼';
        }); 
    }
    
});


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Xóa class active khỏi tất cả các tab
            tabs.forEach(t => t.classList.remove('active'));
            // Thêm class active cho tab được click
            tab.classList.add('active');

            // Ẩn tất cả nội dung tab
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Hiển thị nội dung của tab được click
            const tabId = tab.getAttribute('data-tab');
            const contentToShow = document.getElementById(tabId);
            if (contentToShow) {
                contentToShow.style.display = 'block';
            }
        });
    });
});
