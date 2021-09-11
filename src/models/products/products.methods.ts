// Create Methods Set or Get
import mongoose, { Document } from 'mongoose';
import { IProductDocument } from './products.types';

// examples:
export async function setLastUpdated(this: IProductDocument): Promise<void> {
    const now = new Date();
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now;
        await this.save();
    }
}