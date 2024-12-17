import * as React from 'react';
import renderer from "react-test-renderer";

// import {render, screen } from '@testing-library/react'

import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe( 'ProductTitle', () => {
    test('should show component with custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" /> 
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    
    test('should show component with product name', async () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
        
    });

});
