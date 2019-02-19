import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    id:1,
    Title:'Cope Addition I',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca1/ca1bg.jpg',
    Color:'#29AAE3',
    BannerText:'All lots sold 2017',
    ButtonText:'Details',
    ButtonLink:'/assets/blacklines/ca1/ca1blackline.JPG',
    LargeDefault:'<img class=\'large-image\' src=\'/assets/images/ca1/ca1bg.jpg\' alt=\'ca1\'>',
    DefaultImage:'/assets/images/ca1/ca1bg.jpg',
    Images:['/assets/blacklines/ca1/ca1blackline.JPG'],
    Overlay:'/assets/images/sold-out.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.14668713107683%2C-96.46788028127173&z=15',
    SVG:`
      <svg class=\'svg\' fill=\'transparent\' id=\'svg1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 916 285\'><title>CA1 color plat</title>
        <a href=\'/cope-additions/1/1\' id=\'imgLink\' target=\'iframe\'><rect class=\'lot-for-sale\' x=\'410\' width=\'506\' height=\'285\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/1/2\' id=\'imgLink\' target=\'iframe\'><rect class=\'lot-for-sale\' x=\'204\' width=\'200\' height=\'285\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/1/3\' id=\'imgLink\' target=\'iframe\'><rect class=\'lot-for-sale\' y=\'151\' width=\'197\' height=\'134\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/1/4\' id=\'imgLink\' target=\'iframe\'><rect class=\'lot-for-sale\' width=\'197\' height=\'139\'><title>Sold</title></rect></a>
      </svg>`,
    SVGMobile:`
      <svg class=\'svg\' fill=\'transparent\' id=\'svg1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 916 285\'><title>CA1 color plat</title>
        <a xlink:href=\'/cope-additions/1/1\' id=\'imgLink\' target=\'_self\'><rect class=\'lot-for-sale\' x=\'410\' width=\'506\' height=\'285\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/1/2\' id=\'imgLink\' target=\'_self\'><rect class=\'lot-for-sale\' x=\'204\' width=\'200\' height=\'285\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/1/3\' id=\'imgLink\' target=\'_self\'><rect class=\'lot-for-sale\' y=\'151\' width=\'197\' height=\'134\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/1/4\' id=\'imgLink\' target=\'_self\'><rect class=\'lot-for-sale\' width=\'197\' height=\'139\'><title>Sold</title></rect></a>
      </svg>`,
    SVGStyle:`
      width: 26.75vw;
      margin-top: 4.25%;
      margin-left: 2.5vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;`,
    Plat:'/assets/images/plats/ca1.png',
    Click:'show',
    FastFacts:['Four lots from one- to five-acres','Near Princeton, TX','10 minutes to Allen and McKinney','45 minutes to Dallas'],
    Details:'This small development divided 10 acres of land into four lots ranging from one- to five-acres near Princeton, Texas. Princeton is an ideal commuter town and is growing at a significant pace. Local amenities are being added constantly and major cities are just a short drive away. All lots were sold in 2017.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:2,
    Title:'Cope Addition II',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca2/ca2bg.jpg',
    Color:'#3BB44A',
    BannerText:'All lots sold 2018',
    ButtonText:'Details',
    ButtonLink:'/assets/blacklines/ca2/ca2blackline.JPG',
    LargeDefault:'<img class=\'large-image\' src=\'/assets/images/ca2/ca2bg.jpg\' alt=\'ca2\'>',
    DefaultImage:'/assets/images/ca2/ca2bg.jpg',
    Images:['/assets/blacklines/ca2/ca2blackline.JPG'],
    Overlay:'/assets/images/sold-out.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.079684418659596%2C-96.5088690365809&z=14',
    SVG:`
      <svg class=\'svg\' fill=\'transparent\' id=\'svg2\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 358.43 146.09\'><title>CA2 color plat</title>
        <a href=\'/cope-additions/2/1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'315.65\' width=\'42.78\' height=\'27.13\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'315.65\' y=\'31.3\' width=\'42.78\' height=\'25.04\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'315.65\' y=\'59.48\' width=\'42.78\' height=\'27.65\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'334.96\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'310.43\' y=\'98.61\' width=\'22.43\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'283.83\' y=\'98.61\' width=\'22.96\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/7\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'258.26\' y=\'98.61\' width=\'22.96\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/8\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'230.61\' y=\'98.61\' width=\'24\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/9\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'205.04\' y=\'98.61\' width=\'22.96\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/10\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'177.91\' y=\'98.61\' width=\'24\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/11\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'152.35\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/12\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'126.26\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/13\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'100.17\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/14\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'84.52 101.74 96.52 101.74 96.52 146.09 53.22 146.09 84.52 101.74\'><title>Sold</title></polygon></a>
        <a href=\'/cope-additions/2/15\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'77.22 87.13 81.91 98.61 46.96 146.09 0 146.09 0 109.56 77.22 87.13\'><title>Sold</title></polygon></a>
        <a href=\'/cope-additions/2/16\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'81.91 70.11 81.91 82.44 0 106.11 0 80.48 81.91 70.11\'><title>Sold</title></polygon></a>
        <a href=\'/cope-additions/2/17\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'74.87 56.35 79.11 67.56 0 76.37 18.46 45.26 74.87 56.35\'><title>Sold</title></polygon></a>
        <a href=\'/cope-additions/2/18\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'97.7 0.85 87.72 47.41 76.76 53.09 19.04 41.35 7.7 0.85 97.7 0.85\'><title>Sold</title></polygon></a>
        <a href=\'/cope-additions/2/19\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'123.65 0.85 123.65 29.22 100.17 56.35 90.85 47.41 101.61 0.85 123.65 0.85\'><title>Sold</title></polygon></a>
        <a href=\'/cope-additions/2/20\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'123.65 35.09 123.65 85.96 93.59 85.96 93.59 69.12 100.17 59.48 123.65 35.09\'><title>Sold</title></polygon></a>
        <a href=\'/cope-additions/2/21\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'127.04\' y=\'59.48\' width=\'42.65\' height=\'27.65\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/22\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'127.04\' y=\'31.3\' width=\'42.65\' height=\'26.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/23\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'127.04\' y=\'0.85\' width=\'37.04\' height=\'27.75\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/24\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'186.73\' y=\'0.85\' width=\'36.77\' height=\'27.75\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/25\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'181.24\' y=\'31.3\' width=\'42.26\' height=\'26.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/26\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'181.24\' y=\'60.82\' width=\'42.26\' height=\'26.32\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/27\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'227.02\' y=\'60.82\' width=\'41.67\' height=\'26.32\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/28\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'227.02\' y=\'31.3\' width=\'41.67\' height=\'26.48\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/29\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'227.02\' y=\'0.85\' width=\'36.59\' height=\'27.75\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/30\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'287.09\' y=\'0.85\' width=\'26.02\' height=\'42.07\'><title>Sold</title></rect></a>
        <a href=\'/cope-additions/2/31\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'281.22\' y=\'46.04\' width=\'31.89\' height=\'41.09\'><title>Sold</title></rect></a>
      </svg>`,
    SVGMobile:`
      <svg class=\'svg\' fill=\'transparent\' id=\'svg2\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 358.43 146.09\'><title>CA2 color plat</title>
        <a xlink:href=\'/cope-additions/2/1\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'315.65\' width=\'42.78\' height=\'27.13\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/2\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'315.65\' y=\'31.3\' width=\'42.78\' height=\'25.04\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/3\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'315.65\' y=\'59.48\' width=\'42.78\' height=\'27.65\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/4\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'334.96\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/5\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'310.43\' y=\'98.61\' width=\'22.43\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/6\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'283.83\' y=\'98.61\' width=\'22.96\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/7\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'258.26\' y=\'98.61\' width=\'22.96\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/8\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'230.61\' y=\'98.61\' width=\'24\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/9\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'205.04\' y=\'98.61\' width=\'22.96\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/10\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'177.91\' y=\'98.61\' width=\'24\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/11\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'152.35\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/12\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'126.26\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/13\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'100.17\' y=\'98.61\' width=\'23.48\' height=\'47.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/14\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'84.52 101.74 96.52 101.74 96.52 146.09 53.22 146.09 84.52 101.74\'><title>Sold</title></polygon></a>
        <a xlink:href=\'/cope-additions/2/15\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'77.22 87.13 81.91 98.61 46.96 146.09 0 146.09 0 109.56 77.22 87.13\'><title>Sold</title></polygon></a>
        <a xlink:href=\'/cope-additions/2/16\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'81.91 70.11 81.91 82.44 0 106.11 0 80.48 81.91 70.11\'><title>Sold</title></polygon></a>
        <a xlink:href=\'/cope-additions/2/17\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'74.87 56.35 79.11 67.56 0 76.37 18.46 45.26 74.87 56.35\'><title>Sold</title></polygon></a>
        <a xlink:href=\'/cope-additions/2/18\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'97.7 0.85 87.72 47.41 76.76 53.09 19.04 41.35 7.7 0.85 97.7 0.85\'><title>Sold</title></polygon></a>
        <a xlink:href=\'/cope-additions/2/19\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'123.65 0.85 123.65 29.22 100.17 56.35 90.85 47.41 101.61 0.85 123.65 0.85\'><title>Sold</title></polygon></a>
        <a xlink:href=\'/cope-additions/2/20\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'123.65 35.09 123.65 85.96 93.59 85.96 93.59 69.12 100.17 59.48 123.65 35.09\'><title>Sold</title></polygon></a>
        <a xlink:href=\'/cope-additions/2/21\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'127.04\' y=\'59.48\' width=\'42.65\' height=\'27.65\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/22\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'127.04\' y=\'31.3\' width=\'42.65\' height=\'26.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/23\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'127.04\' y=\'0.85\' width=\'37.04\' height=\'27.75\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/24\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'186.73\' y=\'0.85\' width=\'36.77\' height=\'27.75\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/25\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'181.24\' y=\'31.3\' width=\'42.26\' height=\'26.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/26\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'181.24\' y=\'60.82\' width=\'42.26\' height=\'26.32\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/27\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'227.02\' y=\'60.82\' width=\'41.67\' height=\'26.32\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/28\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'227.02\' y=\'31.3\' width=\'41.67\' height=\'26.48\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/29\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'227.02\' y=\'0.85\' width=\'36.59\' height=\'27.75\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/30\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'287.09\' y=\'0.85\' width=\'26.02\' height=\'42.07\'><title>Sold</title></rect></a>
        <a xlink:href=\'/cope-additions/2/31\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'281.22\' y=\'46.04\' width=\'31.89\' height=\'41.09\'><title>Sold</title></rect></a>
      </svg>`,
    SVGStyle:`
      width: 27.75vw;
      margin-top: 3.2%;
      margin-left: .25vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;
      `,
    Plat:'/assets/images/plats/ca2.png',
    Click:'show',
    FastFacts:['31 one-acre lots','Near Princeton, TX','10 minutes to Allen and McKinney','45 minutes to Dallas','Near Lavon Lake','Lots sold out 2018'],
    Details:'This 31 one-acre lot development near Princeton, Texas converted disused farm land into a small commuter community. Princeton is growing rapidly as a commuter town and Cope Addition II sits just outside the city limits, providing a rural atmosphere for families. CA2 takes advantage of Princeton schools and is just minutes from downtown, where amenities are being added all the time. It\'s also near Lavon Lake\'s parks and docks, so there are ample outdoor activities to entertain young families.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:3,
    Title:'Cope Addition III',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca3/ca3bg.jpg',
    Color:'#FCAF43',
    BannerText:'Project Sold 2018',
    ButtonText:'Details',
    ButtonLink:'/assets/blacklines/ca3/ca3blackline.JPG',
    LargeDefault:'<img class=\'large-image\' src=\'/assets/images/ca3/ca3bg.jpg\' alt=\'ca3\'>',
    DefaultImage:'/assets/images/ca3/ca3bg.jpg',
    Images:['/assets/blacklines/ca3/ca3blackline.JPG'],
    Overlay:'/assets/images/sold-out.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.21694309414208%2C-97.08102729017912&z=17',
    SVG:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg3\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 682.43 212.28\'><title>CA3 color plat</title>
      <a href=\'/cope-additions/3/A1\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'71.25 172.76 94.96 172.76 98.61 177.06 98.61 202.07 89.59 210.52 71.25 210.52 71.25 172.76\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A2\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'47.16 166.3 68.28 172.76 68.28 210.52 10.56 210.52 6.85 206.78 47.16 166.3\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A3\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'38.48 145.96 45.2 163.96 4.2 203.89 0.98 200.94 0.98 145.96 38.48 145.96\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A4\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'45.2 119.15 45.2 128.93 38.48 143.41 0.98 143.41 0.98 119.15 45.2 119.15\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'0.98\' y=\'92.54\' width=\'44.22\' height=\'23.87\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A6\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'38.48 65.73 45.2 83.28 45.2 89.98 0.98 89.98 0.98 65.73 38.48 65.73\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A7\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'0 0 46.17 46.96 38.48 63.2 0.98 62.22 0 0\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A8\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'3.91 0 70.04 0 70.04 40.3 48.91 45 3.91 0\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A9\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'73.47\' width=\'22.6\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/10\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'98.8\' width=\'24.26\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A11\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'125.64\' width=\'23.64\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A12\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'152.22\' width=\'23.67\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A13\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'178.73\' width=\'23.97\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A14\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'205.28\' width=\'23.83\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A15\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'231.82\' width=\'23.51\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A16\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'258.37\' width=\'23.77\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A17\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'285.07\' width=\'23.28\' height=\'39.91\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A18\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'311.46\' y=\'0.78\' width=\'23.5\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A19\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'338\' y=\'0.78\' width=\'23.76\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A20\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'364.55\' y=\'0.78\' width=\'23.43\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A21\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'391.09\' y=\'0.78\' width=\'23.89\' height=\'40.3\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A22\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'417.64\' y=\'0.78\' width=\'23.17\' height=\'40.3\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A23\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'444.18\' y=\'0.78\' width=\'23.43\' height=\'40.3\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A24\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'470.73\' y=\'0.78\' width=\'23.69\' height=\'40.3\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A25\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'497.27\' y=\'1.76\' width=\'23.55\' height=\'39.33\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A26\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'523.82\' y=\'1.76\' width=\'23.23\' height=\'39.33\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A27\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'550.57 1.76 583.24 1.76 571.7 42.82 550.57 41.09 550.57 1.76\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A28\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'586.19 1.76 625.89 1.76 625.89 21.3 582.07 51.46 573.93 44.8 586.19 1.76\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A29\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'625.89 25.04 625.89 70.63 587.35 70.63 583.24 53.41 625.89 25.04\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A30\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'625.89 73.56 625.89 97.04 580.3 97.04 580.3 85.3 586.19 73.56 625.89 73.56\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A31\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'580.3\' y=\'99.98\' width=\'45.59\' height=\'30.33\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A32\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'580.3\' y=\'132.85\' width=\'45.59\' height=\'24.07\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A33\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'580.3\' y=\'159.85\' width=\'45.59\' height=\'23.09\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/A34\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'580.3 186.65 625.89 186.65 625.89 212.28 588.91 212.28 580.3 203.89 580.3 186.65\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/3/A35\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'629.02\' y=\'1.76\' width=\'53.41\' height=\'209.54\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'72.2\' y=\'106.93\' width=\'26.61\' height=\'39.03\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'101.73\' y=\'106.93\' width=\'23.91\' height=\'39.03\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'128.48\' y=\'106.93\' width=\'23.74\' height=\'39.03\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'154.73\' y=\'106.93\' width=\'24\' height=\'39.03\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'181.73\' y=\'106.93\' width=\'23.55\' height=\'39.03\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'207.98\' y=\'106.93\' width=\'23.84\' height=\'39.81\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B7\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'234.48\' y=\'108.07\' width=\'23.89\' height=\'37.89\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B8\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'261.23\' y=\'108.07\' width=\'23.84\' height=\'37.89\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B9\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'287.73\' y=\'108.07\' width=\'23.73\' height=\'37.89\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B10\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'313.98\' y=\'107.57\' width=\'24.02\' height=\'38.56\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B11\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'340.73\' y=\'108.07\' width=\'23.82\' height=\'38.07\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B12\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'367.73\' y=\'108.07\' width=\'23.36\' height=\'38.07\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B13\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'393.98\' y=\'108.07\' width=\'23.66\' height=\'38.87\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B14\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'420.48\' y=\'108.07\' width=\'23.7\' height=\'38.87\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B15\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'447.1\' y=\'108.07\' width=\'23.62\' height=\'38.87\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B16\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'472.98\' y=\'108.07\' width=\'24.29\' height=\'38.87\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B17\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'499.98\' y=\'108.98\' width=\'23.84\' height=\'37.96\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B18\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'526.5\' y=\'108.98\' width=\'27\' height=\'38.97\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B19\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'526.5\' y=\'67.3\' width=\'27\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B20\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'499.98\' y=\'67.3\' width=\'23.84\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B21\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'472.98\' y=\'67.3\' width=\'24.29\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B22\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'447.1\' y=\'67.3\' width=\'23.62\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B23\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'420.48\' y=\'67.3\' width=\'23.7\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B24\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'393.98\' y=\'67.3\' width=\'23.66\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B25\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'366.73\' y=\'67.3\' width=\'24.36\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B26\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'340.48\' y=\'67.3\' width=\'24.07\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B27\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'313.98\' y=\'67.3\' width=\'24.02\' height=\'39.28\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B28\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'287.73\' y=\'66.52\' width=\'23.73\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B29\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'261.23\' y=\'66.52\' width=\'23.84\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B30\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'234.48\' y=\'66.52\' width=\'23.89\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B31\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'207.98\' y=\'66.52\' width=\'23.84\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B32\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'181.73\' y=\'66.52\' width=\'23.55\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B33\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'154.73\' y=\'66.52\' width=\'24\' height=\'39.13\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B34\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'128.48\' y=\'65.73\' width=\'23.74\' height=\'38.75\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B35\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'101.73\' y=\'65.73\' width=\'23.91\' height=\'38.75\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/B36\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'71.39\' y=\'64.72\' width=\'27.41\' height=\'39.76\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'123.99\' y=\'171.84\' width=\'28.23\' height=\'38.68\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'154.73\' y=\'172.76\' width=\'24\' height=\'37.76\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'181.73\' y=\'172.76\' width=\'23.55\' height=\'37.76\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'207.98\' y=\'172.76\' width=\'23.84\' height=\'37.76\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'234.48\' y=\'172.76\' width=\'23.89\' height=\'37.76\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'261.23\' y=\'172.76\' width=\'23.84\' height=\'37.76\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C7\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'287.73\' y=\'172.76\' width=\'23.73\' height=\'37.76\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C8\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'313.98\' y=\'173.43\' width=\'24.02\' height=\'37.09\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C9\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'340.73\' y=\'173.51\' width=\'23.82\' height=\'38.48\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C10\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'367.73\' y=\'173.51\' width=\'23.36\' height=\'37.8\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C11\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'393.98\' y=\'173.43\' width=\'23.66\' height=\'37.87\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C12\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'420.48\' y=\'173.51\' width=\'23.7\' height=\'37.8\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C13\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'446.98\' y=\'173.51\' width=\'23.75\' height=\'38.48\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C14\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'472.98\' y=\'173.51\' width=\'24.29\' height=\'38.48\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C15\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'499.98\' y=\'173.51\' width=\'23.84\' height=\'38.78\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/3/C16\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'526.5\' y=\'173.51\' width=\'27\' height=\'38.48\'><title>Sold</title></rect></a>
    </svg>`,
    SVGMobile:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg3\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 682.43 212.28\'><title>CA3 color plat</title>
      <a xlink:href=\'/cope-additions/3/A1\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'71.25 172.76 94.96 172.76 98.61 177.06 98.61 202.07 89.59 210.52 71.25 210.52 71.25 172.76\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A2\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'47.16 166.3 68.28 172.76 68.28 210.52 10.56 210.52 6.85 206.78 47.16 166.3\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A3\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'38.48 145.96 45.2 163.96 4.2 203.89 0.98 200.94 0.98 145.96 38.48 145.96\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A4\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'45.2 119.15 45.2 128.93 38.48 143.41 0.98 143.41 0.98 119.15 45.2 119.15\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A5\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'0.98\' y=\'92.54\' width=\'44.22\' height=\'23.87\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A6\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'38.48 65.73 45.2 83.28 45.2 89.98 0.98 89.98 0.98 65.73 38.48 65.73\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A7\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'0 0 46.17 46.96 38.48 63.2 0.98 62.22 0 0\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A8\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'3.91 0 70.04 0 70.04 40.3 48.91 45 3.91 0\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A9\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'73.47\' width=\'22.6\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/10\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'98.8\' width=\'24.26\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A11\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'125.64\' width=\'23.64\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A12\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'152.22\' width=\'23.67\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A13\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'178.73\' width=\'23.97\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A14\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'205.28\' width=\'23.83\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A15\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'231.82\' width=\'23.51\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A16\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'258.37\' width=\'23.77\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A17\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'285.07\' width=\'23.28\' height=\'39.91\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A18\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'311.46\' y=\'0.78\' width=\'23.5\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A19\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'338\' y=\'0.78\' width=\'23.76\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A20\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'364.55\' y=\'0.78\' width=\'23.43\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A21\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'391.09\' y=\'0.78\' width=\'23.89\' height=\'40.3\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A22\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'417.64\' y=\'0.78\' width=\'23.17\' height=\'40.3\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A23\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'444.18\' y=\'0.78\' width=\'23.43\' height=\'40.3\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A24\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'470.73\' y=\'0.78\' width=\'23.69\' height=\'40.3\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A25\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'497.27\' y=\'1.76\' width=\'23.55\' height=\'39.33\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A26\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'523.82\' y=\'1.76\' width=\'23.23\' height=\'39.33\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A27\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'550.57 1.76 583.24 1.76 571.7 42.82 550.57 41.09 550.57 1.76\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A28\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'586.19 1.76 625.89 1.76 625.89 21.3 582.07 51.46 573.93 44.8 586.19 1.76\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A29\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'625.89 25.04 625.89 70.63 587.35 70.63 583.24 53.41 625.89 25.04\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A30\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'625.89 73.56 625.89 97.04 580.3 97.04 580.3 85.3 586.19 73.56 625.89 73.56\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A31\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'580.3\' y=\'99.98\' width=\'45.59\' height=\'30.33\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A32\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'580.3\' y=\'132.85\' width=\'45.59\' height=\'24.07\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A33\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'580.3\' y=\'159.85\' width=\'45.59\' height=\'23.09\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/A34\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'580.3 186.65 625.89 186.65 625.89 212.28 588.91 212.28 580.3 203.89 580.3 186.65\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/3/A35\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'629.02\' y=\'1.76\' width=\'53.41\' height=\'209.54\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B1\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'72.2\' y=\'106.93\' width=\'26.61\' height=\'39.03\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B2\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'101.73\' y=\'106.93\' width=\'23.91\' height=\'39.03\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B3\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'128.48\' y=\'106.93\' width=\'23.74\' height=\'39.03\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B4\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'154.73\' y=\'106.93\' width=\'24\' height=\'39.03\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B5\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'181.73\' y=\'106.93\' width=\'23.55\' height=\'39.03\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B6\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'207.98\' y=\'106.93\' width=\'23.84\' height=\'39.81\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B7\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'234.48\' y=\'108.07\' width=\'23.89\' height=\'37.89\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B8\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'261.23\' y=\'108.07\' width=\'23.84\' height=\'37.89\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B9\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'287.73\' y=\'108.07\' width=\'23.73\' height=\'37.89\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B10\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'313.98\' y=\'107.57\' width=\'24.02\' height=\'38.56\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B11\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'340.73\' y=\'108.07\' width=\'23.82\' height=\'38.07\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B12\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'367.73\' y=\'108.07\' width=\'23.36\' height=\'38.07\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B13\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'393.98\' y=\'108.07\' width=\'23.66\' height=\'38.87\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B14\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'420.48\' y=\'108.07\' width=\'23.7\' height=\'38.87\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B15\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'447.1\' y=\'108.07\' width=\'23.62\' height=\'38.87\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B16\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'472.98\' y=\'108.07\' width=\'24.29\' height=\'38.87\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B17\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'499.98\' y=\'108.98\' width=\'23.84\' height=\'37.96\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B18\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'526.5\' y=\'108.98\' width=\'27\' height=\'38.97\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B19\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'526.5\' y=\'67.3\' width=\'27\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B20\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'499.98\' y=\'67.3\' width=\'23.84\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B21\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'472.98\' y=\'67.3\' width=\'24.29\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B22\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'447.1\' y=\'67.3\' width=\'23.62\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B23\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'420.48\' y=\'67.3\' width=\'23.7\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B24\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'393.98\' y=\'67.3\' width=\'23.66\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B25\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'366.73\' y=\'67.3\' width=\'24.36\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B26\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'340.48\' y=\'67.3\' width=\'24.07\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B27\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'313.98\' y=\'67.3\' width=\'24.02\' height=\'39.28\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B28\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'287.73\' y=\'66.52\' width=\'23.73\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B29\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'261.23\' y=\'66.52\' width=\'23.84\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B30\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'234.48\' y=\'66.52\' width=\'23.89\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B31\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'207.98\' y=\'66.52\' width=\'23.84\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B32\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'181.73\' y=\'66.52\' width=\'23.55\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B33\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'154.73\' y=\'66.52\' width=\'24\' height=\'39.13\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B34\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'128.48\' y=\'65.73\' width=\'23.74\' height=\'38.75\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B35\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'101.73\' y=\'65.73\' width=\'23.91\' height=\'38.75\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/B36\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'71.39\' y=\'64.72\' width=\'27.41\' height=\'39.76\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C1\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'123.99\' y=\'171.84\' width=\'28.23\' height=\'38.68\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C2\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'154.73\' y=\'172.76\' width=\'24\' height=\'37.76\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C3\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'181.73\' y=\'172.76\' width=\'23.55\' height=\'37.76\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C4\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'207.98\' y=\'172.76\' width=\'23.84\' height=\'37.76\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C5\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'234.48\' y=\'172.76\' width=\'23.89\' height=\'37.76\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C6\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'261.23\' y=\'172.76\' width=\'23.84\' height=\'37.76\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C7\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'287.73\' y=\'172.76\' width=\'23.73\' height=\'37.76\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C8\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'313.98\' y=\'173.43\' width=\'24.02\' height=\'37.09\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C9\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'340.73\' y=\'173.51\' width=\'23.82\' height=\'38.48\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C10\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'367.73\' y=\'173.51\' width=\'23.36\' height=\'37.8\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C11\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'393.98\' y=\'173.43\' width=\'23.66\' height=\'37.87\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C12\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'420.48\' y=\'173.51\' width=\'23.7\' height=\'37.8\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C13\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'446.98\' y=\'173.51\' width=\'23.75\' height=\'38.48\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C14\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'472.98\' y=\'173.51\' width=\'24.29\' height=\'38.48\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C15\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'499.98\' y=\'173.51\' width=\'23.84\' height=\'38.78\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/3/C16\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'526.5\' y=\'173.51\' width=\'27\' height=\'38.48\'><title>Sold</title></rect></a>
    </svg>`,
    SVGStyle:`
      width: 26.75vw;
      margin-top: 4%;
      margin-left: 1vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca3.png',
    Click:'show',
    FastFacts:['86 lots','Denton, Tx','A short drive to downtown','Quick access to Dallas and Fort Worth'],
    Details:'The Cope Addition III project sold as one unit in 2018. The un-zoned 15 acre project was subdivided for 86 single-family site-built residences. CA3 is located in bustling Denton, making it a prime choice for young professionals. Denton is known for UNT and its bar and restaurant scene, all a short drive away from this project.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:4,
    Title:'CA IV: Luxe at Grand Prairie',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca4/ca4bg.jpg',
    Color:'#F05C2C',
    BannerText:'Commercial Space Available',
    ButtonText:'Sales Brochure',
    ButtonLink:'/assets/images/ca4/commercial listing.pdf',
    LargeDefault:'<img class=\'large-image\' src=\'/assets/images/ca4/ca4bg.jpg\' alt=\'ca4\'>',
    DefaultImage:'/assets/images/ca4/ca4bg.jpg',
    Images:['/assets/images/ca4/perspective 1.jpg','/assets/images/ca4/perspective 2.jpg','/assets/images/ca4/perspective 3.jpg','/assets/images/ca4/businesses.jpg','/assets/blacklines/ca4/ca4blackline.jpg'],
    Overlay:'/assets/images/70-sold-out.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=32.6692998179071%2C-97.04251530836137&z=15',
    SVG:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg4\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1697.28 672.56\'><title>CA4 color plat</title>
      <a href=\'/cope-additions/4/1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'357\' y=\'190\' width=\'118\' height=\'173\'><title>Sold</title></rect></a>
      <a href=\'/cope-additions/4/2\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'487 190 1316 196 1423 196 1527 213 1671 265 1671 649 1015 649 982 605 866 614 808 555 812 457 516 299 487 190\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/4/3\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'11 564 295 564 295 407 602 407 699 459 727 528 783 608 771 649 11 644 11 564\'><title>Sold</title></polygon></a>
      <a href=\'/cope-additions/4/4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' y=\'407\' width=\'271\' height=\'148\'><title>Sold</title></rect></a>
    </svg>`,
    SVGMobile:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg4\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1697.28 672.56\'><title>CA4 color plat</title>
      <a xlink:href=\'/cope-additions/4/1\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'357\' y=\'190\' width=\'118\' height=\'173\'><title>Sold</title></rect></a>
      <a xlink:href=\'/cope-additions/4/2\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'487 190 1316 196 1423 196 1527 213 1671 265 1671 649 1015 649 982 605 866 614 808 555 812 457 516 299 487 190\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/4/3\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'11 564 295 564 295 407 602 407 699 459 727 528 783 608 771 649 11 644 11 564\'><title>Sold</title></polygon></a>
      <a xlink:href=\'/cope-additions/4/4\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' y=\'407\' width=\'271\' height=\'148\'><title>Sold</title></rect></a>
    </svg>`,
    SVGStyle:`
      width: 29vw;
      margin-top: .25%;
      margin-left: .25vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca4.png',
    Click:'show',
    FastFacts:['34-acre mixed-use development','318 luxury apartments coming soon','Retail pads available','<a href=\'https://www.gptx.org/\'>Learn about Grand Prairie</a>'],
    Details:'This new development is in a prime location near Arlington, TX on Highway 20, making it very near shopping, entertainment, and businesses. The position off of Highway 20 allows for quick access to all the major cities in DFW and proximity to Highway 360 makes for easy access to the airport. Nearby are water and themeparks and many shops are within walking distance. The luxury apartments are already being developed, so there will be a built-in market for the available retail pad sites.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:5,
    Title:'CA V: Liberty Square',
    AdditionLogo:'/assets/images/logos/libertysquare.png',
    BackgroundImage:'/assets/images/ca5/ca5bg.jpg',
    Color:'#D8C560',
    BannerText:'1-acre Homes from $349,900',
    ButtonText:'Now Selling',
    ButtonLink:'/cope-additions/5/A2',
    LargeDefault:'<iframe class=\'large-image\' width=\'1280\' height=\'720\' src=\'https://www.youtube.com/embed/YarREvC1KWQ?rel=0\' frameborder=\'0\' allow=\'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>',
    DefaultImage:'/assets/images/ca5/video.JPG',
    Images:['/assets/images/ca5/lessbuilt.jpg','/assets/images/ca5/morebuilt.jpg','/assets/images/ca5/jeffersoniso.JPG','/assets/images/ca5/jeffersonfirst.jpg','/assets/images/ca5/jeffersonsecond.jpg','/assets/blacklines/ca5/Final blackline.jpg','/assets/images/ca5/aerial1.JPG','/assets/images/ca5/aerial2.JPG'],
    Overlay:'/assets/images/50-sold-out.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.11631177970053%2C-96.48489474855137&z=15',
    SVG:`
      <svg class=\'svg\' fill=\'transparent\' id=\'svg5\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 476 612\'>
        <a href=\'/cope-additions/5/B1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'64\' y=\'40\' width=\'125.5\' height=\'95\' alt=\'B-1\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/B2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'194\' y=\'40\' width=\'44\' height=\'95\'alt=\'B-2\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/B3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'244\' y=\'40\' width=\'43.5\' height=\'95\'alt=\'B-3\'><title>lot for sale</title></rect></a>
        <rect class=\'sold\' x=\'292.5\' y=\'40\' width=\'44\' height=\'95\'alt=\'B-4\'><title>Sold</title></rect>
        <polygon class=\'sold\' points=\'342,40 399.4,40 370.7,127.1 361.5,135 342,135 \'alt=\'B-5\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'406.5,40 454.6,40 454.6,79 399.2,133 378,123 \'alt=\'B-6\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'454.6,87.5 453.3,204.2 394,163 399.4,139.3 \'alt=\'B-7\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'364.1,168.8 390.8,168.8 453.3,209.5 453.3,227.5 364.1,226 \'alt=\'B-8\'><title>SOLD</title></polygon></a>
        <a href=\'/cope-additions/5/B9\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'265.8\' y=\'156.5\' width=\'93.8\' height=\'46.3\'alt=\'B-9\'><title>lot for sale</title></rect></a>
        <rect class=\'sold\' x=\'265.8\' y=\'206.3\' width=\'45.3\' height=\'89\'alt=\'B-10\'><title>SOLD</title></rect>
        <rect class=\'sold\' x=\'314.5\' y=\'206.3\' width=\'47\' height=\'89\'alt=\'B-11\'><title>SOLD</title></rect></a>
        <polygon class=\'sold\' points=\'365.5,231.8 453.3,231.8 453.3,255.4 396.5,291.3 368.5,287 \'alt=\'B-12\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'399.4,297.2 453.3,263.5 452,401.3 395.3,322 \'alt=\'B-13\'><title>SOLD</title></polygon>
        <polygon class=\'sold\' points=\'364.1,326.5 391.3,326.5 448.3,405.8 364.1,405.8 \'alt=\'B-14\'><title>SOLD</title></polygon></a>
        <rect class=\'sold\' x=\'313.7\' y=\'315.8\' width=\'45.8\' height=\'91.4\'alt=\'B-15\'><title>SOLD</title></rect></a>
        <rect class=\'sold\' x=\'263.5\' y=\'315.8\' width=\'47.5\' height=\'91.4\'alt=\'B-16\'><title>SOLD</title></rect></a>
        <rect class=\'sold\' x=\'263.5\' y=\'410.3\' width=\'47.5\' height=\'92.3\'alt=\'B-17\'><title>SOLD</title></rect></a>
        <rect class=\'sold\' x=\'313.7\' y=\'410.3\' width=\'45.8\' height=\'92.3\'alt=\'B-18\'><title>SOLD</title></rect></a>
        <a href=\'/cope-additions/5/B19\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'363,410.3 449.8,410.3 385,491.5 363,498 \'alt=\'B-19\'><title>lot for sale</title></polygon></a>
        <a href=\'/cope-additions/5/B20\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'389.5,494 452.3,415 451.3,533.5 400,516 \'alt=\'B-20\'><title>lot for sale</title></polygon></a>
        <a href=\'/cope-additions/5/B21\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'home-for-sale\' points=\'398.5,520.4 449.8,539 449.8,594.8 392.5,594.8 379.7,534.5 \'alt=\'B-21\'><title>lot for sale</title></polygon></a>
        <a href=\'/cope-additions/5/B22\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'322,522.8 359.5,522.8 373.5,533.5 386.8,596 322,594.8 \'alt=\'B-22\'><title>home for sale</title></polygon></a>
        <a href=\'/cope-additions/5/B23\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'264.2,522.8 317.3,522.8 317.3,596 281.3,596 251,575.8 264.2,539.8 \'alt=\'B-23\'><title>lot for sale</title></polygon></a>
        <a href=\'/cope-additions/5/A1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'62.5\' y=\'156.5\' width=\'90.5\' height=\'46.3\'alt=\'A-1\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.5\' y=\'206.3\' width=\'90.5\' height=\'47.3\'alt=\'A-2\'><title>home for sale</title></rect></a>
        <a href=\'/cope-additions/5/A3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'62.5\' y=\'256.8\' width=\'90.5\' height=\'47.3\'alt=\'A-3\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A4\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'62.5,307.8 153,307.8 153,350 62.5,394.3 \'alt=\'A-4\'>><title>lot for sale</title></polygon></a>
        <a href=\'/cope-additions/5/A5\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'62.5,399.3 153,353.8 153,449 62.5,449 \'alt=\'A-5\'>><title>lot for sale</title></polygon></a>
        <a href=\'/cope-additions/5/A6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'62\' y=\'451.6\' width=\'90.3\' height=\'54.6\'alt=\'A-6\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A7\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'62\' y=\'509.8\' width=\'90.3\' height=\'55.3\'alt=\'A-7\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A8\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'lot-for-sale\' points=\'155.3,509.8 244.3,509.8 244.3,535.5 231.8,568.8 216.3,565 155.3,565 \'alt=\'A-8\'><title>lot for sale</title></polygon></a>
        <a href=\'/cope-additions/5/A9\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'452.5\' width=\'88\' height=\'53.8\'alt=\'A-9\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A10\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'394.3\' width=\'88\' height=\'54.8\'alt=\'A-10\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A11\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'317.6\' width=\'88\' height=\'72.4\'alt=\'A-11\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A12\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'256.8\' width=\'88\' height=\'56.5\'alt=\'A-12\'><title>home for sale</title></rect></a>
        <a href=\'/cope-additions/5/A13\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'206.3\' width=\'89\' height=\'47.3\'alt=\'A-13\'><title>lot for sale</title></rect></a>
        <a href=\'/cope-additions/5/A14\' id=\'imgLink\' target=\'iframe\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'156.5\' width=\'89\' height=\'46.3\'alt=\'A-14\'><title>lot for sale</title></rect></a>
      </svg>`,
    SVGMobile:`
      <svg class=\'svg\' fill=\'transparent\' id=\'svg5\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 476 612\'>
        <a xlink:href=\'/cope-additions/5/B1\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'64\' y=\'40\' width=\'125.5\' height=\'95\' alt=\'B-1\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/B2\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'194\' y=\'40\' width=\'44\' height=\'95\'alt=\'B-2\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/B3\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'244\' y=\'40\' width=\'43.5\' height=\'95\'alt=\'B-3\'><title>lot for sale</title></rect></a>
        <rect class=\'sold\' x=\'292.5\' y=\'40\' width=\'44\' height=\'95\'alt=\'B-4\'><title>Sold</title></rect>
        <polygon class=\'sold\' points=\'342,40 399.4,40 370.7,127.1 361.5,135 342,135 \'alt=\'B-5\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'406.5,40 454.6,40 454.6,79 399.2,133 378,123 \'alt=\'B-6\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'454.6,87.5 453.3,204.2 394,163 399.4,139.3 \'alt=\'B-7\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'364.1,168.8 390.8,168.8 453.3,209.5 453.3,227.5 364.1,226 \'alt=\'B-8\'><title>SOLD</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/B9\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'265.8\' y=\'156.5\' width=\'93.8\' height=\'46.3\'alt=\'B-9\'><title>lot for sale</title></rect></a>
        <rect class=\'sold\' x=\'265.8\' y=\'206.3\' width=\'45.3\' height=\'89\'alt=\'B-10\'><title>SOLD</title></rect>
        <rect class=\'sold\' x=\'314.5\' y=\'206.3\' width=\'47\' height=\'89\'alt=\'B-11\'><title>SOLD</title></rect></a>
        <polygon class=\'sold\' points=\'365.5,231.8 453.3,231.8 453.3,255.4 396.5,291.3 368.5,287 \'alt=\'B-12\'><title>SOLD</title></polygon></a>
        <polygon class=\'sold\' points=\'399.4,297.2 453.3,263.5 452,401.3 395.3,322 \'alt=\'B-13\'><title>SOLD</title></polygon>
        <polygon class=\'sold\' points=\'364.1,326.5 391.3,326.5 448.3,405.8 364.1,405.8 \'alt=\'B-14\'><title>SOLD</title></polygon></a>
        <rect class=\'sold\' x=\'313.7\' y=\'315.8\' width=\'45.8\' height=\'91.4\'alt=\'B-15\'><title>SOLD</title></rect></a>
        <rect class=\'sold\' x=\'263.5\' y=\'315.8\' width=\'47.5\' height=\'91.4\'alt=\'B-16\'><title>SOLD</title></rect></a>
        <rect class=\'sold\' x=\'263.5\' y=\'410.3\' width=\'47.5\' height=\'92.3\'alt=\'B-17\'><title>SOLD</title></rect></a>
        <rect class=\'sold\' x=\'313.7\' y=\'410.3\' width=\'45.8\' height=\'92.3\'alt=\'B-18\'><title>SOLD</title></rect></a>
        <a xlink:href=\'/cope-additions/5/B19\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'363,410.3 449.8,410.3 385,491.5 363,498 \'alt=\'B-19\'><title>lot for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/B20\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'389.5,494 452.3,415 451.3,533.5 400,516 \'alt=\'B-20\'><title>lot for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/B21\' id=\'imgLink\' target=\'_self\' ><polygon class=\'home-for-sale\' points=\'398.5,520.4 449.8,539 449.8,594.8 392.5,594.8 379.7,534.5 \'alt=\'B-21\'><title>lot for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/B22\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'322,522.8 359.5,522.8 373.5,533.5 386.8,596 322,594.8 \'alt=\'B-22\'><title>home for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/B23\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'264.2,522.8 317.3,522.8 317.3,596 281.3,596 251,575.8 264.2,539.8 \'alt=\'B-23\'><title>lot for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/A1\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'62.5\' y=\'156.5\' width=\'90.5\' height=\'46.3\'alt=\'A-1\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A2\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.5\' y=\'206.3\' width=\'90.5\' height=\'47.3\'alt=\'A-2\'><title>home for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A3\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'62.5\' y=\'256.8\' width=\'90.5\' height=\'47.3\'alt=\'A-3\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A4\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'62.5,307.8 153,307.8 153,350 62.5,394.3 \'alt=\'A-4\'>><title>lot for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/A5\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'62.5,399.3 153,353.8 153,449 62.5,449 \'alt=\'A-5\'>><title>lot for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/A6\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'62\' y=\'451.6\' width=\'90.3\' height=\'54.6\'alt=\'A-6\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A7\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'62\' y=\'509.8\' width=\'90.3\' height=\'55.3\'alt=\'A-7\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A8\' id=\'imgLink\' target=\'_self\' ><polygon class=\'lot-for-sale\' points=\'155.3,509.8 244.3,509.8 244.3,535.5 231.8,568.8 216.3,565 155.3,565 \'alt=\'A-8\'><title>lot for sale</title></polygon></a>
        <a xlink:href=\'/cope-additions/5/A9\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'452.5\' width=\'88\' height=\'53.8\'alt=\'A-9\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A10\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'394.3\' width=\'88\' height=\'54.8\'alt=\'A-10\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A11\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'317.6\' width=\'88\' height=\'72.4\'alt=\'A-11\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A12\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'256.8\' width=\'88\' height=\'56.5\'alt=\'A-12\'><title>home for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A13\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'206.3\' width=\'89\' height=\'47.3\'alt=\'A-13\'><title>lot for sale</title></rect></a>
        <a xlink:href=\'/cope-additions/5/A14\' id=\'imgLink\' target=\'_self\' ><rect class=\'lot-for-sale\' x=\'156.3\' y=\'156.5\' width=\'89\' height=\'46.3\'alt=\'A-14\'><title>lot for sale</title></rect></a>
      </svg>`,
    SVGStyle:`
      width: 32.5vw;
      margin-left: -1.5vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca5.png',
    Click:'show',
    FastFacts:['One-acre lots','Custom homes','Princeton schools','10 minutes to Allen and McKinney','45 minutes to Dallas','<a href=\'https://princetontx.gov/\'>Learn about Princeton</a>'],
    Details:'This new community development just outside of Princeton offers a rural escape with easy access to the nearby cities. Princeton is an ideal commuter town with new ammenities being added all the time. Liberty Square is just minutes from downtown Princeton, Lucas, and McKinney, and the nearby lake parks and docks. With multiple builders to choose from and a plethora of home styles, you can find just what you\'re looking for here.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:6,
    Title:'Cope Addition VI',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca6/ca6bg.jpg',
    Color:'#EB088D',
    BannerText:'Project in development',
    ButtonText:'Details',
    ButtonLink:'/assets/blacklines/ca6/ca6blackline.JPG',
    LargeDefault:'<img class=\'large-image\' src=\'/assets/images/ca6/ca6bg.jpg\' alt=\'ca6\'>',
    DefaultImage:'/assets/images/ca6/ca6bg.jpg',
    Images:['/assets/blacklines/ca6/ca6blackline.jpg'],
    Overlay:'/assets/images/alpha.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.16806615060693%2C-96.48497231420123&z=15',
    SVG:``,
    SVGMobile:``,
    SVGStyle:`
      width: 32.5vw;
      margin-top: 1%;
      margin-left: 1vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca6.png',
    Click:'hide',
    FastFacts:['160- unit townhome development','Princeton, Tx','Construction begins February 2019','SELLING SOON','10 minutes to Allen and McKinney','45 minutes to Dallas'],
    Details:'This beautiful townhome development sits just across the street from Princeton High School on Highway 380, making it a convenient walk away from all that Princeton downtown has to offer. The development\'s position relative to the highway also makes it a short drive away from major cities like Dallas, McKinney, Lucas, and Allen.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:7,
    Title:'CA VII: Providence Point',
    AdditionLogo:'/assets/images/logos/providencepoint.png',
    BackgroundImage:'/assets/images/ca7/ca7bg.jpg',
    Color:'#92278F',
    BannerText:'Model Home Now Open',
    ButtonText:'Get Directions',
    ButtonLink:'https://www.google.com/maps/dir//6461+FM982,+Princeton,+TX+75407',
    LargeDefault:'<iframe class=\'large-image\' width=\'100%\' height=\'1000px\' src=\'https://my.matterport.com/show/?m=GzcTYhzgwYB&utm_source=4\' frameborder=\'0\' allowfullscreen>          </iframe>',
    DefaultImage:'/assets/images/ca7/Matterport.JPG',
    Images:['/assets/images/ca7/absolute value.jpg','/assets/images/ca7/Absolute Value with Opt.png','/assets/images/ca7/dining den 2.jpg','/assets/images/ca7/Choice.jpg','/assets/images/ca7/Choice with Opt.png','/assets/images/ca7/den dining.jpg','/assets/images/ca7/pt-78.png','/assets/images/ca7/PT-78 colored floorplan.jpg','/assets/images/ca7/living kitchen 2.jpg','/assets/images/ca7/Sundowner.jpg','/assets/images/ca7/Sundowner with Opt.png','/assets/images/ca7/kitchen dining.jpg','/assets/blacklines/ca7/CA7 black line.png'],
    Overlay:'/assets/images/alpha.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.10746258500599%2C-96.37107526542684&z=13',
    SVG:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg7\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 220.44 706.37\'>
      <a href=\'/cope-additions/7/37\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'159.7\' y=\'662.22\' width=\'23.11\' height=\'43.85\' alt=\'lot 37\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/38\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'132.15\' y=\'661.93\' width=\'20.74\' height=\'44.15\' alt=\'lot 38\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/39\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'106.67\' y=\'661.33\' width=\'23.7\' height=\'45.04\' alt=\'lot 39\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/40\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'81.48\' y=\'661.63\' width=\'23.41\' height=\'44.15\' alt=\'lot 40\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/41\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'58.67\' y=\'660.15\' width=\'20.74\' height=\'45.33\'alt=\'lot 41\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/42\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'home-for-sale\' points=\'0.3 690.67 40 660.15 51.85 667.56 51.85 705.19 0 705.19 0.3 690.67\' alt=\'lot 42\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/7/43\' id=\'imgLink\' target=\'iframe\' ><path class=\'home-for-sale\' d=\'M33.59,697.59H73.3l-1.49,13.34L33.59,740.26Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 43\'><title>Home for sale</title></path></a>
      <a href=\'/cope-additions/7/44\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'618.08\' width=\'44.15\' height=\'24.3\' alt=\'lot 44\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/45\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'592.89\' width=\'44.15\' height=\'23.41\' alt=\'lot 45\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/46\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'567.7\' width=\'44.74\' height=\'23.41\' alt=\'lot 46\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/47\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'542.22\' width=\'44.15\' height=\'24\' alt=\'lot 47\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/48\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'517.04\' width=\'44.74\' height=\'23.41\' alt=\'lot 48\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/49\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.89\' y=\'492.15\' width=\'43.56\' height=\'22.81\' alt=\'lot 49\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/50\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'466.37\' width=\'44.44\' height=\'23.7\' alt=\'lot 50\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/51\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'441.78\' width=\'44.15\' height=\'23.41\' alt=\'lot 51\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/52\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'415.7\' width=\'45.04\' height=\'24.3\' alt=\'lot 52\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/53\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'390.52\' width=\'45.04\' height=\'23.11\' alt=\'lot 53\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/54\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'364.74\' width=\'44.74\' height=\'24\' alt=\'lot 54\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/55\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'339.85\' width=\'44.74\' height=\'24\' alt=\'lot 55\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/56\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'314.96\' width=\'44.74\' height=\'23.11\' alt=\'lot 56\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/57\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'288.89\' width=\'45.04\' height=\'23.7\' alt=\'lot 57\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/58\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.59\' y=\'264\' width=\'44.44\' height=\'23.7\' alt=\'lot 58\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/59\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'238.82\' width=\'44.44\' height=\'23.7\' alt=\'lot 59\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/60\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' y=\'189.93\' width=\'44.74\' height=\'46.52\' alt=\'lot 60\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/61\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.59\' y=\'165.04\' width=\'44.15\' height=\'23.41\' alt=\'lot 61\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/62\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.59\' y=\'139.85\' width=\'44.44\' height=\'23.11\' alt=\'lot 62\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/63\' id=\'imgLink\' target=\'iframe\' ><path class=\'home-for-sale\' d=\'M34.19,156.26l43.25-26.37v60.74H34.19S33.89,156.56,34.19,156.26Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 63\'><title>Home for sale</title></path></a>
      <a href=\'/cope-additions/7/64\' id=\'imgLink\' target=\'iframe\' ><path class=\'home-for-sale\' d=\'M34.48,100.85H77.15v25.78L33.89,153.3S34.78,100.56,34.48,100.85Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 64\'><title>Home for sale</title></path></a>
      <a href=\'/cope-additions/7/65\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.89\' y=\'22.22\' width=\'43.56\' height=\'24\' alt=\'lot 65\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/66\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.89\' width=\'44.15\' height=\'20.44\' alt=\'lot 66\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/67\' id=\'imgLink\' target=\'iframe\' ><path class=\'home-for-sale\' d=\'M96.41,53.15h20.15V88.41l7.11,11.26L96.11,116.56S96.11,52.85,96.41,53.15Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 67\'><title>Home for sale</title></path></a>
      <a href=\'/cope-additions/7/68\' id=\'imgLink\' target=\'iframe\' ><path class=\'home-for-sale\' d=\'M96.41,118.93,124.26,102l14.22,22.81v29H96.41S96.7,118.93,96.41,118.93Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 68\'><title>Home for sale</title></path></a>
      <a href=\'/cope-additions/7/69\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'103.41\' width=\'42.67\' height=\'23.41\' alt=\'lot 69\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/70\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'128.89\' width=\'42.96\' height=\'24.3\' alt=\'lot 70\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/71\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'154.96\' width=\'43.26\' height=\'23.7\' alt=\'lot 71\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/72\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'180.45\' width=\'43.26\' height=\'21.93\' alt=\'lot 72\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/73\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'209.19\' width=\'43.85\' height=\'21.63\' alt=\'lot 73\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/74\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'233.19\' width=\'43.26\' height=\'23.7\' alt=\'lot 74\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/75\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'258.37\' width=\'43.26\' height=\'23.7\' alt=\'lot 75\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/76\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'284.74\' width=\'43.26\' height=\'23.41\' alt=\'lot 76\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/77\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'63.41\' y=\'310.82\' width=\'42.67\' height=\'23.11\' alt=\'lot 77\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/78\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'336.3\' width=\'43.56\' height=\'24\' alt=\'lot 78\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/79\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'362.37\' width=\'43.26\' height=\'23.7\' alt=\'lot 79\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/80\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'387.56\' width=\'43.26\' height=\'24.3\' alt=\'lot 80\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/81\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'413.93\' width=\'42.96\' height=\'24\' alt=\'lot 81\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/82\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'439.7\' width=\'43.56\' height=\'24.3\' alt=\'lot 82\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/83\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'466.08\' width=\'43.26\' height=\'23.41\' alt=\'lot 83\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/84\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'492.45\' width=\'43.26\' height=\'23.11\' alt=\'lot 84\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/85\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'517.93\' width=\'42.96\' height=\'23.41\' alt=\'lot 85\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/86\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'543.11\' width=\'42.67\' height=\'24\' alt=\'lot 86\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/87\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'569.19\' width=\'43.26\' height=\'24.3\' alt=\'lot 87\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/88\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'595.26\' width=\'42.96\' height=\'24\' alt=\'lot 88\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/89\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'621.63\' width=\'43.26\' height=\'22.81\' alt=\'lot 89\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/90\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'108.74\' y=\'624\' width=\'45.63\' height=\'21.33\' alt=\'lot 90\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/91\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'108.15\' y=\'598.52\' width=\'45.63\' height=\'22.22\' alt=\'lot 91\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/92\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'108.15\' y=\'573.04\' width=\'45.93\' height=\'23.41\' alt=\'lot 92\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/93\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'108.44\' y=\'547.85\' width=\'45.63\' height=\'23.11\' alt=\'lot 93\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/94\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'108.44\' y=\'522.67\' width=\'45.93\' height=\'23.7\' alt=\'lot 94\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/95\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'home-for-sale\' points=\'107.85 476.44 149.04 494.52 155.26 508.44 155.26 520.59 108.74 520.59 107.85 476.44\' alt=\'lot 95\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/7/96\' id=\'imgLink\' target=\'iframe\' ><path class=\'home-for-sale\' d=\'M141.44,502.93h55.12v30.81l-13,11-42.37-17.48S141.44,502,141.44,502.93Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 96\'><title>Home for sale</title></path></a>
      <a href=\'/cope-additions/7/97\' id=\'imgLink\' target=\'iframe\' ><path class=\'home-for-sale\' d=\'M199.52,502.63h53.92v25.78L212.26,545l-13-10.67S199.52,502,199.52,502.63Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 97\'><title>Home for sale</title></path></a>
      <a href=\'/cope-additions/7/98\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'home-for-sale\' points=\'180.15 494.82 219.85 478.82 219.85 521.78 174.22 521.78 174.22 509.33 180.15 494.82\' alt=\'lot 98\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/7/99\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'174.22\' y=\'523.56\' width=\'45.33\' height=\'23.7\' alt=\'lot 99\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/100\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'173.63\' y=\'548.74\' width=\'45.04\' height=\'23.7\' alt=\'lot 100\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/101\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'173.04\' y=\'574.52\' width=\'45.63\' height=\'22.81\' alt=\'lot 101\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/102\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'173.33\' y=\'599.41\' width=\'45.33\' height=\'23.7\' alt=\'lot 102\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/7/103\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'173.04\' y=\'624.59\' width=\'45.04\' height=\'21.04\' alt=\'lot 103\'><title>Home for sale</title></rect></a>
    </svg>`,
    SVGMobile:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg7\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 220.44 706.37\'>
      <a xlink:href=\'/cope-additions/7/37\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'159.7\' y=\'662.22\' width=\'23.11\' height=\'43.85\' alt=\'lot 37\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/38\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'132.15\' y=\'661.93\' width=\'20.74\' height=\'44.15\' alt=\'lot 38\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/39\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'106.67\' y=\'661.33\' width=\'23.7\' height=\'45.04\' alt=\'lot 39\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/40\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'81.48\' y=\'661.63\' width=\'23.41\' height=\'44.15\' alt=\'lot 40\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/41\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'58.67\' y=\'660.15\' width=\'20.74\' height=\'45.33\'alt=\'lot 41\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/42\' id=\'imgLink\' target=\'_self\' ><polygon class=\'home-for-sale\' points=\'0.3 690.67 40 660.15 51.85 667.56 51.85 705.19 0 705.19 0.3 690.67\' alt=\'lot 42\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/7/43\' id=\'imgLink\' target=\'_self\' ><path class=\'home-for-sale\' d=\'M33.59,697.59H73.3l-1.49,13.34L33.59,740.26Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 43\'><title>Home for sale</title></path></a>
      <a xlink:href=\'/cope-additions/7/44\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'618.08\' width=\'44.15\' height=\'24.3\' alt=\'lot 44\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/45\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'592.89\' width=\'44.15\' height=\'23.41\' alt=\'lot 45\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/46\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'567.7\' width=\'44.74\' height=\'23.41\' alt=\'lot 46\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/47\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'542.22\' width=\'44.15\' height=\'24\' alt=\'lot 47\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/48\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'517.04\' width=\'44.74\' height=\'23.41\' alt=\'lot 48\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/49\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.89\' y=\'492.15\' width=\'43.56\' height=\'22.81\' alt=\'lot 49\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/50\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'466.37\' width=\'44.44\' height=\'23.7\' alt=\'lot 50\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/51\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'441.78\' width=\'44.15\' height=\'23.41\' alt=\'lot 51\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/52\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'415.7\' width=\'45.04\' height=\'24.3\' alt=\'lot 52\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/53\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'390.52\' width=\'45.04\' height=\'23.11\' alt=\'lot 53\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/54\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'364.74\' width=\'44.74\' height=\'24\' alt=\'lot 54\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/55\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'339.85\' width=\'44.74\' height=\'24\' alt=\'lot 55\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/56\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'314.96\' width=\'44.74\' height=\'23.11\' alt=\'lot 56\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/57\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'288.89\' width=\'45.04\' height=\'23.7\' alt=\'lot 57\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/58\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.59\' y=\'264\' width=\'44.44\' height=\'23.7\' alt=\'lot 58\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/59\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.3\' y=\'238.82\' width=\'44.44\' height=\'23.7\' alt=\'lot 59\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/60\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' y=\'189.93\' width=\'44.74\' height=\'46.52\' alt=\'lot 60\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/61\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.59\' y=\'165.04\' width=\'44.15\' height=\'23.41\' alt=\'lot 61\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/62\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.59\' y=\'139.85\' width=\'44.44\' height=\'23.11\' alt=\'lot 62\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/63\' id=\'imgLink\' target=\'_self\' ><path class=\'home-for-sale\' d=\'M34.19,156.26l43.25-26.37v60.74H34.19S33.89,156.56,34.19,156.26Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 63\'><title>Home for sale</title></path></a>
      <a xlink:href=\'/cope-additions/7/64\' id=\'imgLink\' target=\'_self\' ><path class=\'home-for-sale\' d=\'M34.48,100.85H77.15v25.78L33.89,153.3S34.78,100.56,34.48,100.85Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 64\'><title>Home for sale</title></path></a>
      <a xlink:href=\'/cope-additions/7/65\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.89\' y=\'22.22\' width=\'43.56\' height=\'24\' alt=\'lot 65\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/66\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'0.89\' width=\'44.15\' height=\'20.44\' alt=\'lot 66\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/67\' id=\'imgLink\' target=\'_self\' ><path class=\'home-for-sale\' d=\'M96.41,53.15h20.15V88.41l7.11,11.26L96.11,116.56S96.11,52.85,96.41,53.15Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 67\'><title>Home for sale</title></path></a>
      <a xlink:href=\'/cope-additions/7/68\' id=\'imgLink\' target=\'_self\' ><path class=\'home-for-sale\' d=\'M96.41,118.93,124.26,102l14.22,22.81v29H96.41S96.7,118.93,96.41,118.93Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 68\'><title>Home for sale</title></path></a>
      <a xlink:href=\'/cope-additions/7/69\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'103.41\' width=\'42.67\' height=\'23.41\' alt=\'lot 69\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/70\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'128.89\' width=\'42.96\' height=\'24.3\' alt=\'lot 70\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/71\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'154.96\' width=\'43.26\' height=\'23.7\' alt=\'lot 71\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/72\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'180.45\' width=\'43.26\' height=\'21.93\' alt=\'lot 72\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/73\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'209.19\' width=\'43.85\' height=\'21.63\' alt=\'lot 73\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/74\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'233.19\' width=\'43.26\' height=\'23.7\' alt=\'lot 74\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/75\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'258.37\' width=\'43.26\' height=\'23.7\' alt=\'lot 75\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/76\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'284.74\' width=\'43.26\' height=\'23.41\' alt=\'lot 76\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/77\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'63.41\' y=\'310.82\' width=\'42.67\' height=\'23.11\' alt=\'lot 77\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/78\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'336.3\' width=\'43.56\' height=\'24\' alt=\'lot 78\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/79\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'362.37\' width=\'43.26\' height=\'23.7\' alt=\'lot 79\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/80\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'387.56\' width=\'43.26\' height=\'24.3\' alt=\'lot 80\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/81\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'413.93\' width=\'42.96\' height=\'24\' alt=\'lot 81\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/82\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.52\' y=\'439.7\' width=\'43.56\' height=\'24.3\' alt=\'lot 82\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/83\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'466.08\' width=\'43.26\' height=\'23.41\' alt=\'lot 83\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/84\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'492.45\' width=\'43.26\' height=\'23.11\' alt=\'lot 84\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/85\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'517.93\' width=\'42.96\' height=\'23.41\' alt=\'lot 85\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/86\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'543.11\' width=\'42.67\' height=\'24\' alt=\'lot 86\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/87\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'63.11\' y=\'569.19\' width=\'43.26\' height=\'24.3\' alt=\'lot 87\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/88\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'595.26\' width=\'42.96\' height=\'24\' alt=\'lot 88\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/89\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'62.81\' y=\'621.63\' width=\'43.26\' height=\'22.81\' alt=\'lot 89\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/90\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'108.74\' y=\'624\' width=\'45.63\' height=\'21.33\' alt=\'lot 90\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/91\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'108.15\' y=\'598.52\' width=\'45.63\' height=\'22.22\' alt=\'lot 91\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/92\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'108.15\' y=\'573.04\' width=\'45.93\' height=\'23.41\' alt=\'lot 92\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/93\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'108.44\' y=\'547.85\' width=\'45.63\' height=\'23.11\' alt=\'lot 93\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/94\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'108.44\' y=\'522.67\' width=\'45.93\' height=\'23.7\' alt=\'lot 94\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/95\' id=\'imgLink\' target=\'_self\' ><polygon class=\'home-for-sale\' points=\'107.85 476.44 149.04 494.52 155.26 508.44 155.26 520.59 108.74 520.59 107.85 476.44\' alt=\'lot 95\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/7/96\' id=\'imgLink\' target=\'_self\' ><path class=\'home-for-sale\' d=\'M141.44,502.93h55.12v30.81l-13,11-42.37-17.48S141.44,502,141.44,502.93Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 96\'><title>Home for sale</title></path></a>
      <a xlink:href=\'/cope-additions/7/97\' id=\'imgLink\' target=\'_self\' ><path class=\'home-for-sale\' d=\'M199.52,502.63h53.92v25.78L212.26,545l-13-10.67S199.52,502,199.52,502.63Z\' transform=\'translate(-33 -53.15)\' alt=\'lot 97\'><title>Home for sale</title></path></a>
      <a xlink:href=\'/cope-additions/7/98\' id=\'imgLink\' target=\'_self\' ><polygon class=\'home-for-sale\' points=\'180.15 494.82 219.85 478.82 219.85 521.78 174.22 521.78 174.22 509.33 180.15 494.82\' alt=\'lot 98\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/7/99\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'174.22\' y=\'523.56\' width=\'45.33\' height=\'23.7\' alt=\'lot 99\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/100\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'173.63\' y=\'548.74\' width=\'45.04\' height=\'23.7\' alt=\'lot 100\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/101\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'173.04\' y=\'574.52\' width=\'45.63\' height=\'22.81\' alt=\'lot 101\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/102\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'173.33\' y=\'599.41\' width=\'45.33\' height=\'23.7\' alt=\'lot 102\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/7/103\' id=\'imgLink\' target=\'_self\' ><rect class=\'home-for-sale\' x=\'173.04\' y=\'624.59\' width=\'45.04\' height=\'21.04\' alt=\'lot 103\'><title>Home for sale</title></rect></a>
    </svg>`,
    SVGStyle:`
      width: 22.35vw;
      margin-top: 2.5%;
      margin-left: 4vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca7.png',
    Click:'show',
    FastFacts:['One-acre lots','Four manufactured home layouts','Near Nevada, TX'],
    Details:'This new community development just outside of Nevada, Texas offers a rural escape from the hectic bustle of the city. With multiple houses, floorplans, and color schemes to choose from, you can find just what you\'re looking for at Providence Point.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:8,
    Title:'CA VIII: Patriot Place',
    AdditionLogo:'/assets/images/logos/patriotplace.png',
    BackgroundImage:'/assets/images/ca8/ca8bg.jpg',
    Color:'#293990',
    BannerText:'Model Home Now Open',
    ButtonText:'Get Directions',
    ButtonLink:'https://www.google.com/maps/dir//6461+FM982,+Princeton,+TX+75407',
    LargeDefault:'<iframe class=\'large-image\' width=\'100%\' height=\'1000px\' src=\'https://my.matterport.com/show/?m=GzcTYhzgwYB&utm_source=4\' frameborder=\'0\' allowfullscreen>          </iframe>',
    DefaultImage:'/assets/images/ca7/Matterport.JPG',
    Images:['/assets/images/ca7/absolute value.jpg','/assets/images/ca7/Absolute Value with Opt.png','/assets/images/ca7/dining den 2.jpg','/assets/images/ca7/Choice.jpg','/assets/images/ca7/Choice with Opt.png','/assets/images/ca7/den dining.jpg','/assets/images/ca7/pt-78.png','/assets/images/ca7/PT-78 colored floorplan.jpg','/assets/images/ca7/living kitchen 2.jpg','/assets/images/ca7/Sundowner.jpg','/assets/images/ca7/Sundowner with Opt.png','/assets/images/ca7/kitchen dining.jpg','/assets/blacklines/ca8/ca8 blackline.JPG'],
    Overlay:'/assets/images/alpha.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.077336067957575%2C-96.50177832646119&z=15',
    SVG:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg8\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 638.22 1834.67\'>
      <a href=\'/cope-additions/8/1-1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' width=\'173.33\' height=\'157.33\' alt=\'lot 1-1\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'186.67\' y=\'5.33\' width=\'122.67\' height=\'152\' alt=\'lot 1-2\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-3\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'home-for-sale\' points=\'321.78 6.22 513.78 8 404.44 139.56 375.11 159.11 321.78 159.11 321.78 6.22\' alt=\'lot 1-3\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/8/1-4\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'home-for-sale\' points=\'528 9.78 630.22 11.56 631.11 87.11 452.44 178.67 417.78 140.44 528 9.78\' alt=\'lot 1-4\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/8/1-5\' id=\'imgLink\' target=\'iframe\' ><polygon class=\'home-for-sale\' points=\'447.11 194.67 631.11 99.56 631.11 247.11 433.78 245.33 432.89 214.22 447.11 194.67\' alt=\'lot 1-5\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/8/1-6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'430.22\' y=\'259.56\' width=\'200\' height=\'95.11\' alt=\'lot 1-6\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-7\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'432\' y=\'369.78\' width=\'198.22\' height=\'91.56\' alt=\'lot 1-7\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-8\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'431.11\' y=\'477.33\' width=\'201.78\' height=\'94.22\' alt=\'lot 1-8\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-9\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'431.11\' y=\'584.89\' width=\'201.78\' height=\'96\' alt=\'lot 1-9\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-10\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'434.67\' y=\'693.33\' width=\'196.44\' height=\'92.44\' alt=\'lot 1-10\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-11\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'432.89\' y=\'799.11\' width=\'202.67\' height=\'95.11\' alt=\'lot 1-11\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-12\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'433.78\' y=\'908.44\' width=\'201.78\' height=\'93.33\' alt=\'lot 1-12\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-13\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'433.78\' y=\'1016\' width=\'200.89\' height=\'93.33\' alt=\'lot 1-13\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-14\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'434.67\' y=\'1124.44\' width=\'200\' height=\'92.44\' alt=\'lot 1-14\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-15\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'434.67\' y=\'1232.89\' width=\'200\' height=\'94.22\' alt=\'lot 1-15\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-16\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'435.56\' y=\'1338.67\' width=\'200.89\' height=\'95.11\' alt=\'lot 1-16\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-17\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'435.56\' y=\'1449.78\' width=\'200.89\' height=\'93.33\' alt=\'lot 1-17\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-18\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'435.56\' y=\'1555.56\' width=\'201.78\' height=\'95.11\' alt=\'lot 1-18\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/1-19\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'436.44\' y=\'1664\' width=\'200.89\' height=\'165.33\' alt=\'lot 1-19\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'6.22\' y=\'1347.56\' width=\'120\' height=\'170.67\' alt=\'lot 2-1\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'137.78\' y=\'1349.33\' width=\'118.22\' height=\'170.67\' alt=\'lot 2-2\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'267.56\' y=\'1347.56\' width=\'121.78\' height=\'172.44\' alt=\'lot 2-3\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'176.89\' y=\'1531.56\' width=\'213.33\' height=\'90.67\' alt=\'lot 2-4\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'176\' y=\'1638.22\' width=\'215.11\' height=\'92.44\' alt=\'lot 2-5\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'177.78\' y=\'1744\' width=\'214.22\' height=\'87.11\' alt=\'lot 2-6\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-7\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'5.33\' y=\'1689.78\' width=\'162.67\' height=\'142.22\' alt=\'lot 2-7\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/2-8\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'7.11\' y=\'1533.33\' width=\'160\' height=\'144.89\' alt=\'lot 2-8\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/3-1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'4.44\' y=\'965.33\' width=\'121.78\' height=\'162.67\' alt=\'lot 3-1\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/3-2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'136\' y=\'963.56\' width=\'120\' height=\'164.44\' alt=\'lot 3-2\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/3-3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'267.56\' y=\'962.67\' width=\'120.89\' height=\'162.67\' alt=\'lot 3-3\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/3-4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'5.33\' y=\'1140.44\' width=\'120\' height=\'161.78\' alt=\'lot 3-4\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/3-5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'136.89\' y=\'1138.67\' width=\'118.22\' height=\'161.78\' alt=\'lot 3-5\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/3-6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'268.44\' y=\'1136.89\' width=\'119.11\' height=\'163.56\' alt=\'lot 3-6\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/4-1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'4.44\' y=\'585.78\' width=\'120\' height=\'159.11\' alt=\'lot 4-1\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/4-2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'133.33\' y=\'584.89\' width=\'120.89\' height=\'159.11\' alt=\'lot 4-2\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/4-3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'263.11\' y=\'584\' width=\'121.78\' height=\'155.56\' alt=\'lot 4-3\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/4-4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'1.78\' y=\'758.22\' width=\'123.56\' height=\'159.11\' alt=\'lot 4-4\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/4-5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'132.44\' y=\'758.22\' width=\'122.67\' height=\'159.11\' alt=\'lot 4-5\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/4-6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'264\' y=\'757.33\' width=\'122.67\' height=\'160.89\' alt=\'lot 4-6\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/5-1\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'0.89\' y=\'203.56\' width=\'120\' height=\'159.11\' alt=\'lot 5-1\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/5-2\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'130.67\' y=\'201.78\' width=\'123.56\' height=\'163.56\' alt=\'lot 5-2\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/5-3\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'264\' y=\'204.44\' width=\'121.78\' height=\'158.22\' alt=\'lot 5-3\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/5-4\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'3.56\' y=\'378.67\' width=\'118.22\' height=\'160\' alt=\'lot 5-4\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/5-5\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'134.22\' y=\'377.78\' width=\'119.11\' height=\'160\' alt=\'lot 5-5\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/8/5-6\' id=\'imgLink\' target=\'iframe\' ><rect class=\'home-for-sale\' x=\'264\' y=\'376\' width=\'123.56\' height=\'160.89\' alt=\'lot 5-6\'><title>Home for sale</title></rect></a>
    </svg>`,
    SVGMobile:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg8\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 638.22 1834.67\'>
      <a xlink:href=\'/cope-additions/8/1-1\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' width=\'173.33\' height=\'157.33\' alt=\'lot 1-1\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-2\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'186.67\' y=\'5.33\' width=\'122.67\' height=\'152\' alt=\'lot 1-2\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-3\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'321.78 6.22 513.78 8 404.44 139.56 375.11 159.11 321.78 159.11 321.78 6.22\' alt=\'lot 1-3\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/8/1-4\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'528 9.78 630.22 11.56 631.11 87.11 452.44 178.67 417.78 140.44 528 9.78\' alt=\'lot 1-4\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/8/1-5\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'447.11 194.67 631.11 99.56 631.11 247.11 433.78 245.33 432.89 214.22 447.11 194.67\' alt=\'lot 1-5\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/8/1-6\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'430.22\' y=\'259.56\' width=\'200\' height=\'95.11\' alt=\'lot 1-6\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-7\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'432\' y=\'369.78\' width=\'198.22\' height=\'91.56\' alt=\'lot 1-7\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-8\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'431.11\' y=\'477.33\' width=\'201.78\' height=\'94.22\' alt=\'lot 1-8\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-9\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'431.11\' y=\'584.89\' width=\'201.78\' height=\'96\' alt=\'lot 1-9\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-10\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'434.67\' y=\'693.33\' width=\'196.44\' height=\'92.44\' alt=\'lot 1-10\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-11\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'432.89\' y=\'799.11\' width=\'202.67\' height=\'95.11\' alt=\'lot 1-11\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-12\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'433.78\' y=\'908.44\' width=\'201.78\' height=\'93.33\' alt=\'lot 1-12\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-13\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'433.78\' y=\'1016\' width=\'200.89\' height=\'93.33\' alt=\'lot 1-13\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-14\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'434.67\' y=\'1124.44\' width=\'200\' height=\'92.44\' alt=\'lot 1-14\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-15\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'434.67\' y=\'1232.89\' width=\'200\' height=\'94.22\' alt=\'lot 1-15\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-16\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'435.56\' y=\'1338.67\' width=\'200.89\' height=\'95.11\' alt=\'lot 1-16\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-17\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'435.56\' y=\'1449.78\' width=\'200.89\' height=\'93.33\' alt=\'lot 1-17\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-18\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'435.56\' y=\'1555.56\' width=\'201.78\' height=\'95.11\' alt=\'lot 1-18\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/1-19\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'436.44\' y=\'1664\' width=\'200.89\' height=\'165.33\' alt=\'lot 1-19\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-1\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'6.22\' y=\'1347.56\' width=\'120\' height=\'170.67\' alt=\'lot 2-1\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-2\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'137.78\' y=\'1349.33\' width=\'118.22\' height=\'170.67\' alt=\'lot 2-2\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-3\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'267.56\' y=\'1347.56\' width=\'121.78\' height=\'172.44\' alt=\'lot 2-3\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-4\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'176.89\' y=\'1531.56\' width=\'213.33\' height=\'90.67\' alt=\'lot 2-4\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-5\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'176\' y=\'1638.22\' width=\'215.11\' height=\'92.44\' alt=\'lot 2-5\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-6\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'177.78\' y=\'1744\' width=\'214.22\' height=\'87.11\' alt=\'lot 2-6\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-7\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'5.33\' y=\'1689.78\' width=\'162.67\' height=\'142.22\' alt=\'lot 2-7\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/2-8\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'7.11\' y=\'1533.33\' width=\'160\' height=\'144.89\' alt=\'lot 2-8\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/3-1\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'4.44\' y=\'965.33\' width=\'121.78\' height=\'162.67\' alt=\'lot 3-1\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/3-2\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'136\' y=\'963.56\' width=\'120\' height=\'164.44\' alt=\'lot 3-2\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/3-3\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'267.56\' y=\'962.67\' width=\'120.89\' height=\'162.67\' alt=\'lot 3-3\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/3-4\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'5.33\' y=\'1140.44\' width=\'120\' height=\'161.78\' alt=\'lot 3-4\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/3-5\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'136.89\' y=\'1138.67\' width=\'118.22\' height=\'161.78\' alt=\'lot 3-5\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/3-6\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'268.44\' y=\'1136.89\' width=\'119.11\' height=\'163.56\' alt=\'lot 3-6\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/4-1\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'4.44\' y=\'585.78\' width=\'120\' height=\'159.11\' alt=\'lot 4-1\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/4-2\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'133.33\' y=\'584.89\' width=\'120.89\' height=\'159.11\' alt=\'lot 4-2\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/4-3\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'263.11\' y=\'584\' width=\'121.78\' height=\'155.56\' alt=\'lot 4-3\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/4-4\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'1.78\' y=\'758.22\' width=\'123.56\' height=\'159.11\' alt=\'lot 4-4\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/4-5\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'132.44\' y=\'758.22\' width=\'122.67\' height=\'159.11\' alt=\'lot 4-5\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/4-6\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'264\' y=\'757.33\' width=\'122.67\' height=\'160.89\' alt=\'lot 4-6\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/5-1\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'0.89\' y=\'203.56\' width=\'120\' height=\'159.11\' alt=\'lot 5-1\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/5-2\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'130.67\' y=\'201.78\' width=\'123.56\' height=\'163.56\' alt=\'lot 5-2\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/5-3\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'264\' y=\'204.44\' width=\'121.78\' height=\'158.22\' alt=\'lot 5-3\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/5-4\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'3.56\' y=\'378.67\' width=\'118.22\' height=\'160\' alt=\'lot 5-4\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/5-5\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'134.22\' y=\'377.78\' width=\'119.11\' height=\'160\' alt=\'lot 5-5\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/8/5-6\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'264\' y=\'376\' width=\'123.56\' height=\'160.89\' alt=\'lot 5-6\'><title>Home for sale</title></rect></a>
    </svg>`,
    SVGStyle:`
      width: 25.5vw;
      margin-top: 2.25%;
      margin-left: 3vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca8.png',
    Click:'show',
    FastFacts:['One-acre lots','Four manufactured home layouts','Princeton schools','10 minutes to Allen and McKinney','45 minutes to Dallas','<a href=\'https://princetontx.gov/\'>Learn about Princeton</a>'],
    Details:'This new community development just outside of Princeton offers a rural escape with easy access to the nearby cities. Princeton is an ideal commuter town with new ammenities being added all the time. Patriot Place is just minutes from downtown Princeton, Lucas, and McKinney, and the nearby lake parks and docks. With multiple houses, floorplans, and color schemes to choose from, you can find just what you\'re looking for here.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:9,
    Title:'Cope Addition IX: Sherwood Forest',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca9/ca9bg.jpg',
    Color:'#9F1F63',
    BannerText:'New Homes from $109,000',
    ButtonText:'Now Selling',
    ButtonLink:'/assets/blacklines/ca9/ca9blackline.JPG',
    LargeDefault:'<iframe class=\'large-image\' width=\'100%\' height=\'1000px\' src=\'https://my.matterport.com/show/?m=GzcTYhzgwYB&utm_source=4\' frameborder=\'0\' allowfullscreen>          </iframe>',
    DefaultImage:'/assets/images/ca7/Matterport.JPG',
    Images:['/assets/images/ca9/area map.jpg','/assets/images/ca7/absolute value.jpg','/assets/images/ca7/Absolute Value with Opt.png','/assets/images/ca7/dining den 2.jpg','/assets/images/ca7/Choice.jpg','/assets/images/ca7/Choice with Opt.png','/assets/images/ca7/den dining.jpg','/assets/images/ca7/pt-78.png','/assets/images/ca7/PT-78 colored floorplan.jpg','/assets/images/ca7/living kitchen 2.jpg','/assets/images/ca7/Sundowner.jpg','/assets/images/ca7/Sundowner with Opt.png','/assets/images/ca7/kitchen dining.jpg','/assets/blacklines/ca9/ca9 black line.jpg'],
    Overlay:'/assets/images/alpha.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=32.42400770622924%2C-95.22881021467384&z=13',
    SVG:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg9\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 638.38 1307.87\'>
      <a href=\'/cope-additions/9/1\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'0 169.14 36.78 151.73 52.53 185.77 24.84 219.62 0 169.14\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/2\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'38.84 150.86 73.27 134.22 98.9 188.8 54.88 185.19 38.84 150.86\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/3\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'75.03 133.44 107.9 117.98 133.63 173.35 101.15 188.8 75.03 133.44\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/4\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'109.47 117 143.12 101.15 169.44 157.11 136.08 173.15 109.47 117\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/5\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'144.78 100.56 178.53 84.81 204.75 141.26 171.29 156.33 144.78 100.56\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/6\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'179.9 83.94 211.7 68.97 238.21 125.41 206.31 140.38 179.9 83.94\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/7\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'213.16 68.28 256.21 48.23 269.8 111.13 239.87 125.12 213.16 68.28\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/8\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'307.17 25.43 364.3 0 375.16 51.26 315 63.49 307.17 25.43\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/9\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'315.39 65.35 375.65 53.31 383.09 89.22 323.49 101.64 315.39 65.35\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/10\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'323.49 103.79 383.67 91.66 391.3 128.45 331.37 140.48 323.49 103.79\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/11\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'331.37 142.44 391.89 130.01 399.94 167.48 339.26 179.31 331.37 142.44\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/12\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'339.65 181.08 399.94 169.24 407.25 204.59 347.28 217.08 339.65 181.08\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/13\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'347.67 218.54 407.25 206.02 415.37 243.49 355.6 256.11 347.67 218.54\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/14\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'355.79 257.97 415.37 245.25 423.49 282.52 363.72 294.95 355.79 257.97\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/15\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'364.11 296.8 423.98 284.48 431.8 322.24 371.84 334.96 364.11 296.8\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/16\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'372.33 336.33 432.29 323.8 440.22 361.56 380.05 373.21 372.33 336.33\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/17\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'380.64 375.13 440.22 363.65 447.55 398.09 388.21 410.74 380.64 375.13\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/18\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'388.92 413.09 447.55 400.17 455.64 436.7 395.9 449.22 388.92 413.09\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/19\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'396.42 451.04 456.29 438.65 463.99 476.22 404.51 488.35 396.42 451.04\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/20\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'404.64 490.04 463.99 477.65 472.08 514.57 412.73 528.39 404.64 490.04\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/21\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'412.99 530.23 472.73 516.51 480.42 553.7 420.95 567.26 412.99 530.23\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/22\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'421.34 569.22 480.42 555.78 489.16 593.87 429.58 607.57 421.34 569.22\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/23\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'429.58 609.13 489.16 595.83 496.73 632.87 437.12 644.61 429.58 609.13\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/24\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'437.51 646.83 496.73 634.83 504.69 671.35 445.34 683.22 437.51 646.83\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/25\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'445.6 685.3 505.34 673.43 512.9 709.57 453.03 721.57 445.6 685.3\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/26\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'453.69 723.26 513.29 711 521.12 748.17 461.25 760.57 453.69 723.26\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/27\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'461.77 762.26 521.12 749.87 528.95 786.26 469.47 798.52 461.77 762.26\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/28\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'469.6 800.09 528.95 788.22 538.08 831.26 478.99 843.65 469.6 800.09\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/29\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'479.51 845.61 538.6 833.09 548.12 876.91 488.51 889.57 479.51 845.61\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/30\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'489.03 891.39 548.12 879.39 557.12 922.04 498.03 933.52 489.03 891.39\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/33\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'507.69 978.92 565.21 966.78 576.03 1016.73 517.99 1028.35 507.69 978.92\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/34\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'518.51 1030.3 576.03 1018.83 595.21 1106.35 529.73 1085.09 518.51 1030.3\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/35\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'557.12 1217.35 623.9 1240.04 638.38 1307.87 571.6 1286.09 557.12 1217.35\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/36\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'466.73 1189.43 491.62 1197.52 503.25 1252.7 498.55 1255.7 450.16 1239.29 466.73 1189.43\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/37\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'428.64 1176.52 464.87 1188.64 448.21 1239 412.73 1226.61 428.64 1176.52\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/38\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'391.99 1164.78 427.21 1176 411.29 1226.22 375.29 1213.66 391.99 1164.78\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/39\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'357.69 1153.17 389.9 1164 373.79 1213.66 341.38 1202.74 357.69 1153.17\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/40\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'312.39 1152.26 345.03 1162.7 332.38 1199.48 301.08 1188.64 312.39 1152.26\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/41\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'275.12 1140.26 311.12 1151.74 299.64 1188.64 263.9 1175.87 275.12 1140.26\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/42\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'238.21 1127.69 273.55 1139.61 262.08 1175.87 236.94 1166.87 229.34 1154.85 238.21 1127.69\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/43\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'196.08 1114.57 236.11 1127.69 227.9 1153.83 195.16 1141.23 196.08 1114.57\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/44\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'105.95 1070.35 147.55 1084.3 148.34 1099.3 193.99 1113.91 193.08 1141.23 171.29 1149.26 105.95 1103.09 105.95 1070.35\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/45\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'428.64 987 448.73 993.91 463.6 1063.83 409.99 1046.22 428.64 987\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/46\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'391.47 974.74 426.55 986.35 408.16 1045.57 372.81 1034.09 391.47 974.74\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/47\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'354.42 962.35 389.77 974.09 370.86 1033.3 335.51 1021.7 354.42 962.35\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/48\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'321.03 951.39 352.47 962.35 333.29 1021.17 301.6 1010.87 321.03 951.39\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/49\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'280.86 938.22 311.77 948.39 292.6 1007.61 261.5 997.83 280.86 938.22\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/50\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'243.29 926.48 279.29 938.22 259.34 996.78 223.86 985.43 243.29 926.48\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/51\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'204.95 914.35 241.08 925.83 222.03 984.39 186.69 972.91 204.95 914.35\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/52\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'169.99 903.13 203.38 913.83 184.47 972.91 142.6 958.96 169.99 903.13\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/53\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'116.64 904.57 164.32 880.3 164.32 901.57 167.77 903.13 141.03 957.65 116.64 950.22 116.64 904.57\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/54\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'115.86 844.43 163.73 844.43 164.32 876.91 116.64 901.96 115.86 844.43\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/55\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'115.86\' y=\'805.57\' width=\'47.87\' height=\'36.26\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/56\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'115.86\' y=\'766.7\' width=\'47.87\' height=\'36.26\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/57\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'114.96\' y=\'730.7\' width=\'48.24\' height=\'33.52\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/58\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'114.14\' y=\'688.43\' width=\'48.62\' height=\'33.13\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/59\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'114.14\' y=\'653.61\' width=\'48.62\' height=\'32.22\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/60\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'114.14\' y=\'610.43\' width=\'47.41\' height=\'32.74\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/61\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'113.54\' y=\'569.87\' width=\'48.01\' height=\'37.43\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/62\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'112.19\' y=\'530.23\' width=\'49.35\' height=\'36.64\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/63\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'112.19\' y=\'493.04\' width=\'49.35\' height=\'34.3\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/64\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'110.85\' y=\'449.35\' width=\'49.75\' height=\'33.13\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/65\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'110.85\' y=\'409.96\' width=\'48.78\' height=\'36.26\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/66\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'110.85\' y=\'371.48\' width=\'48.78\' height=\'36\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/67\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'109.53\' y=\'332.22\' width=\'49.24\' height=\'37.17\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/68\' id=\'imgLink\' target=\'iframe\'><rect class=\'home-for-sale\' x=\'110.12\' y=\'292.17\' width=\'47.87\' height=\'36.91\'><title>Home for sale</title></rect></a>
      <a href=\'/cope-additions/9/69\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'113.12 249.39 150.81 229.44 156.55 233.35 157.47 289.44 110.12 290.09 110.12 256.17 113.12 249.39\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/70\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'215.4 200.87 269.08 177.26 278.85 181.96 288.29 226.83 216.5 242.09 215.4 200.87\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/71\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'254.25 243.26 290.38 234.65 310.34 330.75 264.42 340.83 254.25 243.26\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/72\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'262.6 343.56 311.25 333.39 319.08 370.47 267.69 380.87 262.6 343.56\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/73\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'267.81 382.96 319.86 372.65 327.55 408.9 272.38 419.61 267.81 382.96\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/74\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'272.77 421.96 328.08 411.13 335.38 446.22 277.6 459 272.77 421.96\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/75\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'279.42 460.5 336.03 448.83 343.83 483.78 283.6 497.35 279.42 460.5\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/76\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'283.73 499.04 343.83 486.13 351.29 522.13 287.98 535.83 283.73 499.04\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/77\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'287.98 538.04 351.81 524.48 359.12 556.83 291.75 571.04 287.98 538.04\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/78\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'292.73 581.09 361.47 566.87 367.34 597.52 296.51 613.3 292.73 581.09\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/79\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'296.77 615.52 367.34 600.13 373.34 631.57 300.19 646.96 296.77 615.52\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/80\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'301.67 656.87 376.08 641.61 382.47 672.89 304.73 688.3 301.67 656.87\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/81\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'305.12 690.65 382.47 674.48 390.03 709.17 309.25 726.52 305.12 690.65\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/82\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'309.25 728.61 390.55 711 397.6 744.81 313.73 763.7 309.25 728.61\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/83\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'313.73 766.04 398.25 747.65 406.34 786.91 318.29 805.96 313.73 766.04\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/84\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'317.64 808.04 406.34 789.26 420.16 853.17 319.34 816.91 317.64 808.04\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/85\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'411.16 853.17 420.16 856.17 434.64 923.17 431.12 925.7 390.81 912.78 411.16 853.17\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/86\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'373.99 840.78 408.55 852.13 388.92 912.13 354.81 901.17 373.99 840.78\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/87\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'341.51 829.96 372.16 840 352.99 900.39 322.34 890.61 341.51 829.96\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/88\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'302.64 817.43 330.81 831 314.25 887.38 282.55 877.83 302.64 817.43\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/89\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'265.97 805.96 300.19 816.91 280.99 876.91 246.81 866.22 265.97 805.96\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/90\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'222.95 791.61 263.64 805.57 244.86 865.17 223.99 858.88 222.95 791.61\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/91\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'222.95 766.7 303.03 766.7 309.25 817.43 222.95 789.26 222.95 766.7\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/92\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'222.95 729.13 299.25 729.13 302.9 763.04 222.95 764.22 222.95 729.13\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/93\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'221.38 691.17 295.08 691.17 298.99 726.18 221.38 726.52 221.38 691.17\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/94\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'221.38 657.52 291.75 657 294.95 688.43 222.03 688.43 221.38 657.52\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/95\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'220.47 616.83 287.12 616.83 291.26 646.96 221.38 647.48 220.47 616.83\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/96\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'219.29 581.22 282.81 581.22 286.99 614.26 220.47 614.26 219.29 581.22\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/97\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'220.08 538.96 277.73 538.43 280.73 571.04 220.08 571.7 220.08 538.96\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/98\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'219.42 499.83 274.16 499.83 277.47 535.83 220.08 536.35 219.42 499.83\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/99\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'219.42 461.48 270.03 461.48 274.16 497.35 219.42 497.87 219.42 461.48\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/100\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'217.5 343.83 253.73 343.83 267.16 459 218.9 459 217.5 343.83\'><title>Home for sale</title></polygon></a>
      <a href=\'/cope-additions/9/101\' id=\'imgLink\' target=\'iframe\'><polygon class=\'home-for-sale\' points=\'216.5 251.48 245.64 246.26 255.95 341.74 217.5 341.74 216.5 251.48\'><title>Home for sale</title></polygon></a>
    </svg>
    `,
    SVGMobile:`
    <svg class=\'svg\' fill=\'transparent\' id=\'svg9\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 638.38 1307.87\'>
      <a xlink:href=\'/cope-additions/9/1\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'0 169.14 36.78 151.73 52.53 185.77 24.84 219.62 0 169.14\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/2\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'38.84 150.86 73.27 134.22 98.9 188.8 54.88 185.19 38.84 150.86\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/3\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'75.03 133.44 107.9 117.98 133.63 173.35 101.15 188.8 75.03 133.44\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/4\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'109.47 117 143.12 101.15 169.44 157.11 136.08 173.15 109.47 117\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/5\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'144.78 100.56 178.53 84.81 204.75 141.26 171.29 156.33 144.78 100.56\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/6\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'179.9 83.94 211.7 68.97 238.21 125.41 206.31 140.38 179.9 83.94\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/7\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'213.16 68.28 256.21 48.23 269.8 111.13 239.87 125.12 213.16 68.28\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/8\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'307.17 25.43 364.3 0 375.16 51.26 315 63.49 307.17 25.43\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/9\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'315.39 65.35 375.65 53.31 383.09 89.22 323.49 101.64 315.39 65.35\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/10\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'323.49 103.79 383.67 91.66 391.3 128.45 331.37 140.48 323.49 103.79\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/11\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'331.37 142.44 391.89 130.01 399.94 167.48 339.26 179.31 331.37 142.44\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/12\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'339.65 181.08 399.94 169.24 407.25 204.59 347.28 217.08 339.65 181.08\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/13\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'347.67 218.54 407.25 206.02 415.37 243.49 355.6 256.11 347.67 218.54\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/14\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'355.79 257.97 415.37 245.25 423.49 282.52 363.72 294.95 355.79 257.97\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/15\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'364.11 296.8 423.98 284.48 431.8 322.24 371.84 334.96 364.11 296.8\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/16\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'372.33 336.33 432.29 323.8 440.22 361.56 380.05 373.21 372.33 336.33\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/17\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'380.64 375.13 440.22 363.65 447.55 398.09 388.21 410.74 380.64 375.13\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/18\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'388.92 413.09 447.55 400.17 455.64 436.7 395.9 449.22 388.92 413.09\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/19\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'396.42 451.04 456.29 438.65 463.99 476.22 404.51 488.35 396.42 451.04\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/20\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'404.64 490.04 463.99 477.65 472.08 514.57 412.73 528.39 404.64 490.04\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/21\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'412.99 530.23 472.73 516.51 480.42 553.7 420.95 567.26 412.99 530.23\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/22\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'421.34 569.22 480.42 555.78 489.16 593.87 429.58 607.57 421.34 569.22\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/23\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'429.58 609.13 489.16 595.83 496.73 632.87 437.12 644.61 429.58 609.13\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/24\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'437.51 646.83 496.73 634.83 504.69 671.35 445.34 683.22 437.51 646.83\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/25\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'445.6 685.3 505.34 673.43 512.9 709.57 453.03 721.57 445.6 685.3\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/26\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'453.69 723.26 513.29 711 521.12 748.17 461.25 760.57 453.69 723.26\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/27\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'461.77 762.26 521.12 749.87 528.95 786.26 469.47 798.52 461.77 762.26\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/28\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'469.6 800.09 528.95 788.22 538.08 831.26 478.99 843.65 469.6 800.09\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/29\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'479.51 845.61 538.6 833.09 548.12 876.91 488.51 889.57 479.51 845.61\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/30\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'489.03 891.39 548.12 879.39 557.12 922.04 498.03 933.52 489.03 891.39\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/33\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'507.69 978.92 565.21 966.78 576.03 1016.73 517.99 1028.35 507.69 978.92\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/34\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'518.51 1030.3 576.03 1018.83 595.21 1106.35 529.73 1085.09 518.51 1030.3\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/35\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'557.12 1217.35 623.9 1240.04 638.38 1307.87 571.6 1286.09 557.12 1217.35\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/36\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'466.73 1189.43 491.62 1197.52 503.25 1252.7 498.55 1255.7 450.16 1239.29 466.73 1189.43\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/37\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'428.64 1176.52 464.87 1188.64 448.21 1239 412.73 1226.61 428.64 1176.52\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/38\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'391.99 1164.78 427.21 1176 411.29 1226.22 375.29 1213.66 391.99 1164.78\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/39\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'357.69 1153.17 389.9 1164 373.79 1213.66 341.38 1202.74 357.69 1153.17\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/40\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'312.39 1152.26 345.03 1162.7 332.38 1199.48 301.08 1188.64 312.39 1152.26\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/41\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'275.12 1140.26 311.12 1151.74 299.64 1188.64 263.9 1175.87 275.12 1140.26\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/42\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'238.21 1127.69 273.55 1139.61 262.08 1175.87 236.94 1166.87 229.34 1154.85 238.21 1127.69\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/43\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'196.08 1114.57 236.11 1127.69 227.9 1153.83 195.16 1141.23 196.08 1114.57\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/44\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'105.95 1070.35 147.55 1084.3 148.34 1099.3 193.99 1113.91 193.08 1141.23 171.29 1149.26 105.95 1103.09 105.95 1070.35\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/45\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'428.64 987 448.73 993.91 463.6 1063.83 409.99 1046.22 428.64 987\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/46\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'391.47 974.74 426.55 986.35 408.16 1045.57 372.81 1034.09 391.47 974.74\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/47\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'354.42 962.35 389.77 974.09 370.86 1033.3 335.51 1021.7 354.42 962.35\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/48\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'321.03 951.39 352.47 962.35 333.29 1021.17 301.6 1010.87 321.03 951.39\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/49\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'280.86 938.22 311.77 948.39 292.6 1007.61 261.5 997.83 280.86 938.22\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/50\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'243.29 926.48 279.29 938.22 259.34 996.78 223.86 985.43 243.29 926.48\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/51\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'204.95 914.35 241.08 925.83 222.03 984.39 186.69 972.91 204.95 914.35\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/52\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'169.99 903.13 203.38 913.83 184.47 972.91 142.6 958.96 169.99 903.13\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/53\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'116.64 904.57 164.32 880.3 164.32 901.57 167.77 903.13 141.03 957.65 116.64 950.22 116.64 904.57\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/54\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'115.86 844.43 163.73 844.43 164.32 876.91 116.64 901.96 115.86 844.43\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/55\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'115.86\' y=\'805.57\' width=\'47.87\' height=\'36.26\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/56\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'115.86\' y=\'766.7\' width=\'47.87\' height=\'36.26\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/57\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'114.96\' y=\'730.7\' width=\'48.24\' height=\'33.52\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/58\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'114.14\' y=\'688.43\' width=\'48.62\' height=\'33.13\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/59\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'114.14\' y=\'653.61\' width=\'48.62\' height=\'32.22\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/60\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'114.14\' y=\'610.43\' width=\'47.41\' height=\'32.74\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/61\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'113.54\' y=\'569.87\' width=\'48.01\' height=\'37.43\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/62\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'112.19\' y=\'530.23\' width=\'49.35\' height=\'36.64\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/63\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'112.19\' y=\'493.04\' width=\'49.35\' height=\'34.3\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/64\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'110.85\' y=\'449.35\' width=\'49.75\' height=\'33.13\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/65\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'110.85\' y=\'409.96\' width=\'48.78\' height=\'36.26\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/66\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'110.85\' y=\'371.48\' width=\'48.78\' height=\'36\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/67\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'109.53\' y=\'332.22\' width=\'49.24\' height=\'37.17\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/68\' id=\'imgLink\' target=\'_self\'><rect class=\'home-for-sale\' x=\'110.12\' y=\'292.17\' width=\'47.87\' height=\'36.91\'><title>Home for sale</title></rect></a>
      <a xlink:href=\'/cope-additions/9/69\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'113.12 249.39 150.81 229.44 156.55 233.35 157.47 289.44 110.12 290.09 110.12 256.17 113.12 249.39\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/70\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'215.4 200.87 269.08 177.26 278.85 181.96 288.29 226.83 216.5 242.09 215.4 200.87\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/71\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'254.25 243.26 290.38 234.65 310.34 330.75 264.42 340.83 254.25 243.26\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/72\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'262.6 343.56 311.25 333.39 319.08 370.47 267.69 380.87 262.6 343.56\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/73\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'267.81 382.96 319.86 372.65 327.55 408.9 272.38 419.61 267.81 382.96\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/74\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'272.77 421.96 328.08 411.13 335.38 446.22 277.6 459 272.77 421.96\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/75\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'279.42 460.5 336.03 448.83 343.83 483.78 283.6 497.35 279.42 460.5\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/76\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'283.73 499.04 343.83 486.13 351.29 522.13 287.98 535.83 283.73 499.04\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/77\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'287.98 538.04 351.81 524.48 359.12 556.83 291.75 571.04 287.98 538.04\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/78\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'292.73 581.09 361.47 566.87 367.34 597.52 296.51 613.3 292.73 581.09\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/79\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'296.77 615.52 367.34 600.13 373.34 631.57 300.19 646.96 296.77 615.52\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/80\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'301.67 656.87 376.08 641.61 382.47 672.89 304.73 688.3 301.67 656.87\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/81\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'305.12 690.65 382.47 674.48 390.03 709.17 309.25 726.52 305.12 690.65\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/82\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'309.25 728.61 390.55 711 397.6 744.81 313.73 763.7 309.25 728.61\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/83\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'313.73 766.04 398.25 747.65 406.34 786.91 318.29 805.96 313.73 766.04\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/84\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'317.64 808.04 406.34 789.26 420.16 853.17 319.34 816.91 317.64 808.04\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/85\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'411.16 853.17 420.16 856.17 434.64 923.17 431.12 925.7 390.81 912.78 411.16 853.17\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/86\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'373.99 840.78 408.55 852.13 388.92 912.13 354.81 901.17 373.99 840.78\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/87\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'341.51 829.96 372.16 840 352.99 900.39 322.34 890.61 341.51 829.96\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/88\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'302.64 817.43 330.81 831 314.25 887.38 282.55 877.83 302.64 817.43\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/89\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'265.97 805.96 300.19 816.91 280.99 876.91 246.81 866.22 265.97 805.96\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/90\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'222.95 791.61 263.64 805.57 244.86 865.17 223.99 858.88 222.95 791.61\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/91\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'222.95 766.7 303.03 766.7 309.25 817.43 222.95 789.26 222.95 766.7\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/92\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'222.95 729.13 299.25 729.13 302.9 763.04 222.95 764.22 222.95 729.13\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/93\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'221.38 691.17 295.08 691.17 298.99 726.18 221.38 726.52 221.38 691.17\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/94\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'221.38 657.52 291.75 657 294.95 688.43 222.03 688.43 221.38 657.52\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/95\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'220.47 616.83 287.12 616.83 291.26 646.96 221.38 647.48 220.47 616.83\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/96\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'219.29 581.22 282.81 581.22 286.99 614.26 220.47 614.26 219.29 581.22\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/97\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'220.08 538.96 277.73 538.43 280.73 571.04 220.08 571.7 220.08 538.96\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/98\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'219.42 499.83 274.16 499.83 277.47 535.83 220.08 536.35 219.42 499.83\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/99\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'219.42 461.48 270.03 461.48 274.16 497.35 219.42 497.87 219.42 461.48\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/100\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'217.5 343.83 253.73 343.83 267.16 459 218.9 459 217.5 343.83\'><title>Home for sale</title></polygon></a>
      <a xlink:href=\'/cope-additions/9/101\' id=\'imgLink\' target=\'_self\'><polygon class=\'home-for-sale\' points=\'216.5 251.48 245.64 246.26 255.95 341.74 217.5 341.74 216.5 251.48\'><title>Home for sale</title></polygon></a>
    </svg>
    `,
    SVGStyle:`
      width: 27.5vw;
      margin-top: 18.65%;
      margin-left: 2vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca9.png',
    Click:'show',
    FastFacts:['Tyler, TX','Quickly expanding city','5 minutes from downtown','<a href=\'http://www.cityoftyler.org/\'>Learn about Tyler</a>'],
    Details:'The beautiful wooded development of Sherwood Forest boasts 101 lots with manufactured houses from Clayton Homes of Sulphur Springs, ready with paved roads and underground utilities. Starting at $109,000, these homes are selling for more than $40,000 less than the area average; with 1,500 to 2,000 square feet, that’s a steal! Just a five minute drive from downtown Tyler, and with protective deed restrictions, your new home can be ready as soon as Spring of 2019.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:10,
    Title:'Cope Addition X: Monticello',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca10/ca10bg.jpg',
    Color:'#07673A',
    BannerText:'Contruction begins fall 2019',
    ButtonText:'Details',
    ButtonLink:'/assets/blacklines/ca10/ca10blackline.JPG',
    LargeDefault:'<iframe class=\'large-image\' width=\'1280\' height=\'720\' src=\'https://www.youtube.com/embed/4VtsCxAzhGM?rel=0\' frameborder=\'0\' allow=\'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>',
    DefaultImage:'/assets/images/ca10/videoimage.JPG',
    Images:['/assets/images/ca10/ca10 data photo.jpg','/assets/images/ca10/CA10 Entrance Perspective.jpg','/assets/images/ca10/ca10bg.jpg','/assets/blacklines/ca10/ca10blackline.jpg','/assets/images/ca10/6plex.JPG','/assets/images/ca10/floorplans.jpg'],
    Overlay:'/assets/images/alpha.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.18197591139968%2C-96.50951048268962&z=14',
    SVG:``,
    SVGMobile:``,
    SVGStyle:`
      width: 32.5vw;
      margin-top: 2.25%;
      margin-left: 3vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca10.png',
    Click:'hide',
    FastFacts:['60-acres of single-family residential','300 new homes','325 new apartment units','75 new townhomes','Dozens of shops and restaurants','Lifestyle center','Princeton, TX','10 minutes to Allen and McKinney','45 minutes to Dallas'],
    Details:'Monticello is the ideal place to live, work, and play. A lifestyle center rivaling Villages of Fairview, the Shops at Legacy in Plano, Tanger Outlets in Fort Worth, and Arlington Highlands, Monticello offers everything. You can shop at the dozens of outlets, eat at the many restaurants, and even get your groceries around the corner. You can play with your children or watch them have a ball at the splash pad and then go for ice cream just steps away. And all of this is within walking distance of your beautiful new home.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642
    ,ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  },
  {
    id:11,
    Title:'CA XI: Cope Tower',
    AdditionLogo:'/assets/images/alpha.png',
    BackgroundImage:'/assets/images/ca11/ca11bg.jpg',
    Color:'#3EBD9B',
    BannerText:'Project in development',
    ButtonText:'Details',
    ButtonLink:'/assets/cope-tower.pdf',
    LargeDefault:'<img class=\'large-image\' src=\'/assets/images/ca11/ca11bg.jpg\' alt=\'ca11\'>',
    DefaultImage:'',
    Images:[''],
    Overlay:'/assets/images/alpha.png',
    Map:'https://www.google.com/maps/d/embed?mid=1UCoFUVlrDk2vQk4tRC5vDe4mTR9rHq2z&ll=33.12401672223453%2C-96.66043595060148&z=14',
    SVG:``,
    SVGMobile:``,
    SVGStyle:`
      width: 32.5vw;
      margin-top: 2.25%;
      margin-left: 3vw;
      position: absolute;
      z-index: 4;
      cursor: pointer;
      pointer-events: all;`,
    Plat:'/assets/images/plats/ca11.png',
    Click:'hide',
    FastFacts:['Fairview, TX','<a href=\'https://www.fairviewtowncenter.com/\'>Inside the Fairview Town Center</a>','11 story mixed-use building','In design phase'],
    Details:'The new Cope Tower will feature ground-floor retail, 5 stories of office space, and 4 stories of high-end residential in Fairview\'s exquisite town center. Located just off of Highway 75, Fairview town center is a short drive away from the major cities of Allen, McKinney, and Dallas, but is also well suited for pedestrian activity. The area includes retail, residential, and entertainment, complete with a splash pad for the kiddos in the summer.',
    ContactImage:'/assets/images/employees/Mark.jpg',
    ContactName:'Mark Cope',
    ContactPhone:2145925642,
    ContactEmail:'MarkCope@CopeDFW.com',
    BlankCell:'/'
  }
];
