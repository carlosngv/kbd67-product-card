import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ButtonProps } from "../components/ProductButtons";
import { Props as ImageProps } from "../components/ProductImage";
import { Props as TitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    value?: number;
    maxCount?: number;
}


export interface ProductCardHOCProps {
    ( CardProps: ProductCardProps ) : JSX.Element;
    Title: ( Props:  TitleProps ) => JSX.Element;
    Image: ( Props:  ImageProps ) => JSX.Element;
    Buttons: ( Props: ButtonProps ) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: ( value: number ) => void;
    reset: () => void;
}