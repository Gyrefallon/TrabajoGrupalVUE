export class Products {
  static products = [
    {
      "id": 1,
      "nombre": "PLACA MADRE MSI MPG Z590 GAMING FORCE",
      "descripcion": "SOCKET LGA1200, ATX (911-7D06-21).  La placa madre MSI MPG Z590 Gaming Force es una placa madre ATX diseñada para procesadores Intel de décima y undécima generación. La placa madre utiliza el chipset Intel Z590 y admite hasta 128 GB de memoria DDR4 con velocidades de hasta 5600 MHz.",
      "precio": "189990",
      "stock": "30",
      "etiqueta": "MSI PLACA MADRE",
      "imagen": "https://falabella.scene7.com/is/image/Falabella/gsc_114245689_945294_1?wid=800&hei=800&qlt=70" 
    },
    {
			"id": 2,
			"nombre": "GABINETE MID TOWER ATX 6000B",
			"descripcion": "STORM H FAN BLACK (CSAZ-6000B). Está diseñado para alojar placas base ATX. Por lo general, admite varias unidades de almacenamiento, como unidades de disco duro y unidades SSD, y puede tener varias bahías de unidad de 3,5 pulgadas y 2,5 pulgadas.",
			"precio": "89990",
			"stock": "40",
			"etiqueta": "GABINETE",
			"imagen": "https://www.wei.cl/images/products/5FD291437Fg.jpg" 
    },
		{
      "id": 3,
      "nombre": "TABLETA DIGITALIZADORA WACOM ONE 13 CREATIVE",
      "descripcion": "tableta gráfica de alta calidad diseñada para artistas digitales, diseñadores y cualquier persona que busque una experiencia de dibujo natural y fluida.",
      "precio": "374990",
      "stock": "45",
      "etiqueta": "tablet wacom 13",
      "imagen": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTB3010K3wo7vRJf4jIR0CBGJ4q7BqHJ8nW5Ybcw5ZRyizjrexcb01LkXp_WEDpPNUC5Rdm3JYkh477HNjMq8A-3eMH5UHO7g" 
    },
		{
      "id": 4,
      "nombre": "APPLE MACBOOK PRO DE 15,4",
      "descripcion": "Está disponible en dos configuraciones de procesador: Intel Core i7 de seis núcleos y 2,6 GHz, o Intel Core i9 de ocho núcleos y 2,3 GHz. También tiene una tarjeta gráfica AMD Radeon Pro 5300M o 5500M con hasta 8 GB de memoria GDDR6",
      "precio": "799000",
      "stock": "35",
      "etiqueta": "apple ipad",
      "imagen": "https://falabella.scene7.com/is/image/Falabella/16110021_2?wid=800&hei=800&qlt=70" 
    },
		{
			"id": 5,
			"nombre": "OCULUS QUEST REALIDAD VIRTUAL",
			"descripcion": "HEADSET 128 GB (899-00182-02). Cuenta con una pantalla de 1832 x 1920 píxeles por ojo, una tasa de refresco de 90 Hz, y una resolución total de 3664 x 1920 píxeles",
			"precio": "460990",
			"stock": "50",
			"etiqueta": "RV oculus",
			"imagen": "https://cdn.shopify.com/s/files/1/0448/8921/1040/products/oculus-quest-2-lentes-de-realidad-virtual_360x.jpg?v=1672242009" 
    },
		{
      "id": 6,
      "nombre": "TARJETA DE VIDEO MSI GEFORCE GTX 1630 VENTUS",
      "descripcion": "XS 4GB OC. La GeForce GTX 1630 Ventus cuenta con 4 GB de memoria GDDR5 y un reloj base de 1188 MHz que puede aumentar hasta 1785 MHz en modo boost para ofrecer un rendimiento rápido y fluido en juegos y aplicaciones de gráficos. La tarjeta también tiene una velocidad de reloj de memoria de 8 Gbps.",
      "precio": "172990",
      "stock": "35",
      "etiqueta": "MSI tarjeta de video",
      "imagen": "https://www.wei.cl/images/products/63B73WDW96g.jpg" 
    },
		{
      "id": 7,
      "nombre": "SILLA GAMER ARMOR PRO ORANGE 3MARMPRO.0001",
      "descripcion": "La silla gamer Armor Pro Orange es una silla de juego de alta calidad que ofrece comodidad y soporte para largas sesiones de juego. La silla está diseñada para jugadores que buscan una silla cómoda y duradera con características adicionales para una experiencia de juego más agradable.",
      "precio": "189990",
      "stock": "25",
      "etiqueta": "SILLA GAMER",
      "imagen": "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dwfb851d98/images/imagenes-productos/800/MKC8/MKC8YDK0JH-001.png?sw=513&sh=654&sm=fit" 
    },
		{
      "id": 8,
      "nombre": "ALL IN ONE HP PROONE 205 G8 DE 23.8",
      "descripcion": "RYZEN 3 PRO 5300U, 8GB RAM, 512GB SSD, WIN 11 HOME",
      "precio": "759990",
      "stock": "30",
      "etiqueta": "HP ALL IN ONE",
      "imagen": "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw322598a5/images/imagenes-productos/800/MK9F/MK9FB3NEC8-001.png?sw=513&sh=654&sm=fit" 
    },
    {
      "id": 8,
      "nombre": "UNIDAD DE ESTADO SOLIDO WD GREEN 1 TB",
      "descripcion": "SN350 NVME GEN3 PCIE. La unidad de estado sólido WD Green es una unidad de almacenamiento SSD de gama media de Western Digital diseñada para mejorar el rendimiento y la velocidad de los sistemas informáticos. La unidad está disponible en varias capacidades de almacenamiento, desde 120 GB",
      "precio": "55990",
      "stock": "35",
      "etiqueta": "WD UNIDAD DE ESTADO SOLIDO",
      "imagen": "https://www.wei.cl/images/products/632C84116Bg.jpg" 
    }
  ];

    static getAllProducts() {
    return this.products;
  }

}