// const nhanqua = document.getElementById('nhan-qua');

// nhanqua.addEventListener('click', function() {
//     console.log('oke đấy');
//     // Generate random positions within the window
//     const randomX = Math.floor(Math.random() * (window.innerWidth - nhanqua.offsetWidth));
//     const randomY = Math.floor(Math.random() * (window.innerHeight - nhanqua.offsetHeight));
  
//     // Update button position using styles
//     nhanqua.style.left = `${randomX}px`;
//     nhanqua.style.top = `${randomY}px`;
// });
document.addEventListener('DOMContentLoaded', function() {
    const nhanqua = document.getElementById('nhan-qua');
    const danhsach = ['Đây cơ mà' ,'Quà của bé đây','Ủa Không Nhận Quà Hỏo', 'Nhận quà ở đây nè' ,'Bấm nhận đi màa', 'Quà Đây nhaa Anh thề']
    let dem =0;
    nhanqua.addEventListener('click', function() {
        console.log('Clicked!');
        // Generate random positions within the window
        let randomX = Math.floor(Math.random() * (window.innerWidth - nhanqua.offsetWidth));
        let randomY = Math.floor(Math.random() * (window.innerHeight - nhanqua.offsetHeight));
        console.log(randomX);
        console.log(randomY);
        if(randomY >450){
            randomY = 350;
        }
        // Update button position using styles
        nhanqua.style.left = `${randomX}px`;
        nhanqua.style.top = `${randomY}px`;
        let randomIndex = Math.floor(Math.random() * danhsach.length);
        
        let text = danhsach[randomIndex];
        if(dem == 5){
            window.open("https://www.facebook.com/VuongDuc204/", '_blank');
         }
        nhanqua.textContent = text;
        dem++;
        

    });
});

