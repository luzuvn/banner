/**
 * script for each single page.
 *
 */
(function() {
    "use strict";
    //document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';


    $(document).ready(function() {
        var banner_728x90 = document.getElementById('luzu-banner-728x90');
        if (banner_728x90) {
            render_owl_carousel(function() {
                run_owl_carousel_728x90();
            });
        }
    });

	var product_link = [
        { img: 'mik-28ex', path: 'https://luzu.vn/quat-dieu-hoa-may-lam-mat-khong-khi-phong-30m2-35m2-apechome-mik-28ex-cs-150w-k7jxf1gk.html', title: 'Quạt điều hòa không khí cho phòng từ 30 - 35m2 Apechome MIK- 28EX CS 150W', sale: '26%', qt: 'lifecook-fc-ls18'},
        { img: 'mik-09ex', path: 'https://luzu.vn/quat-dieu-hoa-may-lam-mat-khong-khi-phong-15m2-20m2-masterkool-mik-09ex-cs-110w-k7jwj4mt.html', title: 'Quạt điều hòa không khí cho phòng từ 15 - 20m2 Masterkool MIK-09EX CS 110W', sale: '29%', qt: 'aph-20r' },
        { img: 'mik-800ex', path: 'https://luzu.vn/quat-may-lam-mat-khong-khi-cho-phong-40m2-apechome-mik-800ex-cs-190w-k7jvcjy4.html', title: 'Quạt điều hoà không khí cho phòng 40m2 Apechome MIK-800EX CS 190W', sale: '22%', qt: 'aph-10b' },
        { img: 'mik-06exs', path: 'https://luzu.vn/quat-may-lam-mat-khong-khi-cho-phong-15m2-apechome-mik-06exs-cs-64w-k7jytpkv.html', title: 'Quạt điều hoà không khí cho phòng 15m2 Apechome MIK-06EXS CS 64W', sale: '30%', qt: 'aph-666r' },
        { img: 'ecoco-e1705', path: 'https://luzu.vn/bo-dung-gia-vi-da-nang-ecoco-e1705-k7kp6l93.html', title: 'Bộ đựng gia vị đa năng Ecoco E1705', sale: '25%', qt: 'aph-st05s' },
        { img: 'ecoco-e1712', path: 'https://luzu.vn/ke-treo-do-phong-bep-da-nang-ecoco-e1712-k9b86m4n.html', title: 'Kệ treo đồ phòng bếp đa năng Ecoco E1712', sale: '49%', qt: '' },
        { img: 'ecoco-e1717', path: 'https://luzu.vn/gia-treo-gap-gon-ecoco-e1717-khong-khoan-tuong-k7l9ij3b.html', title: 'Giá treo gấp gọn Ecoco E1717, không khoan tường', sale: '49%', qt: '' },
        { img: 'ecoco-a1804', path: 'https://luzu.vn/bo-de-giay-ve-sinh-treo-tuong-da-nang-ecoco-a1804-k9b74quk.html', title: 'Bộ để giấy vệ sinh treo tường đa năng ECOCO A1804', sale: '49%', qt: '' },
        { img: 'ecoco-e1802', path: 'https://luzu.vn/bo-dung-cu-lay-kem-danh-rang-tu-dong-ecoco-e1802-k7k8z699.html', title: 'Bộ dụng cụ lấy kem đánh răng tự động Ecoco E1802', sale: '49%', qt: '' },
        { img: 'aph-20r', path: 'https://luzu.vn/may-xay-sinh-to-apechhome-aph-20r-k802gbr9.html', title: 'Máy Xay Sinh Tố Apechome APH-20R', sale: '25%', qt: 'aph-st05s' },
        { img: 'aph-15r', path: 'https://luzu.vn/may-xay-sinh-to-apechome-aph-15r-k8dus149.html', title: 'Máy Xay Sinh Tố Apechome APH-15R', sale: '20%', qt: 'ecoco-e1717' },
        { img: 'aph-61r', path: 'https://luzu.vn/may-xay-sinh-to-apechome-aph-61r-k8dv3uir.html', title: 'Máy Xay Sinh Tố Apechome APH-61R', sale: '20%', qt: 'aph-st05s' },
        { img: 'aph-1500p', path: 'https://luzu.vn/may-xay-sinh-to-apechome-aph-1500p-k8dzzxvh.html', title: 'Máy xay sinh tố Apechome APH-1500P', sale: '20%', qt: 'aph-444r' },
        { img: 'lifecook-fc-ls18', path: 'https://luzu.vn/noi-com-tach-duong-lifecook-fc-ls18-k7yg7l7w.html', title: 'Nồi cơm điện đa năng Apechome LifeCook FC-LS18', sale: '25%', qt: 'aph-20r' },
        { img: 'aph-10b', path: 'https://luzu.vn/noi-om-toi-den-aph-10b-k8fcipuc.html', title: 'Nồi om tỏi đen APH-10B', sale: '15%', qt: 'aph-15r' }

    ];

    var domain = window.location.host;
    var	domain_name = domain.split('.')[0];
    	if (!domain_name) {
    		domain_name = 'hv';
    	}
    var tracking_param = '?utm_source=' + domain_name + '&utm_medium=banner728x90&utm_campaign=thang456';

    function render_owl_carousel(callback) {
	    var owlluzu = document.getElementById('owl-luzu');
    	for (var i = 0; i < product_link.length; i++) {
    
    		var item = document.createElement('div');
    			item.classList.add('item');
    			var div = document.createElement('div');
    				div.classList.add('bn_product');
    				item.appendChild(div);
    				
    				var product_a = document.createElement('a');
    					product_a.setAttribute("href", product_link[i].path + tracking_param);
    					product_a.setAttribute("title", product_link[i].title);
    					div.appendChild(product_a);

	    				var product_img = document.createElement('img');
	    					product_img.setAttribute("src", "https://luzuvn.github.io/banner/img/" + product_link[i].img + ".png");
	    					product_a.appendChild(product_img);
	    			
	    			var product_sale = 	document.createElement('span');
	    				product_sale.classList.add('luzu_product_sale');
	    				product_sale.innerHTML = '-' + product_link[i].sale;
	    				item.appendChild(product_sale);

                    if (product_link[i].qt != '') {
                        var qt = document.createElement('div');
                            qt.classList.add('luzu_qt');
                            item.appendChild(qt);
                            var product_a1 = document.createElement('a');
                                product_a1.setAttribute("href", product_link[i].path + tracking_param);
                                product_a1.setAttribute("title", product_link[i].title);
                                qt.appendChild(product_a1);
                                var qt_img = document.createElement('img');
                                    qt_img.setAttribute("src", "https://luzuvn.github.io/banner/qua-tang/" + product_link[i].qt + ".png");
                                    product_a1.appendChild(qt_img);
                    }

    		owlluzu.appendChild(item);

            
    	}

    	callback();
    }
    function run_owl_carousel_728x90() {
    var owl = $("#owl-luzu-728x90");

	    owl.owlCarousel({
	        items: 10, //10 items above 1000px browser width
	        // lazyLoad : true,
	        itemsDesktop: [600, 6], //5 items between 600px and 451px
	        itemsDesktopSmall: [450, 4], // betweem 450px and 301px
	        itemsTablet: [300, 2], //2 items between 300 and 0
	        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	    });
	    owl.trigger('owl.play', 5000); //owl.play event accept autoPlay speed as second parameter

	    // Custom Navigation Events
	    $(".next").click(function() {
	        owl.trigger('owl.next');
	    })
	    $(".prev").click(function() {
	        owl.trigger('owl.prev');
	    })
	    $(".play").click(function() {
	        owl.trigger('owl.play', 5000); //owl.play event accept autoPlay speed as second parameter
	    })
	    $(".stop").click(function() {
	        owl.trigger('owl.stop');
	    })
    }

})();






















//--