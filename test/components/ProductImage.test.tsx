import * as React from 'react';
import renderer from "react-test-renderer";

// import {render, screen } from '@testing-library/react'

import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe( 'ProductImage', () => {
    test('should show component with img', () => {
        const wrapper = renderer.create(
            <ProductImage img={ product2.img } /> 
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should show component with no-image', () => {
        const wrapper = renderer.create(
            <ProductImage /> 
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    
    test('should show component with product 2 img', async () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage img={ product2.img } />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
        
    });

});
