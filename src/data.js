const data = [
    {
        "id":1,
        "title":"Laptop",
        "price":20499 ,
        "url":"https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/HUMA/kucuk-resimler-2/thumb/huma-h4-v4.1-resim-1_medium.png",
        "name":"Huma H4 V4.14,1 İş Bilgisayarı",
        "type":"Computer"
    },
    {
        "id":2,
        "title":"Laptop",
        "price":22899 ,
        "url":"https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/ABRA/A5-V17-2/thumb/TR%20Abra%20A5%20v16%20-%20nh58%20-%20Windows_medium.png",
        "name":"Abra A5 V17.2.1 15,6 Gaming Laptop",
        "type":"Computer"
    },
    {
        "id":3,
        "title":"Laptop",
        "price":25899 ,
        "url":"https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/HUMA/h5%20v3/thumb/TR%20HumaH5%20v3.1%20-%20Windows_medium.png",
        "name":"Huma H5 V3.1.1 15,6 Gaming Laptop",
        "type":"Computer"
    },
    {
        "id":4,
        "title":"Laptop",
        "price":25899 ,
        "url":"https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/t7-v20.5-resimler/thumb/windows_medium.png",
        "name":"Tulpar T7 V20.5.1 17,3 Gaming Laptop",
        "type":"Computer"
    },
    {
        "id":5,
        "title":"Laptop",
        "price":25899 ,
        "url":"https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/HUMA/h5%20v3/thumb/TR%20HumaH5%20v3.1%20-%20Windows_medium.png",
        "name":"Huma H5 V3.2.1 15,6 Gaming Laptop",
        "type":"Computer"
    },
    {
        "id":6,
        "title":"Buzdolabı",
        "price":11599 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_82452022/fee_325_225_png/ALTUS-ALK-471-X-E-Enerji-S%C4%B1n%C4%B1f%C4%B1-514L-Buzdolab%C4%B1-Beyaz",
        "name":"ALTUS ALK 471 X E Enerji Sınıfı 514L Buzdolabı Beyaz",
        "type":"Electronic"
    },
    {
        "id":7,
        "title":"Bulaşık Makinesi",
        "price":25899 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93161816/fee_325_225_png/ALTUS-AL-404-MP-4-Programl%C4%B1-Bula%C5%9F%C4%B1k-Makinesi-Beyaz",
        "name":"ALTUS AL 404 MP 4 Programlı Bulaşık Makinesi Beyaz",
        "type":"Electronic"
    },
    {
        "id":8,
        "title":"Bulaşık Makinesi",
        "price":25899 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_84286287/fee_325_225_png/VESTEL-BM-3111-E-Enerji-S%C4%B1n%C4%B1f%C4%B1-3-Programl%C4%B1-13-Ki%C5%9Filik-Bula%C5%9F%C4%B1k-Makinesi-Beyaz",
        "name":"VESTEL BM 3111 E Enerji Sınıfı 3 Programlı 13 Kişilik Bulaşık Makinesi Beyaz",
        "type":"Electronic"
    },
    {
        "id":9,
        "title":"Fırın",
        "price":3799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-75142427/fee_325_225_png/ALTUS-ALA137B-71-lt-F%C4%B1r%C4%B1n-Siyah",
        "name":"ALTUS ALA137B 71 lt Fırın Siyah",
        "type":"Electronic"
    },
    {
        "id":10,
        "title":"ÇAmaşır&Kurutma Makinesi",
        "price":4899 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93380179/fee_325_225_png/HOOVER-HLE-C10DG-17-10-Kg-NFC-Ba%C4%9Flant%C4%B1l%C4%B1-Kurutma-Makinesi-Beyaz",
        "name":"HOOVER HLE C10DG-17 10 Kg NFC Bağlantılı Kurutma Makinesi Beyaz",
        "type":"Electronic",
    },
    {
        "id":11,
        "title":"Bulaşık Makinesi",
        "price":9899 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ms-shop-mmtr-l123801/wcs_overlay_prod_detail",
        "name":"GRUNDIG GDH 92 A++ Enerji Sınıfı 9Kg Isı Pompalı Kurutma Makinesi",
        "type":"Electronic"
    },
    {
        "id":12,
        "title":"Hoparlör",
        "price":599 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-78017548/fee_325_225_png/JBL-Go-2-Bluetooth-Hoparl%C3%B6r-K%C4%B1rm%C4%B1z%C4%B1",
        "name":"GJBL Go 2 Bluetooth Hoparlör Kırmızı",
        "type":"Accesssory"
    },
    {
        "id":13,
        "title":"Hoparlör",
        "price":899 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_82727816/fee_325_225_png/JBL-Clip-4-Bluetooth-Hoparl%C3%B6r-Turkuaz",
        "name":"JBL Clip 4 Bluetooth Hoparlör Turkuaz",
        "type":"Accesssory"
    },
    {
        "id":14,
        "title":"Şarj Aleti",
        "price":399 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93712790/fee_325_225_png/SAMSUNG-EP-TA800N-TypeC-25W-Kablosuz-H%C4%B1zl%C4%B1-%C5%9Earj-Adapt%C3%B6r%C3%BC-Beyaz",
        "name":"SAMSUNG EP-TA800N TypeC 25W Kablosuz Hızlı Şarj Adaptörü Beyaz",
        "type":"Accesssory"
    },
    {
        "id":15,
        "title":"Şarj Aleti",
        "price":9899 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93235291/fee_325_225_png/SAMSUNG-Samsung-EP-P1300T-Single-Pad-Kablosuz-H%C4%B1zl%C4%B1-%C5%9Earj-Cihaz%C4%B1-Beyaz",
        "name":"SAMSUNG Samsung EP-P1300T Single Pad Kablosuz Hızlı Şarj Cihazı Beyaz",
        "type":"Accesssory"
    },
    {
        "id":16,
        "title":"Laptop Soğutucu",
        "price":199 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ms-shop-mmtr-l123801/wcs_overlay_prod_detail",
        "name":"FRISBY FNC 37ST Laptop Soğutucu",
        "type":"Electronic"
    },
    {
        "id":17,
        "title":"Iphone",
        "price":15799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_79133333/fee_325_225_png/APPLE-iPhone-11-64GB-Ak%C4%B1ll%C4%B1-Telefon-Siyah",
        "name":"APPLE iPhone 11 64GB Akıllı Telefon Siyah",
        "type":"Phone"
    },
    {
        "id":17,
        "title":"Iphone",
        "price":15799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_79133333/fee_325_225_png/APPLE-iPhone-11-64GB-Ak%C4%B1ll%C4%B1-Telefon-Siyah",
        "name":"APPLE iPhone 11 64GB Akıllı Telefon Siyah",
        "type":"Phone"
    },
    {
        "id":18,
        "title":"Iphone",
        "price":17799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89722915/fee_325_225_png/APPLE-iPhone-11-128GB-Ak%C4%B1ll%C4%B1-Telefon-Siyah",
        "name":"APPLE iPhone 11 128GB Akıllı Telefon Siyah",
        "type":"Phone"
    },
    {
        "id":19,
        "title":"SAMSUNG",
        "price":5299 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97962777/fee_325_225_png/SAMSUNG-Galaxy-A04S-128GB-Ak%C4%B1ll%C4%B1-Telefon-Siyah",
        "name":"SAMSUNG Galaxy A04S 128GB Akıllı Telefon Siyah",
        "type":"Phone"
    },
    {
        "id":20,
        "title":"SAMSUNG",
        "price":12799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93267503/fee_325_225_png/SAMSUNG-Galaxy-A73-128-GB-Ak%C4%B1ll%C4%B1-Telefon-Gri",
        "name":"SAMSUNG Galaxy A73 128 GB Akıllı Telefon Gri",
        "type":"Phone"
    },
    {
        "id":21,
        "title":"OPPO",
        "price":4799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87487429/fee_325_225_png/OPPO-A16-64-GB-Ak%C4%B1ll%C4%B1-Telefon-%C4%B0nci-Mavisih",
        "name":"OPPO A16 64 GB Akıllı Telefon İnci Mavisi",
        "type":"Phone"
    },
    {
        "id":22,
        "title":"OPPO",
        "price":15799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94890478/fee_325_225_png/OPPO-A55-128-GB-Ak%C4%B1ll%C4%B1-Telefon-I%C5%9F%C4%B1lt%C4%B1l%C4%B1-Siyah",
        "name":"OPPO A55 128 GB Akıllı Telefon Işıltılı Siyah",
        "type":"Phone"
    },
    {
        "id":23,
        "title":"XIAOMI",
        "price":15799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_98290290/fee_325_225_png/XIAOMI-Redmi-Note-11-6GB-128GB-Gece-Mavisi-Ak%C4%B1ll%C4%B1-Telefon",
        "name":"XIAOMI Redmi Note 11 6GB/128GB Gece Mavisi Akıllı Telefon",
        "type":"Phone"
    },
    {
        "id":24,
        "title":"ALCATEL",
        "price":1799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_95972421/fee_325_225_png/ALCATEL-2020X-Tu%C5%9Flu-Telefon-Gri",
        "name":"ALCATEL 2020X Tuşlu Telefon Gri",
        "type":"Phone"
    },
    {
        "id":25,
        "title":"SAMSUNG",
        "price":24799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_96433710/fee_325_225_png/SAMSUNG-Galaxy-Z-Flip-4-128GB-Ak%C4%B1ll%C4%B1-Telefon-Mavi",
        "name":"SAMSUNG Galaxy Z Flip 4 128GB Akıllı Telefon Mavi",
        "type":"Phone"
    },
    {
        "id":26,
        "title":"TECNO",
        "price":4799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_96540024/fee_325_225_png/TECNO-Pova-Neo-64GB-Ak%C4%B1ll%C4%B1-Telefon-Parlak-Mavi",
        "name":"TECNO Pova Neo 64GB Akıllı Telefon Parlak Mavi",
        "type":"Phone"
    },
    {
        "id":27,
        "title":"SAMSUNG",
        "price":15799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86567545/fee_325_225_png/SAMSUNG-Galaxy-Z-Fold-3-256GB-Ak%C4%B1ll%C4%B1-Telefon-G%C3%BCm%C3%BC%C5%9F",
        "name":"SAMSUNG Galaxy Z Fold 3 256GB Akıllı Telefon Gümüş",
        "type":"Phone"
    },
    {
        "id":28,
        "title":"CASPER",
        "price":4799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_96279744/fee_325_225_png/CASPER-Via-E30-Plus-128GB-Ak%C4%B1ll%C4%B1-Telefon-Mavi",
        "name":"CASPER Via E30 Plus 128GB Akıllı Telefon Mavi",
        "type":"Phone"
    },
    {
        "id":29,
        "title":"VIVO",
        "price":4799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88764350/fee_325_225_png/VIVO-Y21S-128GB-Ak%C4%B1ll%C4%B1-Telefon-G%C3%BCn-Ortas%C4%B1-Mavisi",
        "name":"VIVO Y21S 128GB Akıllı Telefon Gün Ortası Mavisi",
        "type":"Phone"
    },
    {
        "id":30,
        "title":"REALME",
        "price":4799 ,
        "url":"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91588853/fee_325_225_png/REALME-C25Y-128GB-Ak%C4%B1ll%C4%B1-Telefon-Buzul-Mavisi",
        "name":"REALME C25Y 128GB Akıllı Telefon Buzul Mavisi",
        "type":"Phone"
    },
];
export default data;