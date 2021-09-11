import {
    Request,
    Response
} from 'express';

const product: { name: string, description: string, img: string } = {
    name: "NIKE Liteforce Blue Sneakers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uir7dek0krwrtgxahdlm/air-vapormax-flyknit-3-shoe-FZBdxt.jpg"
};

// controller API
const productAPI = function(req: Request, res: Response) : void {
    res.send(product);
};

export default productAPI;