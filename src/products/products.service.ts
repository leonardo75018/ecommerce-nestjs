import { Injectable, HttpStatus,HttpException } from '@nestjs/common';
import { Iproduct } from 'src/interface/iproduct';

@Injectable()
export class ProductsService {
    
    private productsBdd : Iproduct[] = [
        {
            id : 1,
            name:   "Air Jordan 1 Retro High OG 'Shadow' 2018",
            price : 300,
            description : "La Air Jordan 1 Retro High est la silhouette la plus populaire de la Jordan Brand. De nombreuse fois déclinée au fil des années, elle revient pour la réédition d’un coloris populaire, la AJ1 Shadow. Déjà édité en 2013, cette version au visuel sombre adopte une base composée d’un upper mélangeant cuir box noir et cuir box gris. Le branding est lui aussi discret, en ton sur ton avec les couleurs de la paire.La semelle blanche vient très légèrement contraster et donner un peu de clarté. Choisissant un design furtif, la Air Jordan 1 Retro High Shadow se veut sobre et efficace, pour le plus grand plaisir des amateurs de sneakers !",
            quantity : 1,
            collection : "",
            image : "https://image.goat.com/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png"
        },
        {
            id : 2,
            name: "Jordan rend hommage à son histoire et à celle de son créateur avec cette nouvelle sortie. Modèle iconique, la marque au Jumpman réédite la Air Jordan 4 Bred dans une version 2019 mise à jour. Gardant les mêmes couleurs que le modèle original, comme les nombreuses rééditions, la paire est une copie conforme du modèle originel. La silhouette va même jusqu'a intégrer la signature Nike Air, comme sur le modèle porté par « his Airness » lors du fameux « The Shot » face à Craig Ehlo en 1898. La Air Jordan 4 Bred 2019 adopte une base en nubuck noir agrémentée de détails gris et rouges. L'ensemble est finalisé par une midsole blanche couplée à une outsole rouge. Un retour aux sources qui risque de plaire aux fans de longue date de Jordan et à tout bon amateur de sneakers !",
            price : 300,
            description : "",
            quantity : 1,
            collection : "",
            image : "https://image.goat.com/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png"
        },
        {
            id : 3,
            name: "Air Jordan 11 Retro 'Space Jam' 2016",
            price : 300,
            description : "",
            quantity : 1,
            collection : "",
            image : "Teasée lors du premier épisode de `23Live` présenté par Marcus Jordan, le fils de MJ, cette nouvelle version de la Air Jordan 11 célèbre le 25ème anniversaire de la silhouette de Tinker Hatfield ! La Air Jordan 11 Retro Jubilee 25th Anniversary présente une empeigne en mesh noir, complétée par un cuir noir verni. Quelques touches de gris argenté au niveau des oeillets et du logo Jumpman renforcent la sobriété du modèle. Le design se termine sur une midsole blanche ainsi qu'une outsole translucide. Entre la production de la série `23Live` centrée sur les icônes de la Jordan Brand et les sorties de modèles comme la Air Jordan 5 Retro Off White Sail, la marque au Jumpman est bien décidée à illuminer cette fin d'année !"
        },
        {
            id : 4,
            name: "Air Jordan 11 Retro 'Win Like '96'",
            price : 300,
            description : "L’un des plus grands classiques de la marque au Jumpman est de retour en 2019, après trois rééditions antérieures, restant fidèle à la version originale de 1996. La Air Jordan 11 Retro Bred reprend les codes couleurs des Bulls de Chicago et présente une empeigne en mesh ballistic noir, un mudguard en cuir verni noir, agrémenté du Jumpman en rouge ainsi que la mention « 23 » au niveau des talons. La midsole blanche et l’outsole rouge viennent finaliser le design emblématique et contraster avec le reste de la paire. Portée par Michael Jordan lors de son quatrième titre de meilleur joueur en finale de la NBA, la Air Jordan 11 Retro Bred se place comme un véritable classique de la sneaker.",
            quantity : 1,
            collection : "",
            image : "https://image.goat.com/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png"
        },
        {
            id : 5,
            name: "Air Jordan 11 Retro 'Legend Blue' 2014",
            price : 300,
            description : "La Jordan Brand dévoile une nouvelle Air Jordan 11 qui s'inspire de l'édition OG Columbia de 1996. Un retour aux sources pour la version low-top de la 11ème signature shoe de Jordan.La Air Jordan 11 Retro Low Legend Blue présente une base blanche mêlant cuir lisse et cuir verni. Une doublure intérieure noire vient contraster avec l'ensemble, tandis qu'on note plusieurs nuances de bleu sur l'outsole en forme de patte de panthère. L'outsole reprend également un branding Jumpman au centre. Fidèle à l'édition de 1996, cette nouvelle déclinaison complète la collection des Air Jordan 11, un modèle emblématique de la Jordan Brand.",
            quantity : 1,
            collection : "",
            image : "https://image.goat.com/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png"
        },
        {
            id : 6,
            name: "Wmns Air Jordan 1 Retro High OG 'Twist'",
            price : 300,
            description : "Après le succès incontestable de la Dunk Low Black White, Nike décline le coloris sur la version High de la silhouette de l'année 2021 ! La Nike Dunk High Panda (2021) affiche une construction classique en cuir lisse. Une combinaison d’empiècements noirs et blancs apportent un aspect old school, en clin d'oeil au versions color-block de l'iconique pack Be True To Your School de 1985. La semelle bicolore, les lacets et la languette sont accordés pour un look contrastant. Déjà édité dans le passé, notamment en 2008 et 2016, le retour de ce coloris intemporel risque de rapidement devenir un must-have. Note :Le branding sur la languette peut varier de couleur (noir, rouge ou rose) selon la date de production du produit.",
            quantity : 1,
            collection : "",
            image : "https://image.goat.com/attachments/product_template_pictures/images/021/545/481/original/509480_00.png.png"
        },
        {
            id : 7,
            name: "Air Jordan 1 Mid 'Multicolor Swoosh Black'" ,
            price : 300,
            description : "La marque Jordan est de retour avec son modèle phare : la Air Jordan 1. On découvre une nouvelle itération dans une version Mid riche en couleurs ! La Air Jordan 1 Mid Multicolor Swoosh se présente avec une empeigne en cuir blanc, suivie par des empiècements en nubuck de couleur rouge et bleu. On note que le swoosh brodé est multicolore et vient raviver le design de la création. À l’instar des modèles High et Mid, le logo Wings est apposé au-dessus du swoosh. L’outsole bleu vient compléter la structure de la paire. Avec cette version de Air Jordan 1 Mid riche en couleur, les looks des passionnés comme des amateurs de sneakers devraient s’illuminer de couleurs et permettre des tenues diverses et originales !",
            quantity : 1,
            collection : "",
            image :  "https://image.goat.com/attachments/product_template_pictures/images/012/910/690/original/554724_065.png.png"
        },
        {
            id : 8,
            name: "Air Jordan 4 Retro OG 'Bred' 2019" ,
            price : 300,
            description : "Jordan rend hommage à son histoire et à celle de son créateur avec cette nouvelle sortie. Modèle iconique, la marque au Jumpman réédite la Air Jordan 4 Bred dans une version 2019 mise à jour. Gardant les mêmes couleurs que le modèle original, comme les nombreuses rééditions, la paire est une copie conforme du modèle originel. La silhouette va même jusqu'a intégrer la signature Nike Air, comme sur le modèle porté par « his Airness » lors du fameux « The Shot » face à Craig Ehlo en 1898. La Air Jordan 4 Bred 2019 adopte une base en nubuck noir agrémentée de détails gris et rouges. L'ensemble est finalisé par une midsole blanche couplée à une outsole rouge. Un retour aux sources qui risque de plaire aux fans de longue date de Jordan et à tout bon amateur de sneakers !",
            quantity : 1,
            collection : "",
            image :  "https://image.goat.com/attachments/product_template_pictures/images/020/806/485/original/461782_00.png.png"
        },
        {
            id : 9,
            name: "Air Jordan 6 Retro 'Infrared' 2019" ,
            price : 300,
            description : "",
            quantity : 1,
            collection : "Ne vous laissez pas éblouir lorsque vous essayez d'acheter la Jordan 6 Retro Black Infrared (2019). Cette AJ6 possède une empeigne noire, une semelle intermédiaire noire avec des détails rouges, et une semelle translucide. Ces sneakers sont sorties en février 2019 au prix Retail de 200 $. Cette silhouette est un modèle incontournable, donc achetez-les sur StockX dès maintenant.",
            image :  "https://image.goat.com/attachments/product_template_pictures/images/018/675/311/original/464372_00.png.png"
        },
        {
            id : 10,
            name: "Wmns Air Jordan 12 Retro 'Reptile'" ,
            price : 300,
            description : "La Wmns Air Jordan 12 Retro 'Reptile' est un look haut de gamme exclusif aux femmes. L'empeigne Rising Sun Flag de la chaussure comprend des détails inspirés des reptiles, tandis que les œillets supérieurs en or métallique accentuent le design. Le garde-boue texturé habituel est également accentué par un insert en or métallique, tandis qu'une semelle intercalaire blanche contrastante abrite un amorti Air et une plaque de tige en fibre de carbone, laissant place à un motif de traction à chevrons.",
            quantity : 1,
            collection : "",
            image :   "https://image.goat.com/attachments/product_template_pictures/images/021/042/384/original/500924_00.png.png"
        }
    ];

    findAll(){
        return this.productsBdd;
    }

    fidOne(id:string){
        const product = this.productsBdd.find((product :Iproduct) => product.id == Number(id))

        if(!product){
            throw new HttpException(`Product id:${id}, not found`, HttpStatus.NOT_FOUND);
        }

        return product;
    }


    create(newProduct: Iproduct){
        const existProduct = this.productsBdd.find(product => product.name === newProduct.name)
        
        if(existProduct){
            throw new HttpException(`The product:${newProduct.name}, already exists`, HttpStatus.FOUND);
        }

        this.productsBdd.push(newProduct);
        return `Prouduct ${newProduct.name} is created`
    }

    update(id:string, product: Iproduct ){
        const indexProduct = this.productsBdd.findIndex(product => product.id == Number(id))

        this.productsBdd[indexProduct] = product;
    }


    remove(id:string){
        const indexProduct = this.productsBdd.findIndex(product => product.id == Number(id));

        if(indexProduct >= 0){
            this.productsBdd.splice(indexProduct,1);
            return `Product ${id} is deleted`
        }
        throw new HttpException(`Product id:${id}, not found`, HttpStatus.NOT_FOUND);

    }

}
