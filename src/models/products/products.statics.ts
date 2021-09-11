// Create Statics Methods
import { IProductDocument, IProductModel } from './products.types';

// examples
export async function findOneOrCreate(
    this: IProductModel,
    name: string
): Promise<IProductDocument> {
    const record = await this.findOne({ name });
    if (record)
        return record;
    return this.create({ name });
}