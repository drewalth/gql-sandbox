
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateProductTwoInput {
    exampleField?: Nullable<number>;
}

export interface UpdateProductTwoInput {
    id: number;
}

export interface ProductOne {
    id: number;
    title: string;
    description: string;
    items: Item[];
}

export interface Item {
    id: number;
    name: string;
    productId: number;
}

export interface IQuery {
    productOneAll(): Nullable<Nullable<ProductOne>[]> | Promise<Nullable<Nullable<ProductOne>[]>>;
    productOne(id: number): Nullable<ProductOne> | Promise<Nullable<ProductOne>>;
    productTwoAll(): Nullable<ProductTwo>[] | Promise<Nullable<ProductTwo>[]>;
    productTwo(id: number): Nullable<ProductTwo> | Promise<Nullable<ProductTwo>>;
}

export interface ProductTwo {
    exampleField?: Nullable<number>;
    edited: string;
}

export interface IMutation {
    createProductTwo(createProductTwoInput: CreateProductTwoInput): ProductTwo | Promise<ProductTwo>;
    updateProductTwo(updateProductTwoInput: UpdateProductTwoInput): ProductTwo | Promise<ProductTwo>;
    removeProductTwo(id: number): Nullable<ProductTwo> | Promise<Nullable<ProductTwo>>;
}

type Nullable<T> = T | null;
