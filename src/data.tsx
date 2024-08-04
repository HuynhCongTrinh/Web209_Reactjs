interface ProductType {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  price: number;
  description: string;
  quantity: number;
  isChecked: boolean;
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "GIÀY ĐÁ BÓNG FIRM/MULTI-GROUND F50 LEAGUES",
    href: "/ProductDetails/1",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98cf118862a54bf9bb31972eaf218c54_9366/GIAY_DJA_BONG_FG_PREDATOR_ACCURACY.1_L_Mau_xanh_da_troi_GZ0031_HM1.jpg",
    imageAlt: "THIẾT KẾ CHO TỐC ĐỘ Với thiết kế dành cho những cầu thủ nhanh nhất, adidas F50 là mấu chốt để khai phá tiềm năng tốc độ tối đa của bạn.",
    price: 2400000,
    description: "GIẢI PHÓNG TỐC ĐỘ Chúng tôi đã thiết kế ra dòng giày adidas F50 League với đế ngoài SPRINTPLATE 360 cho độ linh hoạt và chuyển động theo mọi hướng. Thân giày sử dụng công nghệ FIBERSKIN cho cảm giác nâng đỡ và êm ái. Cuối cùng, LƯỠI GÀ TUNNEL của chúng tôi tăng cường độ ôm chân khi di chuyển.",
    quantity:0,
    isChecked: false
  },
  {
    id: 2,
    name: "GIÀY ĐÁ BÓNG FIRM GROUND PREDATOR ELITE",
    href: "/ProductDetails/2",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d915da512cd345d3b5630b727a054f79_9366/Giay_X_Crazyfast_Elite_FG_Mau_vang_IE2376_HM1.jpg",
    imageAlt: "VỚI THIẾT KẾ CHÚ TRỌNG TỐC ĐỘ, GIÀY X CRAZYFAST ĐƯỢC TRANG BỊ CÔNG NGHỆ VÀ CÁC ĐẶC ĐIỂM KỸ THUẬT MÀ CÁC CẦU THỦ ÁT CHỦ BÀI SẼ PHẢI GHEN TỊ. BẠN THỰC SỰ CẦN SẴN SÀNG ĐƯƠNG ĐẦU VỚI TỐC ĐỘ CHÓNG MẶT SẮP CHỨNG KIẾN.",
    price: 4800000,
    description: "Công nghệ AEROCAGE siêu nhẹ tạo độ ổn định trong những chuyển động nhanh nhất. Nhằm mang đến sự thoải mái khi chạy bộ với cảm giác bóng tối ưu, vải lưới nhiều lớp cho độ ôm thích ứng và nâng đỡ. Đế ngoài sử dụng công nghệ AEROPLATE, được thiết kế đặc biệt cho lực đẩy và chuyển động linh hoạt, cùng thiết kế đinh tán giúp tối ưu độ bám khi tăng tốc. Giày X Crazyfast được tinh chỉnh để đáp ứng nhu cầu của các cầu thủ nhanh nhất.",
    quantity:0,
    isChecked: false
  },
  {
    id: 3,
    name: "GIÀY ĐÁ BÓNG FIRM GROUND PREDATOR ELITE",
    href: "/ProductDetails/3",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b9f186318804b37bc689379f2a7b096_9366/Giay_DJa_Bong_Firm_Ground_Khong_Day_Predator_Elite_DJen_IE1805_HM1.jpg",
    imageAlt: "Làm chủ sức mạnh, xoáy bóng và kiểm soát bóng trong nhiều thập kỷ. Giày Predator vừa trở nên sắc sảo hơn. Được thiết kế cho một điều: mục tiêu, giày Predator đã sẵn sàng để ghi điểm tuyệt đối.",
    price: 5800000,
    description: "Tương lai của ghi bàn là các chi tiết bằng vây cao su STRIKESKIN tân tiến cho độ chính xác khi sút bóng từ mọi cự ly và khung CONTROLFRAME 2.0 siêu nhẹ cho độ ổn định. Với sự bổ sung của thân giày HYBRIDTouch 2.0 đúc và cổ giày PRIMEKNIT không dây cho những cú sút gọn gàng nhất, hãy sẵn sàng bước vào kỷ nguyên mới của những pha dứt điểm.",
    quantity:0,
    isChecked: false
  },
  {
    id: 4,
    name: "GIÀY ĐÁ BÓNG FIRM GROUND PREDATOR ELITE",
    href: "/ProductDetails/4",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/03c466baa0d64f208f4f3b9ba3bbf228_9366/Giay_DJa_Bong_Firm_Ground_Low_Predator_Accuracy.1_DJen_GW4575_HM1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 60000000,
    description: "GIÀY ĐÁ BÓNG FIRM/MULTI-GROUND F50 LEAGUES",
    quantity:0,
    isChecked: false
  },
  // {
  //   id: 5,
  //   name: "ÁO ĐẤU SÂN NHÀ AUTHENTIC MANCHESTER UNITED 24/25",
  //   href: "/ProductDetails/5",
  //   imageSrc:
  //     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08f8a166436a41898e509b393a506e24_9366/Ao_DJau_San_Nha_Authentic_Manchester_United_24-25_DJo_JF1291_HM1.jpg",
  //   imageAlt: "ÁO ĐẤU SÂN NHÀ MAN UTD 24/25 ",
  //   price: "3.000.000đ",
  //   color: "Black",
  //   description: "Với hiệu ứng chuyển màu đỏ tinh tế cùng các mảng phối màu tươi tắn và huy hiệu đầy màu sắc truyền thống, chiếc áo đấu sân nhà Man Utd 24/25 mới này được thiết kế để giúp bạn tự tin bước vào đường hầm và toả sáng trên sân cỏ.",
  // },
 
];

