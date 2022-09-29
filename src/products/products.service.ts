import { Injectable, HttpStatus,HttpException } from '@nestjs/common';
import { Iproduct } from 'src/interface/iproduct';

@Injectable()
export class ProductsService {
    private productsBdd : Iproduct[] = [
        {
            id : 1,
            name: "nike1",
            price : 300,
            description : "",
            quantity : "",
            collection : "",
        },
        {
            id : 2,
            name: "",
            price : 300,
            description : "",
            quantity : "",
            collection : "",
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
