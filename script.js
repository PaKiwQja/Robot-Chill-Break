// ฟังก์ชันที่ใช้ในการอัพเดตรูปภาพตามรสชาติที่เลือก
function updateImage() {
    const category = document.getElementById('category').value;
    const productImage = document.getElementById('product-image');
    const productImageContainer = document.getElementById('product-image-container');

    // ซ่อนรูปสินค้าทุกครั้งที่ไม่มีการเลือก
    productImageContainer.style.display = 'none';

    if (category) {
        let imageUrl = '';
        
        // กำหนด URL รูปภาพตามรสชาติที่เลือก
        switch (category) {
            case 'ช็อคโกเเล็ต':
                imageUrl = 'images/Chocolate.jpg';
                break;
            case 'สตอเบอร์รี่':
                imageUrl = 'images/Strawberry.jpg';
                break;
            case 'บลูเบอร์รี่':
                imageUrl = 'images/Blueberry.jpg';
                break;
            case 'ส้ม':
                imageUrl = 'images/Orange.jpg';
                break;
        }

        // แสดงรูปสินค้า
        productImage.src = imageUrl;
        productImageContainer.style.display = 'block';

        // แสดงข้อความรสชาติที่เลือก
        document.getElementById('flavor-text').textContent = `รสชาติที่เลือก : ${category}`;
    }
}

// ฟังก์ชันอัพเดตเวลาจัดส่ง
function updateDeliveryTime() {
    const deliveryTime = document.getElementById('delivery-time').value;
    if (deliveryTime) {
        document.getElementById('delivery-text').textContent = `เวลาจัดส่ง : ${deliveryTime} น.`;
    }
}

// ฟังก์ชันที่ใช้ในการอัพเดตตัวเลือกชั้น
function updateFloors() {
    const building = document.getElementById('building').value;
    const floorContainer = document.getElementById('floor-container');
    const floorSelect = document.getElementById('floor');

    // ซ่อนและล้างตัวเลือกชั้น
    floorContainer.style.display = 'none';
    floorSelect.innerHTML = '';

    if (building) {
        floorContainer.style.display = 'block';

        // สร้างตัวเลือกชั้นตามตึกที่เลือก
        const floorCount = (building === 'SBB') ? 11 : (building === 'ACC') ? 4 : 0;

        for (let i = 1; i <= floorCount; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `ชั้นที่ ${i}`;
            floorSelect.appendChild(option);
        }

        // แสดงข้อความตึกที่เลือก
        document.getElementById('building-text').textContent = `ตึกที่เลือก : ${building}`;
    }
}

// ฟังก์ชันที่ใช้ในการแสดงชั้นที่เลือก
function updateFloorText() {
    const floor = document.getElementById('floor').value;
    if (floor) {
        document.getElementById('floor-text').textContent = `ชั้นที่เลือก : ชั้นที่ ${floor}`;
    }
}

// ฟังก์ชันที่ใช้ในการเปลี่ยนจำนวนขนม
function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityInput.value);

    currentQuantity += amount;
    if (currentQuantity < 1) {
        currentQuantity = 1;
    }

    quantityInput.value = currentQuantity;

    // แสดงจำนวนขนมที่เลือก
    document.getElementById('quantity-text').textContent = `จำนวนขนมที่เลือก : ${currentQuantity}`;
}

// ฟังก์ชันที่แสดงหน้าแสดงการชำระเงิน
function goToPayment() {
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryTime = document.getElementById('delivery-time').value;
    const building = document.getElementById('building').value;
    const floor = document.getElementById('floor').value;

    const productPrice = 25; // ราคาสินค้าต่อชิ้น
    const totalPrice = productPrice * quantity; // คำนวณราคา

    // แสดงข้อมูลที่กรอกในหน้าแรกในหน้าแสดงการชำระเงิน
    document.getElementById('flavor-text').textContent = `รสชาติที่เลือก : ${category}`;
    document.getElementById('quantity-text').textContent = `จำนวนขนมที่เลือก : ${quantity}`;
    document.getElementById('delivery-text').textContent = `เวลาจัดส่ง : ${deliveryTime} น.`;
    document.getElementById('building-text').textContent = `ตึกที่เลือก : ${building}`;
    document.getElementById('floor-text').textContent = `ชั้นที่เลือก : ชั้นที่ ${floor}`;
    document.getElementById('price-text').textContent = `ราคารวม : ${totalPrice} บาท`;

    // ซ่อนหน้าแรกและแสดงหน้าแสดงการชำระเงิน
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('payment-page').style.display = 'block';
}

// ฟังก์ชันที่ยืนยันการชำระเงิน
function confirmPayment() {
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryTime = document.getElementById('delivery-time').value;
    const building = document.getElementById('building').value;
    const floor = document.getElementById('floor').value;

    const productPrice = 25; // ราคาสินค้าต่อชิ้น
    const totalPrice = productPrice * quantity; // คำนวณราคา

    // แสดงข้อมูลในหน้าใบเสร็จ
    document.getElementById('receipt-flavor-text').textContent = `รสชาติที่เลือก: ${category}`;
    document.getElementById('receipt-quantity-text').textContent = `จำนวนขนมที่เลือก: ${quantity}`;
    document.getElementById('receipt-delivery-text').textContent = `เวลาจัดส่ง: ${deliveryTime} น.`;
    document.getElementById('receipt-building-text').textContent = `ตึกที่เลือก: ${building}`;
    document.getElementById('receipt-floor-text').textContent = `ชั้นที่เลือก: ชั้นที่ ${floor}`;
    document.getElementById('receipt-price-text').textContent = `ราคารวม: ${totalPrice} บาท`;

    // ซ่อนหน้าแสดงข้อมูลการชำระเงินและแสดงหน้าใบเสร็จ
    document.getElementById('payment-page').style.display = 'none';
    document.getElementById('receipt-page').style.display = 'block';
}

// ฟังก์ชันกลับสู่หน้าหลัก
function backToHomePage() {
    // ซ่อนหน้าใบเสร็จและแสดงหน้าแรก
    document.getElementById('receipt-page').style.display = 'none';
    document.getElementById('order-form').style.display = 'block';
}
